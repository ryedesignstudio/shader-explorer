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
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-tab ${categoryFilter === cat ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="preset-grid">
        {filteredPresets.map((preset) => (
          <button
            key={preset.id}
            className={`preset-card ${selectedId === preset.id ? 'selected' : ''}`}
            onClick={() => onSelect(preset.id)}
          >
            <div
              className="preset-thumbnail"
              style={{
                background: `linear-gradient(135deg, ${preset.colors[0]?.defaultValue || '#333'}, ${preset.colors[1]?.defaultValue || '#666'})`,
              }}
            />
            <div className="preset-info">
              <span className="preset-name">{preset.name}</span>
              <span className="preset-category">{preset.category}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
