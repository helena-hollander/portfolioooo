<template>
  <div class="visualizer-container aspect-[16/9]">
    <div v-if="!audioStarted" class="start-overlay" @click="startAudio">
      <button class="start-button">Click to Start Audio Visualization</button>
    </div>
    <div ref="p5Canvas" class="p5-canvas"></div>
    <div v-if="audioMessage" class="message-overlay">
      {{ audioMessage }}
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import p5 from 'p5';

const p5Canvas = ref(null);
let p5Instance = null;
const audioMessage = ref('');
const audioStarted = ref(false);

// Web Audio API variables
let audioContext = null;
let analyser = null;
let microphone = null;
let javascriptNode = null;
let amplitudeValue = 0; // Value to share with p5

// Function to initialize audio with Web Audio API instead of p5.sound
const startAudio = async () => {
  try {
    audioMessage.value = 'Requesting microphone access...';
    
    // Create audio context
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();
    
    // Get microphone
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioMessage.value = 'Microphone access granted!';
    
    // Create analyser
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    
    // Connect microphone to analyser
    microphone = audioContext.createMediaStreamSource(stream);
    microphone.connect(analyser);
    
    // Setup processor to regularly get amplitude data
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    // Use script processor to regularly update amplitude value
    javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);
    analyser.connect(javascriptNode);
    javascriptNode.connect(audioContext.destination);
    
    javascriptNode.onaudioprocess = function() {
      analyser.getByteFrequencyData(dataArray);
      
      // Calculate average amplitude from frequency data
      let sum = 0;
      for(let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
      }
      
      // Scale the amplitude for visualization (0-1 range)
      amplitudeValue = sum / (bufferLength * 255) * 15; // Scale factor for visibility
      
      // Log amplitude occasionally for debugging
      if(Math.random() < 0.01) { // Log roughly 1% of the time
        console.log("Current amplitude:", amplitudeValue);
      }
    };
    
    // Show success message briefly then hide
    setTimeout(() => {
      audioMessage.value = '';
      audioStarted.value = true;
    }, 5);
    
    // Create or recreate p5 instance with the new audio setup
    if (p5Instance) {
      p5Instance.remove();
    }
    createP5Instance();
    
  } catch (error) {
    console.error('Error accessing microphone:', error);
    audioMessage.value = 'Microphone access denied or error occurred. Visualizer will use simulated data.';
    
    // Create visualization anyway with simulated data
    setTimeout(() => {
      audioStarted.value = true;
      audioMessage.value = '';
      createP5Instance();
    }, 2000);
  }
};

onMounted(() => {
  console.log('Component mounted');
  // Allow DOM to fully render before creating p5 instance
  nextTick(() => {
    createP5Instance();
  });
});

const createP5Instance = () => {
  console.log('Creating p5 instance');
  
  const sketch = (p) => {
    let cols; 
    let rows; 
    let size = 6;
    let d = [];
    let max;
    let colors = ["#FBC1EE", "#F99C86", "#F88953", "#F7771F", "#F53F19", "#F20612", "#F43549", "#F76480", "#F992B7", "#FAAAD3"]; // Original colors
    let blueTones = ["#0000FF", "#1E90FF", "#4682B4", "#5F9EA0", "#87CEEB", "#ADD8E6", "#00008B", "#191970"]; // Blue tones
    let greenTones = ["#006400", "#228B22", "#32CD32", "#7CFC00", "#98FB98", "#00FF00", "#00FA9A", "#32CD32"]; // Green tones
    let currentColors = colors; // Variable to hold the current color array
    let rings = 2; // Starting rings value
    let fakeAmplitude = 0;

    p.setup = () => {
      console.log('p5 setup running');
      
      // Get exact container dimensions
      const containerElement = p5Canvas.value;
      const containerWidth = containerElement.clientWidth;
      const containerHeight = containerElement.clientHeight;
      
      console.log(`Container size: ${containerWidth}x${containerHeight}`);
      
      // Create canvas with container dimensions
      const canvas = p.createCanvas(containerWidth, containerHeight);
      canvas.parent(p5Canvas.value);
      
      // Calculate columns and rows based on container dimensions
      cols = Math.max(1, p.floor(containerWidth / size));
      rows = Math.max(1, p.floor(containerHeight / size));
      
      max = p.sqrt(p.pow(containerWidth / 2, 2) + p.pow(containerHeight / 2, 2));
      
      // Precalculate distances
      for (let i = 0; i < cols; i++) {
        d[i] = [];
        for (let j = 0; j < rows; j++) {
          let x = i * size + size / 2;
          let y = j * size + size / 2;
          d[i][j] = p.dist(x, y, containerWidth / 2, containerHeight / 2);
        }
      }
    };

    p.draw = () => {
      p.background(0);
      let amplitude;
      
      // Use the amplitude from Web Audio API if available, otherwise use simulated data
      if (audioStarted.value && amplitudeValue > 0) {
        amplitude = amplitudeValue * 10; //tallet styrrer animation speed
      } else {
        // Use fake amplitude for visual effect
        fakeAmplitude = (fakeAmplitude + 0.05) % (Math.PI * 2);
        amplitude = p.sin(fakeAmplitude) * 3;
      }
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = i * size + size / 2;
          let y = j * size + size / 2;
          let index = p.floor(p.map(Math.abs(d[i][j]), 0, max, 0, currentColors.length * rings));
          let c = currentColors[index % currentColors.length];
          p.fill(c);
          p.noStroke();
          p.ellipse(x, y, size, size);
          
          d[i][j] -= amplitude;
        }
      }
    };

    p.keyPressed = () => {
      if (p.key === ' ') {
        // Handle fullscreen
        try {
          let fs = p.fullscreen();
          p.fullscreen(!fs);
        } catch (e) {
          console.warn('Fullscreen not supported:', e);
        }
      }
      if (p.key === 'a' || p.key === 'A') {
        currentColors = blueTones;
      }
      if (p.key === 'b' || p.key === 'B') {
        currentColors = colors;
      }
      if (p.key === 'c' || p.key === 'C') {
        currentColors = greenTones;
      }
      if (p.key === 'd' || p.key === 'D') {
        rings = Math.max(1, rings - 1);
      }
      if (p.key === 'e' || p.key === 'E') {
        rings = Math.min(5, rings + 1);
      }
      // If not already started, any key will start audio
      if (!audioStarted.value) {
        startAudio();
      }
    };

    p.windowResized = () => {
      // Get updated container dimensions
      const containerElement = p5Canvas.value;
      const containerWidth = containerElement.clientWidth;
      const containerHeight = containerElement.clientHeight;
      
      console.log(`Resized to: ${containerWidth}x${containerHeight}`);
      
      p.resizeCanvas(containerWidth, containerHeight);
      
      // Recalculate cols and rows based on new dimensions
      cols = Math.max(1, p.floor(containerWidth / size));
      rows = Math.max(1, p.floor(containerHeight / size));
      
      max = p.sqrt(p.pow(containerWidth / 2, 2) + p.pow(containerHeight / 2, 2));
      
      // Recalculate distances
      for (let i = 0; i < cols; i++) {
        d[i] = [];
        for (let j = 0; j < rows; j++) {
          let x = i * size + size / 2;
          let y = j * size + size / 2;
          d[i][j] = p.dist(x, y, containerWidth / 2, containerHeight / 2);
        }
      }
    };
  };

  try {
    // Create p5 instance
    p5Instance = new p5(sketch);
    
    // Manually trigger resize once to ensure correct sizing
    window.addEventListener('resize', () => {
      if (p5Instance) {
        p5Instance.windowResized();
      }
    });
  } catch (error) {
    console.error('Error creating p5 instance:', error);
  }
};

onBeforeUnmount(() => {
  console.log('Component unmounting');
  // Clean up resources
  if (p5Instance) {
    p5Instance.remove();
    p5Instance = null;
  }
  
  // Clean up audio resources
  if (javascriptNode) {
    javascriptNode.disconnect();
  }
  if (microphone) {
    microphone.disconnect();
  }
  if (analyser) {
    analyser.disconnect();
  }
  if (audioContext && audioContext.state !== 'closed') {
    audioContext.close();
  }
});
</script>

<style scoped>
.visualizer-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 50px;
  overflow: hidden;
  background-color: #000;
}

.p5-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  display: block;
}

.start-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.0);
  z-index: 3;
  cursor: pointer;
}

.start-button {
  padding: 15px 30px;
  background-color: #2126cf;
  color: white;
  border: none;
  border-radius: 5px;
  font: Vazirmatn;
  font-size: 18px;
  cursor: pointer;
}

.message-overlay {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.0);
  padding: 10px 20px;
  border-radius: 5px;
}
</style>