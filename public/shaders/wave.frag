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
  
  // Sample the texture at the distorted coordinates
  vec4 color = texture2D(tex, uv);
  
  gl_FragColor = color;
}