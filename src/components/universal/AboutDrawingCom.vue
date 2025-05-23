<template>
    <div class="fixed inset-0 w-full h-full pointer-events-none">
      <div 
        ref="canvasContainer" 
        class="absolute inset-0 w-full h-full pointer-events-none" 
        aria-label="A transparent canvas covering the full screen where the user draws by moving the mouse"
      ></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import p5 from 'p5';
  
  const canvasContainer = ref(null);
  let p5Instance = null;
  let strongContrastColor = '';
  
  onMounted(() => {
    // Extract the strongContrast color from computed styles
    const element = document.createElement('div');
    element.classList.add('text-strongContrast');
    document.body.appendChild(element);
    strongContrastColor = window.getComputedStyle(element).color;
    document.body.removeChild(element);
    
    // Create a new p5 instance
    p5Instance = new p5(sketch, canvasContainer.value);
  });
  
  onUnmounted(() => {
    // Clean up p5 instance when component is unmounted
    if (p5Instance) {
      p5Instance.remove();
    }
    // Remove resize event listener
    window.removeEventListener('resize', handleResize);
  });
  
  // Handle window resize
  const handleResize = () => {
    if (p5Instance) {
      p5Instance.resizeCanvas(window.innerWidth, window.innerHeight);
      p5Instance.clear(); // Keep canvas transparent after resize
    }
  };

  
  // p5.js sketch
  const sketch = (p) => {
    p.setup = () => {
      // Create the canvas with window dimensions
      let canvas = p.createCanvas(window.innerWidth, window.innerHeight);
      
      // Force pointer-events to none (ensure clicking works through canvas)
      canvas.elt.style.pointerEvents = 'none';
      
      // Clear the background (transparent)
      p.clear();
      
      // Set width of the lines to 2
      p.strokeWeight(2);
      
      // Set color mode to hue-saturation-brightness (HSB)
      p.colorMode(p.HSB);
      
      // Set screen reader accessible description
      p.describe('A transparent canvas where the user draws by moving the mouse');
      
      // Add resize event listener
      window.addEventListener('resize', handleResize);
    };
  
    p.draw = () => {
      // Use the extracted strongContrast color
      p.stroke(strongContrastColor);
      p.line(p.pmouseX, p.pmouseY, p.mouseX, p.mouseY);
    };
     // Add keyPressed function within the sketch
  p.keyPressed = () => {
    if (p.key === ' ') {
      p.clear();
      return false; // Prevent default behavior
    }
    return true;
  };
  };
  </script>