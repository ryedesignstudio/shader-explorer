import { useMemo } from 'react';
import type { Preset, Category } from '../types';
import { filterByCategory, getCategories } from '../services/PresetRegistry';
import './PresetGallery.css';

interface PresetGalleryProps {
  presets: Preset[];
  selectedId: string;
  categoryFilter: Category;
  onSelect: (presetId: string) => void;
  onCategoryChange: (category: Category) => void;
}

/** Build default props with default color values baked in */
function buildDefaultPreviewProps(preset: Preset): Record<string, unknown> {
  const props: Record<string, unknown> = { ...preset.defaultProps };
  const colorsArray: Array<{ index: number; value: string }> = [];

  for (const colorDef of preset.colors) {
    const propPath = preset.colorPropMap[colorDef.key];
    if (!propPath) continue;

    const arrayMatch = propPath.match(/^colors\[(\d+)\]$/);
    if (arrayMatch) {
      colorsArray.push({ index: parseInt(arrayMatch[1], 10), value: colorDef.defaultValue });
    } else {
      props[propPath] = colorDef.defaultValue;
    }
  }

  if (colorsArray.length > 0) {
    colorsArray.sort((a, b) => a.index - b.index);
    props.colors = colorsArray.map((c) => c.value);
  }

  return props;
}

function PresetThumbnail({ preset }: { preset: Preset }) {
  const Component = preset.component;
  const props = useMemo(() => buildDefaultPreviewProps(preset), [preset]);

  return (
    <div className="preset-thumbnail">
      <Component
        {...props}
        speed={0}
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
      />
    </div>
  );
}

export function PresetGallery({
  selectedId,
  categoryFilter,
  onSelect,
  onCategoryChange,
}: PresetGalleryProps) {
  const categories = getCategories();
  const filteredPresets = useMemo(
    () => filterByCategory(categoryFilter),
    [categoryFilter]
  );

  return (
    <div className="preset-gallery">
      <div className="gallery-top-row">
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-tab ${categoryFilter === cat ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat)}
            >
              {cat === 'image-filters' ? 'Image Filters' : cat === 'logo-animations' ? 'Logo Animations' : cat === 'effects' ? 'Effects' : cat}
            </button>
          ))}
        </div>
      </div>
      <div className="preset-scroll-row">
        {filteredPresets.map((preset) => (
          <button
            key={preset.id}
            className={`preset-card ${selectedId === preset.id ? 'selected' : ''}`}
            onClick={() => onSelect(preset.id)}
          >
            <PresetThumbnail preset={preset} />
            <span className="preset-name">{preset.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
