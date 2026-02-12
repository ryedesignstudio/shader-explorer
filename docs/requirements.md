# Requirements Document

## Introduction

A shader preset explorer that allows users to browse pre-built GLSL shader effects and customize them with their own colors using a color picker. This eliminates the need for users to write shader code or use AI prompts - they simply select a preset, pick colors, and see live results. The app renders shaders using Three.js and provides an intuitive visual interface for non-technical users.

## Glossary

- **Preset**: A pre-built shader effect with customizable color parameters (e.g., "Aurora", "Fire", "Ocean Waves")
- **Shader_Preview**: The Three.js canvas that renders the shader output in real-time
- **Color_Picker**: UI component for selecting colors that feed into shader uniforms
- **Preset_Gallery**: Grid view of available shader presets with thumbnail previews
- **Export**: Functionality to save or share the customized shader result

## Requirements

### Requirement 1: Preset Gallery

**User Story:** As a user, I want to browse a gallery of shader presets so that I can quickly find an effect I like.

#### Acceptance Criteria

1. THE App SHALL display a gallery of at least 10 shader presets organized by category (Abstract, Nature, Geometric, Animated)
2. WHEN viewing the gallery, EACH preset SHALL show an animated thumbnail preview
3. WHEN a user clicks a preset, THE App SHALL load that shader into the main preview area
4. THE App SHALL highlight the currently selected preset in the gallery
5. WHEN the app loads, THE App SHALL display the first preset by default

### Requirement 2: Live Shader Preview

**User Story:** As a user, I want to see the shader effect rendered in real-time so that I can evaluate it before customizing.

#### Acceptance Criteria

1. THE Shader_Preview SHALL render at a minimum of 30 frames per second
2. THE Shader_Preview SHALL update the u_time uniform for animation effects
3. WHEN a user moves their mouse over the preview, THE App SHALL update the u_mouse uniform
4. THE Shader_Preview SHALL maintain correct aspect ratio when the window is resized
5. WHEN a shader fails to compile, THE App SHALL display a fallback gradient and error indicator

### Requirement 3: Color Customization

**User Story:** As a user, I want to customize the colors in a shader preset so that I can match my brand or preferences.

#### Acceptance Criteria

1. WHEN a preset is selected, THE App SHALL display color pickers for each customizable color (typically 2-4 colors per preset)
2. WHEN a user changes a color, THE Shader_Preview SHALL update within 100ms
3. THE Color_Picker SHALL support hex input, RGB sliders, and a visual color wheel
4. THE App SHALL show color labels describing what each color controls (e.g., "Primary Color", "Glow Color", "Background")
5. THE App SHALL provide a "Reset Colors" button to restore the preset's default colors

### Requirement 4: Preset Categories

**User Story:** As a user, I want presets organized by category so that I can find effects that match my needs.

#### Acceptance Criteria

1. THE App SHALL organize presets into categories: Abstract, Nature, Geometric, Animated
2. WHEN a user selects a category filter, THE gallery SHALL show only presets in that category
3. THE App SHALL display the category name and preset count for each filter
4. THE App SHALL provide an "All" option to show all presets

### Requirement 5: Export and Share

**User Story:** As a user, I want to export my customized shader so that I can use it in my projects.

#### Acceptance Criteria

1. WHEN a user clicks "Export", THE App SHALL generate a complete Three.js code snippet with the current colors
2. THE App SHALL provide a "Copy to Clipboard" button with success feedback
3. THE App SHALL allow downloading the shader as a standalone HTML file
4. THE Export SHALL include all necessary uniforms (u_time, u_mouse, u_resolution) and the animation loop

### Requirement 6: Responsive Interface

**User Story:** As a user, I want the app to work on different screen sizes so that I can use it on any device.

#### Acceptance Criteria

1. WHEN viewport width is less than 768px, THE App SHALL stack the preview and controls vertically
2. THE gallery SHALL use a responsive grid (4 columns on desktop, 2 on tablet, 1 on mobile)
3. THE App SHALL allow toggling fullscreen mode for the shader preview
4. THE Color_Picker SHALL be touch-friendly on mobile devices

### Requirement 7: URL State Persistence

**User Story:** As a user, I want to share a link to my customized shader so that others can see my creation.

#### Acceptance Criteria

1. WHEN a user customizes colors, THE App SHALL update the URL with preset ID and color values
2. WHEN a user loads a URL with parameters, THE App SHALL restore the preset and custom colors
3. THE URL format SHALL be human-readable (e.g., ?preset=aurora&c1=ff0000&c2=00ff00)

### Requirement 8: Preset Metadata

**User Story:** As a user, I want to know what each preset does so that I can make informed choices.

#### Acceptance Criteria

1. EACH preset SHALL have a name and short description
2. EACH preset SHALL specify which colors are customizable and their purpose
3. THE App SHALL display preset metadata when hovering or selecting a preset
