<template>
    <div ref="canvasContainer" class="canvas-container"></div>
  </template>
  
  <script>
  import p5 from 'p5';
  
  export default {
    name: 'InteractiveLogoCom',
    props: {
      text: {
        type: String,
        default: 'YOUR LOGO'
      },
      textSize: {
        type: Number,
        default: 0.15
      },
      textColor: {
        type: String,
        default: '#0404FF'
      },
      backgroundColor: {
        type: String,
        default: '#ffffff'
      },
      fontFamily: {
        type: String,
        default: 'Vazirmatn'
      }
    },
    data() {
      return {
        p5Instance: null
      };
    },
    mounted() {
      this.createP5Instance();
    },
    beforeUnmount() {
      if (this.p5Instance) {
        this.p5Instance.remove();
      }
    },
    methods: {
      createP5Instance() {
        const sketch = (p) => {
          let graphic;
          let shader;
          let freq = 20.0;
          let amp = 0.0;
          let targetFreq = freq;
          let targetAmp = amp;
          const minFreq = 20.0;
          const maxFreq = 50.0;
          const minAmp = 0.0;
          const maxAmp = 0.03;
          const easing = 0.1; // Controls smoothness of transitions
          
          // Define shader code
          const vertexShader = `
            precision mediump float;
            attribute vec3 aPosition;
            attribute vec2 aTexCoord;
            varying vec2 vTexCoord;
            
            void main() {
              vTexCoord = aTexCoord;
              vec4 positionVec4 = vec4(aPosition, 1.0);
              positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
              gl_Position = positionVec4;
            }
          `;
          
          const fragmentShader = `
            precision mediump float;
            varying vec2 vTexCoord;
            uniform sampler2D tex;
            uniform float time;
            uniform float frequency;
            uniform float amplitude;
            uniform float speed;
            
            void main() {
              vec2 uv = vTexCoord;
              
              // Create wave distortion effect
              uv.x += sin(uv.y * frequency + time * speed) * amplitude;
              uv.y += sin(uv.x * frequency + time * speed) * amplitude;
              
              // Keep UV coordinates within bounds
              uv = clamp(uv, 0.0, 1.0);
              
              // Sample the texture at the distorted coordinates
              vec4 color = texture2D(tex, uv);
              
              gl_FragColor = color;
            }
          `;
          
          p.setup = () => {
  // Create canvas based on window size
  const canvas = p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
  canvas.parent(this.$refs.canvasContainer);

  // Create shader
  shader = p.createShader(vertexShader, fragmentShader);

  // Create graphics buffer for text (use P2D renderer)
  graphic = p.createGraphics(p.width, p.height, p.P2D);

  p.noStroke();
  p.frameRate(60);
};
          
          p.draw = () => {
            // Clear the graphics buffer
            graphic.clear(); // Use clear() to ensure transparency
            graphic.background(this.backgroundColor);
            
            // Set text properties using the web font
            graphic.push(); // Save the current transformation state
            graphic.translate(0, graphic.height); // Move the origin to the bottom-left corner
            graphic.scale(1, -1); // Flip the Y-axis
            
            graphic.textFont(this.fontFamily);
            graphic.textSize(p.width * this.textSize);
            graphic.textAlign(p.CENTER, p.CENTER);
            //graphic.textStyle(p.BOLD);
            graphic.fill(this.textColor);
            graphic.noStroke();
            
            // Draw text in the center
            graphic.text(this.text, graphic.width / 2, graphic.height / 2);
            
            graphic.pop(); // Restore the original transformation state
            
            // Update target frequency and amplitude based on mouse position
            if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
              // Map mouse X position to frequency range
              targetFreq = p.map(p.mouseX, 0, p.width, minFreq, maxFreq);
              
              // Map mouse Y position to amplitude
              targetAmp = p.map(p.mouseY, 0, p.height, minAmp, maxAmp);
            } else {
              // Subtle default animation when mouse is outside
              targetFreq = minFreq + 5;
              targetAmp = 0.005;
            }
            
            // Smooth transitions using easing
            freq += (targetFreq - freq) * easing;
            amp += (targetAmp - amp) * easing;
            
            // Apply shader
            p.shader(shader);
            shader.setUniform('tex', graphic);
            shader.setUniform('time', p.frameCount * 0.03);
            shader.setUniform('frequency', freq);
            shader.setUniform('amplitude', amp);
            shader.setUniform('speed', 0.3);
            
            // Draw rectangle with shader applied
            p.rect(0, 0, p.width, p.height);
          };
          
          p.windowResized = () => {
  // Resize the canvas to match the new window size
  p.resizeCanvas(window.innerWidth, window.innerHeight);

  // Recreate the graphics buffer with the new dimensions
  graphic = p.createGraphics(p.width, p.height, p.P2D);

  // Ensure the text stays centered
  graphic.textAlign(p.CENTER, p.CENTER);
};
        };
        
        this.p5Instance = new p5(sketch);
      }
    }
  };
  </script>
  
  <style scoped>
  .canvas-container {
    width: 100%;
    height: 100%;
  }
  </style>