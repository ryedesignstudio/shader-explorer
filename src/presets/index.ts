import type { Preset } from '../types';

export const presets: Preset[] = [
  // ABSTRACT
  {
    id: 'plasma',
    name: 'Plasma',
    description: 'Classic plasma effect with swirling colors',
    category: 'abstract',
    colors: [
      { key: 'color1', label: 'Primary', defaultValue: '#ff0066', description: 'First plasma color' },
      { key: 'color2', label: 'Secondary', defaultValue: '#00ffcc', description: 'Second plasma color' },
      { key: 'color3', label: 'Accent', defaultValue: '#6600ff', description: 'Third plasma color' },
    ],
    fragmentShader: `precision mediump float;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color3;
varying vec2 v_uv;

void main() {
    vec2 uv = v_uv;
    float t = u_time * 0.5;
    float v1 = sin(uv.x * 10.0 + t);
    float v2 = sin(10.0 * (uv.x * sin(t / 2.0) + uv.y * cos(t / 3.0)) + t);
    float v3 = sin(sqrt(100.0 * ((uv.x - 0.5 + sin(t / 5.0)) * (uv.x - 0.5 + sin(t / 5.0)) + (uv.y - 0.5 + cos(t / 3.0)) * (uv.y - 0.5 + cos(t / 3.0))) + 1.0) + t);
    float v = v1 + v2 + v3;
    vec3 col = mix(u_color1, u_color2, sin(v * 3.14159) * 0.5 + 0.5);
    col = mix(col, u_color3, sin(v * 3.14159 + 2.0) * 0.5 + 0.5);
    float mouseDist = length(v_uv - u_mouse);
    col += vec3(0.2) * smoothstep(0.3, 0.0, mouseDist);
    gl_FragColor = vec4(col, 1.0);
}`,
  },
  {
    id: 'gradient-flow',
    name: 'Gradient Flow',
    description: 'Smooth animated gradient transitions',
    category: 'abstract',
    colors: [
      { key: 'color1', label: 'Start Color', defaultValue: '#ff6b6b', description: 'Gradient start' },
      { key: 'color2', label: 'End Color', defaultValue: '#4ecdc4', description: 'Gradient end' },
    ],
    fragmentShader: `precision mediump float;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_color1;
uniform vec3 u_color2;
varying vec2 v_uv;

void main() {
    vec2 uv = v_uv;
    float t = u_time * 0.3;
    float wave = sin(uv.x * 3.0 + t) * 0.1 + sin(uv.y * 2.0 - t * 0.7) * 0.1;
    float gradient = uv.x + uv.y * 0.5 + wave;
    gradient = fract(gradient + t * 0.1);
    vec3 col = mix(u_color1, u_color2, smoothstep(0.0, 1.0, gradient));
    float mouseDist = length(v_uv - u_mouse);
    col = mix(col, u_color2, smoothstep(0.4, 0.0, mouseDist) * 0.5);
    gl_FragColor = vec4(col, 1.0);
}`,
  },
  {
    id: 'noise-field',
    name: 'Noise Field',
    description: 'Perlin noise visualization',
    category: 'abstract',
    colors: [
      { key: 'color1', label: 'Dark', defaultValue: '#1a1a2e', description: 'Dark areas' },
      { key: 'color2', label: 'Light', defaultValue: '#eaf6ff', description: 'Light areas' },
    ],
    fragmentShader: `precision mediump float;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_color1;
uniform vec3 u_color2;
varying vec2 v_uv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
    float v = 0.0; float a = 0.5;
    for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
    return v;
}
void main() {
    vec2 uv = v_uv * 4.0;
    float t = u_time * 0.2;
    float n = fbm(uv + t) + fbm(uv * 2.0 - t * 0.5) * 0.5;
    float mouseDist = length(v_uv - u_mouse);
    n += smoothstep(0.3, 0.0, mouseDist) * 0.3;
    vec3 col = mix(u_color1, u_color2, n);
    gl_FragColor = vec4(col, 1.0);
}`,
  },

  // NATURE
  {
    id: 'aurora',
    name: 'Aurora Borealis',
    description: 'Flowing northern lights effect',
    category: 'nature',
    colors: [
      { key: 'primary', label: 'Primary Glow', defaultValue: '#00ff88', description: 'Main aurora color' },
      { key: 'secondary', label: 'Secondary Glow', defaultValue: '#0088ff', description: 'Accent color' },
      { key: 'background', label: 'Sky', defaultValue: '#0a0a20', description: 'Background sky' },
    ],
    fragmentShader: `precision mediump float;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_primary;
uniform vec3 u_secondary;
uniform vec3 u_background;
varying vec2 v_uv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
void main() {
    vec2 uv = v_uv;
    float t = u_time * 0.3;
    float aurora = 0.0;
    for (float i = 0.0; i < 3.0; i++) {
        float offset = i * 0.15;
        float wave = sin(uv.x * 3.0 + t + i) * 0.1;
        float band = smoothstep(0.1, 0.0, abs(uv.y - 0.6 - offset - wave));
        band *= noise(vec2(uv.x * 5.0 + t, i));
        aurora += band;
    }
    vec3 auroraColor = mix(u_primary, u_secondary, sin(uv.x * 2.0 + t) * 0.5 + 0.5);
    vec3 col = u_background + auroraColor * aurora;
    float mouseDist = length(v_uv - u_mouse);
    col += u_primary * 0.3 * smoothstep(0.3, 0.0, mouseDist);
    gl_FragColor = vec4(col, 1.0);
}`,
  },
  {
    id: 'ocean-waves',
    name: 'Ocean Waves',
    description: 'Rippling water surface',
    category: 'nature',
    colors: [
      { key: 'deep', label: 'Deep Water', defaultValue: '#003366', description: 'Deep ocean color' },
      { key: 'surface', label: 'Surface', defaultValue: '#0099cc', description: 'Surface highlights' },
      { key: 'foam', label: 'Foam', defaultValue: '#ffffff', description: 'Wave foam' },
    ],
    fragmentShader: `precision mediump float;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_deep;
uniform vec3 u_surface;
uniform vec3 u_foam;
varying vec2 v_uv;

void main() {
    vec2 uv = v_uv;
    float t = u_time;
    float wave1 = sin(uv.x * 8.0 + t * 2.0) * 0.02;
    float wave2 = sin(uv.x * 12.0 - t * 1.5 + uv.y * 3.0) * 0.015;
    float wave3 = sin(uv.x * 20.0 + t * 3.0) * 0.01;
    float waves = wave1 + wave2 + wave3;
    float depth = uv.y + waves;
    vec3 col = mix(u_deep, u_surface, smoothstep(0.0, 1.0, depth));
    float foam = smoothstep(0.02, 0.025, waves + 0.02);
    col = mix(col, u_foam, foam * 0.5);
    float mouseDist = length(v_uv - u_mouse);
    float ripple = sin(mouseDist * 30.0 - t * 5.0) * smoothstep(0.3, 0.0, mouseDist);
    col += u_foam * ripple * 0.2;
    gl_FragColor = vec4(col, 1.0);
}`,
  },
  {
    id: 'fire',
    name: 'Fire',
    description: 'Flame and fire effect',
    category: 'nature',
    colors: [
      { key: 'core', label: 'Core', defaultValue: '#ffff00', description: 'Hot center' },
      { key: 'mid', label: 'Middle', defaultValue: '#ff6600', description: 'Mid flame' },
      { key: 'outer', label: 'Outer', defaultValue: '#cc0000', description: 'Outer flame' },
    ],
    fragmentShader: `precision mediump float;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_core;
uniform vec3 u_mid;
uniform vec3 u_outer;
varying vec2 v_uv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
    vec2 i = floor(p); vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
void main() {
    vec2 uv = v_uv;
    uv.x = uv.x * 2.0 - 1.0;
    float t = u_time * 2.0;
    float fire = 0.0;
    for (float i = 1.0; i < 4.0; i++) {
        float n = noise(vec2(uv.x * 3.0 * i, uv.y * 5.0 - t * i * 0.5));
        fire += n / i;
    }
    fire *= smoothstep(1.0, 0.3, abs(uv.x));
    fire *= smoothstep(0.0, 0.5, uv.y);
    fire *= smoothstep(1.0, 0.3, uv.y);
    vec3 col = mix(u_outer, u_mid, fire);
    col = mix(col, u_core, fire * fire);
    col *= fire * 2.0;
    float mouseDist = length(v_uv - u_mouse);
    col += u_core * smoothstep(0.2, 0.0, mouseDist) * 0.5;
    gl_FragColor = vec4(col, 1.0);
}`,
  },
  {
    id: 'sunset',
    name: 'Sunset',
    description: 'Gradient sky with sun glow',
    category: 'nature',
    colors: [
      { key: 'sky', label: 'Sky', defaultValue: '#1a0533', description: 'Upper sky' },
      { key: 'horizon', label: 'Horizon', defaultValue: '#ff6b35', description: 'Horizon glow' },
      { key: 'sun', label: 'Sun', defaultValue: '#ffdd00', description: 'Sun color' },
    ],
    fragmentShader: `precision mediump float;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_sky;
uniform vec3 u_horizon;
uniform vec3 u_sun;
varying vec2 v_uv;

void main() {
    vec2 uv = v_uv;
    float t = u_time * 0.1;
    vec3 col = mix(u_horizon, u_sky, smoothstep(0.0, 0.8, uv.y));
    vec2 sunPos = vec2(0.5 + sin(t) * 0.1, 0.3);
    float sunDist = length(uv - sunPos);
    float sun = smoothstep(0.15, 0.0, sunDist);
    float glow = smoothstep(0.5, 0.0, sunDist) * 0.5;
    col = mix(col, u_sun, sun);
    col += u_sun * glow * 0.3;
    col += u_horizon * smoothstep(0.8, 0.0, sunDist) * 0.2;
    float mouseDist = length(v_uv - u_mouse);
    col += u_sun * 0.2 * smoothstep(0.2, 0.0, mouseDist);
    gl_FragColor = vec4(col, 1.0);
}`,
  },

  // GEOMETRIC
  {
    id: 'grid-pulse',
    name: 'Grid Pulse',
    description: 'Pulsing grid lines',
    category: 'geometric',
    colors: [
      { key: 'background', label: 'Background', defaultValue: '#0a0a0a', description: 'Grid background' },
      { key: 'lines', label: 'Lines', defaultValue: '#00ffff', description: 'Grid lines' },
    ],
    fragmentShader: `precision mediump float;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_background;
uniform vec3 u_lines;
varying vec2 v_uv;

void main() {
    vec2 uv = v_uv;
    float t = u_time;
    float aspect = u_resolution.x / u_resolution.y;
    vec2 grid = fract(uv * vec2(10.0 * aspect, 10.0));
    float lines = smoothstep(0.05, 0.0, grid.x) + smoothstep(0.05, 0.0, grid.y);
    lines = min(lines, 1.0);
    float dist = length(uv - 0.5);
    float pulse = sin(dist * 20.0 - t * 3.0) * 0.5 + 0.5;
    pulse *= smoothstep(1.0, 0.0, dist);
    vec3 col = u_background;
    col += u_lines * lines * (0.3 + pulse * 0.7);
    float mouseDist = length(v_uv - u_mouse);
    col += u_lines * smoothstep(0.15, 0.0, mouseDist) * 0.5;
    gl_FragColor = vec4(col, 1.0);
}`,
  },
  {
    id: 'circles',
    name: 'Concentric Circles',
    description: 'Animated concentric circles',
    category: 'geometric',
    colors: [
      { key: 'background', label: 'Background', defaultValue: '#1a1a2e', description: 'Background' },
      { key: 'rings', label: 'Rings', defaultValue: '#e94560', description: 'Circle color' },
    ],
    fragmentShader: `precision mediump float;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_background;
uniform vec3 u_rings;
varying vec2 v_uv;

void main() {
    vec2 uv = v_uv - 0.5;
    float aspect = u_resolution.x / u_resolution.y;
    uv.x *= aspect;
    float t = u_time;
    float dist = length(uv);
    float rings = sin(dist * 30.0 - t * 2.0);
    rings = smoothstep(0.0, 0.1, rings);
    vec3 col = mix(u_background, u_rings, rings * smoothstep(0.8, 0.0, dist));
    vec2 mouseUV = v_uv - u_mouse;
    mouseUV.x *= aspect;
    float mouseDist = length(mouseUV);
    float mouseRings = sin(mouseDist * 20.0 - t * 3.0);
    mouseRings = smoothstep(0.0, 0.1, mouseRings) * smoothstep(0.4, 0.0, mouseDist);
    col += u_rings * mouseRings * 0.5;
    gl_FragColor = vec4(col, 1.0);
}`,
  },
  {
    id: 'voronoi',
    name: 'Voronoi',
    description: 'Voronoi cell pattern',
    category: 'geometric',
    colors: [
      { key: 'cells', label: 'Cells', defaultValue: '#2d3436', description: 'Cell fill' },
      { key: 'edges', label: 'Edges', defaultValue: '#00cec9', description: 'Cell edges' },
    ],
    fragmentShader: `precision mediump float;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_cells;
uniform vec3 u_edges;
varying vec2 v_uv;

vec2 hash2(vec2 p) { return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453); }
void main() {
    vec2 uv = v_uv * 5.0;
    float t = u_time * 0.5;
    vec2 i = floor(uv);
    vec2 f = fract(uv);
    float minDist = 1.0;
    float secondDist = 1.0;
    for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
            vec2 neighbor = vec2(float(x), float(y));
            vec2 point = hash2(i + neighbor);
            point = 0.5 + 0.5 * sin(t + 6.2831 * point);
            float d = length(neighbor + point - f);
            if (d < minDist) { secondDist = minDist; minDist = d; }
            else if (d < secondDist) { secondDist = d; }
        }
    }
    float edge = secondDist - minDist;
    vec3 col = mix(u_edges, u_cells, smoothstep(0.0, 0.05, edge));
    float mouseDist = length(v_uv - u_mouse);
    col += u_edges * smoothstep(0.2, 0.0, mouseDist) * 0.3;
    gl_FragColor = vec4(col, 1.0);
}`,
  },

  // ANIMATED
  {
    id: 'starfield',
    name: 'Starfield',
    description: 'Twinkling stars with parallax',
    category: 'animated',
    colors: [
      { key: 'background', label: 'Space', defaultValue: '#000011', description: 'Space background' },
      { key: 'stars', label: 'Stars', defaultValue: '#ffffff', description: 'Star color' },
    ],
    fragmentShader: `precision mediump float;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_background;
uniform vec3 u_stars;
varying vec2 v_uv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
    vec2 uv = v_uv;
    float t = u_time;
    vec3 col = u_background;
    for (float layer = 1.0; layer < 4.0; layer++) {
        vec2 starUV = uv * (20.0 + layer * 10.0);
        starUV += vec2(t * layer * 0.02, 0.0);
        vec2 id = floor(starUV);
        vec2 f = fract(starUV) - 0.5;
        float h = hash(id);
        if (h > 0.8) {
            float twinkle = sin(t * (2.0 + h * 3.0) + h * 6.28) * 0.5 + 0.5;
            float star = smoothstep(0.1 / layer, 0.0, length(f));
            col += u_stars * star * twinkle * (0.5 + 0.5 / layer);
        }
    }
    float mouseDist = length(v_uv - u_mouse);
    col += vec3(0.1, 0.05, 0.2) * smoothstep(0.3, 0.0, mouseDist);
    gl_FragColor = vec4(col, 1.0);
}`,
  },
  {
    id: 'matrix-rain',
    name: 'Matrix Rain',
    description: 'Digital rain effect',
    category: 'animated',
    colors: [
      { key: 'background', label: 'Background', defaultValue: '#000000', description: 'Dark background' },
      { key: 'rain', label: 'Rain', defaultValue: '#00ff00', description: 'Rain color' },
    ],
    fragmentShader: `precision mediump float;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_background;
uniform vec3 u_rain;
varying vec2 v_uv;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
    vec2 uv = v_uv;
    float t = u_time;
    vec3 col = u_background;
    float columns = 30.0;
    float colId = floor(uv.x * columns);
    float colOffset = hash(vec2(colId, 0.0));
    float speed = 0.5 + colOffset * 0.5;
    float y = fract(uv.y + t * speed + colOffset);
    float drop = smoothstep(0.0, 0.3, y) * smoothstep(1.0, 0.7, y);
    float flicker = hash(vec2(colId, floor(t * 10.0)));
    drop *= 0.5 + flicker * 0.5;
    col += u_rain * drop * 0.8;
    float head = smoothstep(0.02, 0.0, abs(y - 0.95));
    col += u_rain * head * 2.0;
    float mouseDist = length(v_uv - u_mouse);
    col += u_rain * smoothstep(0.2, 0.0, mouseDist) * 0.3;
    gl_FragColor = vec4(col, 1.0);
}`,
  },
  {
    id: 'pulse',
    name: 'Radial Pulse',
    description: 'Radial pulse from center',
    category: 'animated',
    colors: [
      { key: 'background', label: 'Background', defaultValue: '#0f0f23', description: 'Background' },
      { key: 'pulse', label: 'Pulse', defaultValue: '#ff6b6b', description: 'Pulse color' },
      { key: 'accent', label: 'Accent', defaultValue: '#4ecdc4', description: 'Secondary pulse' },
    ],
    fragmentShader: `precision mediump float;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform vec3 u_background;
uniform vec3 u_pulse;
uniform vec3 u_accent;
varying vec2 v_uv;

void main() {
    vec2 uv = v_uv - 0.5;
    float aspect = u_resolution.x / u_resolution.y;
    uv.x *= aspect;
    float t = u_time;
    float dist = length(uv);
    float pulse1 = sin(dist * 15.0 - t * 3.0) * 0.5 + 0.5;
    float pulse2 = sin(dist * 10.0 - t * 2.0 + 1.0) * 0.5 + 0.5;
    pulse1 *= smoothstep(0.8, 0.0, dist);
    pulse2 *= smoothstep(0.6, 0.0, dist);
    vec3 col = u_background;
    col += u_pulse * pulse1 * 0.6;
    col += u_accent * pulse2 * 0.4;
    col += u_pulse * smoothstep(0.2, 0.0, dist) * 0.5;
    vec2 mouseUV = v_uv - u_mouse;
    mouseUV.x *= aspect;
    float mouseDist = length(mouseUV);
    float mousePulse = sin(mouseDist * 20.0 - t * 4.0) * smoothstep(0.3, 0.0, mouseDist);
    col += u_accent * mousePulse * 0.3;
    gl_FragColor = vec4(col, 1.0);
}`,
  },
];
