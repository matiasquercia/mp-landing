import React from 'react';
import { X, SlidersHorizontal } from 'lucide-react';
import { PropertyType, PropertyCategory } from './types';

interface PropertyFiltersProps {
  selectedType: PropertyType | 'all';
  selectedCategory: PropertyCategory | 'all';
  selectedRooms: number | 'all';
  selectedNeighborhood: string | 'all';
  onTypeChange: (type: PropertyType | 'all') => void;
  onCategoryChange: (category: PropertyCategory | 'all') => void;
  onRoomsChange: (rooms: number | 'all') => void;
  onNeighborhoodChange: (neighborhood: string | 'all') => void;
  onClearFilters: () => void;
}

export function PropertyFilters({
  selectedType,
  selectedCategory,
  selectedRooms,
  selectedNeighborhood,
  onTypeChange,
  onCategoryChange,
  onRoomsChange,
  onNeighborhoodChange,
  onClearFilters
}: PropertyFiltersProps) {
  const neighborhoods = [
    'Palermo',
    'Belgrano',
    'Recoleta',
    'Puerto Madero',
    'Caballito',
    'Villa Crespo',
    'Núñez',
    'Colegiales'
  ];

  const hasActiveFilters = 
    selectedType !== 'all' || 
    selectedCategory !== 'all' || 
    selectedRooms !== 'all' || 
    selectedNeighborhood !== 'all';

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E5E7EB] mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-[#2F2A29]" />
          <h3 className="text-lg font-semibold text-[#2F2A29]">Filtros</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#2F2A29] transition-colors"
          >
            <X className="w-4 h-4" />
            Limpiar filtros
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Operation Type */}
        <div>
          <label className="block text-sm font-medium text-[#2F2A29] mb-3">
            Operación
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => onTypeChange('all')}
              className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                selectedType === 'all'
                  ? 'bg-[#2F2A29] text-white'
                  : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => onTypeChange('venta')}
              className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                selectedType === 'venta'
                  ? 'bg-[#2F2A29] text-white'
                  : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
              }`}
            >
              Venta
            </button>
            <button
              onClick={() => onTypeChange('alquiler')}
              className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                selectedType === 'alquiler'
                  ? 'bg-[#2F2A29] text-white'
                  : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
              }`}
            >
              Alquiler
            </button>
          </div>
        </div>

        {/* Property Category */}
        <div>
          <label className="block text-sm font-medium text-[#2F2A29] mb-3">
            Tipo de propiedad
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value as PropertyCategory | 'all')}
            className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm text-[#2F2A29] focus:outline-none focus:ring-2 focus:ring-[#D6ECBA] focus:border-transparent"
          >
            <option value="all">Todos los tipos</option>
            <option value="departamento">Departamento</option>
            <option value="casa">Casa</option>
            <option value="ph">PH</option>
            <option value="local">Local / Oficina</option>
          </select>
        </div>

        {/* Rooms */}
        <div>
          <label className="block text-sm font-medium text-[#2F2A29] mb-3">
            Ambientes
          </label>
          <div className="flex gap-2">
            {['all', 1, 2, 3, 4].map((room) => (
              <button
                key={room}
                onClick={() => onRoomsChange(room === 'all' ? 'all' : room as number)}
                className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  selectedRooms === room
                    ? 'bg-[#2F2A29] text-white'
                    : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
                }`}
              >
                {room === 'all' ? 'Todos' : room === 4 ? '4+' : room}
              </button>
            ))}
          </div>
        </div>

        {/* Neighborhood */}
        <div>
          <label className="block text-sm font-medium text-[#2F2A29] mb-3">
            Barrio
          </label>
          <select
            value={selectedNeighborhood}
            onChange={(e) => onNeighborhoodChange(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-[#E5E7EB] text-sm text-[#2F2A29] focus:outline-none focus:ring-2 focus:ring-[#D6ECBA] focus:border-transparent"
          >
            <option value="all">Todos los barrios</option>
            {neighborhoods.map((neighborhood) => (
              <option key={neighborhood} value={neighborhood}>
                {neighborhood}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
