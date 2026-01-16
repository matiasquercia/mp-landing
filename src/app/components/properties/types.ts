export type PropertyType = 'venta' | 'alquiler';
export type PropertyCategory = 'departamento' | 'casa' | 'ph' | 'local';

export interface Property {
  id: string;
  title: string;
  description: string;
  type: PropertyType;
  category: PropertyCategory;
  price?: number;
  expenses?: number;
  location: string;
  neighborhood: string;
  area: number;
  rooms: number;
  bathrooms: number;
  parking?: number;
  antiquity?: string;
  images: string[];
  features: string[];
  featured?: boolean;
}
