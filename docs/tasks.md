# Implementation Plan: Shader Preset Explorer

## Overview

Build a shader preset explorer with color customization. Users browse presets, pick colors, and see live results. Built with React + Three.js + Vite.

## Tasks

- [ ] 1. Project Setup
  - [x] 1.1 Initialize Vite + React + TypeScript project
    - Create project with `npm create vite@latest shader-explorer -- --template react-ts`
    - Install dependencies: three, @types/three, react-colorful
    - Configure TypeScript strict mode
    - _Requirements: 6.1_

  - [x] 1.2 Create type definitions
    - Define Preset, ColorDefinition interfaces
    - Define ShaderUniforms type
    - Create VERTEX_SHADER constant
    - _Requirements: 8.2, 8.3_

- [ ] 2. Shader Engine Service
  - [x] 2.1 Implement ShaderEngine
    - Create hexToVec3 utility for color conversion
    - Create createMaterial method with dynamic color uniforms
    - Create updateColors method for live updates
    - _Requirements: 2.1, 3.2_

  - [ ]* 2.2 Write property test for color conversion
    - **Property 6: Hex Color Parsing**
    - **Validates: Requirements 3.3**

- [ ] 3. Preset Registry
  - [x] 3.1 Create PresetRegistry service
    - Implement getAll, getById, getByCategory, getCategories methods
    - _Requirements: 1.1, 4.1_

  - [x] 3.2 Create initial preset library (13 presets)
    - Abstract: Plasma, Gradient Flow, Noise Field
    - Nature: Aurora, Ocean Waves, Fire, Sunset
    - Geometric: Grid Pulse, Circles, Voronoi
    - Animated: Starfield, Matrix Rain, Pulse
    - Each preset needs: id, name, description, category, colors array, fragmentShader
    - _Requirements: 1.1, 8.1, 8.2_

  - [ ]* 3.3 Write property test for preset defaults
    - **Property 3: Preset Colors Have Defaults**
    - **Validates: Requirements 3.5, 8.2**

- [ ] 4. Shader Preview Component
  - [x] 4.1 Implement ShaderPreview
    - Create Three.js scene with plane geometry
    - Set up animation loop updating u_time
    - Handle mouse move for u_mouse uniform
    - Handle resize for u_resolution uniform
    - Display fallback on compilation error
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

  - [ ]* 4.2 Write property test for mouse normalization
    - **Property 7: Mouse Position Normalization**
    - **Validates: Requirements 2.3**

- [ ] 5. Color Panel Component
  - [x] 5.1 Implement ColorPanel
    - Render color picker for each ColorDefinition
    - Display label and description for each color
    - Implement hex input field
    - Add Reset Colors button
    - _Requirements: 3.1, 3.3, 3.4, 3.5_

  - [ ]* 5.2 Write property test for reset functionality
    - **Property 8: Reset Restores Defaults**
    - **Validates: Requirements 3.5**

- [ ] 6. Preset Gallery Component
  - [x] 6.1 Implement PresetGallery
    - Create responsive grid layout
    - Render animated thumbnail for each preset (mini Three.js canvas or static image)
    - Highlight selected preset
    - Implement category filter tabs
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 4.1, 4.2, 4.3_

  - [ ]* 6.2 Write property test for category filtering
    - **Property 5: Category Filter Shows Correct Presets**
    - **Validates: Requirements 4.2**

- [ ] 7. URL State Manager
  - [x] 7.1 Implement URLStateManager
    - Parse URL params on load
    - Update URL on preset/color change (without page reload)
    - Handle invalid/missing params gracefully
    - _Requirements: 7.1, 7.2, 7.3_

  - [ ]* 7.2 Write property test for URL round-trip
    - **Property 2: URL State Round-Trip**
    - **Validates: Requirements 7.1, 7.2**

- [ ] 8. Export Modal Component
  - [x] 8.1 Implement ExportModal
    - Generate Three.js code snippet with current colors
    - Include full animation loop and uniform setup
    - Add Copy to Clipboard button with feedback
    - Add Download as HTML button
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [ ]* 8.2 Write property test for export completeness
    - **Property 4: Export Contains All Uniforms**
    - **Validates: Requirements 5.1, 5.4**

- [ ] 9. App Shell
  - [x] 9.1 Implement App component
    - Create layout: gallery sidebar + preview + color panel
    - Wire up state management
    - Initialize from URL params or defaults
    - Implement fullscreen toggle
    - _Requirements: 1.5, 6.1, 6.3_

  - [x] 9.2 Add responsive styles
    - Desktop: 3-column layout (gallery | preview | colors)
    - Tablet: 2-column (gallery | preview+colors stacked)
    - Mobile: single column stacked
    - _Requirements: 6.1, 6.2, 6.4_

- [ ] 10. Final Polish
  - [x] 10.1 Add preset metadata display
    - Show name and description on hover/select
    - _Requirements: 8.1, 8.3_

  - [x] 10.2 Test and fix edge cases
    - Verify all 13 presets render correctly
    - Test URL sharing flow
    - Test export in standalone HTML
    - Test on mobile viewport

## Notes

- Tasks marked with `*` are optional property-based tests
- Use react-colorful for color picker (small bundle, accessible)
- Preset thumbnails can be live mini-canvases or pre-rendered images
- All shaders follow the steering file conventions (u_time, u_mouse, u_resolution, v_uv)
