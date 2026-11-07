import type { Preset, Category } from '../types';
import { presets } from '../presets';

export function getAll(): Preset[] {
  return presets;
}

export function getById(id: string): Preset | undefined {
  return presets.find((p) => p.id === id);
}

export function getByCategory(category: Preset['category']): Preset[] {
  return presets.filter((p) => p.category === category);
}

export function getCategories(): Category[] {
  return ['effects', 'image-filters', 'logo-animations'];
}

export function filterByCategory(category: Category): Preset[] {
  return presets.filter((p) => p.category === category);
}
