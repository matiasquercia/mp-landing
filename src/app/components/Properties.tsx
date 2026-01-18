import React, { useState, useMemo } from 'react';
import { Home, SearchX } from 'lucide-react';
import { motion } from 'motion/react';
import { PropertyCard } from './properties/PropertyCard';
import { PropertyFilters } from './properties/PropertyFilters';
import { PropertyDetail } from './properties/PropertyDetail';
import { mockProperties } from './properties/mockData';
import { Property, PropertyType, PropertyCategory } from './properties/types';

export function Properties() {
  const [selectedType, setSelectedType] = useState<PropertyType | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory | 'all'>('all');
  const [selectedRooms, setSelectedRooms] = useState<number | 'all'>('all');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | 'all'>('all');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = useMemo(() => {
    return mockProperties.filter((property) => {
      if (selectedType !== 'all' && property.type !== selectedType) return false;
      if (selectedCategory !== 'all' && property.category !== selectedCategory) return false;
      if (selectedRooms !== 'all') {
        if (selectedRooms === 4 && property.rooms < 4) return false;
        if (selectedRooms !== 4 && property.rooms !== selectedRooms) return false;
      }
      if (selectedNeighborhood !== 'all' && property.neighborhood !== selectedNeighborhood) return false;
      return true;
    });
  }, [selectedType, selectedCategory, selectedRooms, selectedNeighborhood]);

  const handleClearFilters = () => {
    setSelectedType('all');
    setSelectedCategory('all');
    setSelectedRooms('all');
    setSelectedNeighborhood('all');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="properties" className="py-20 bg-gradient-to-br from-[#F9FAFB] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D6ECBA]/30 rounded-full mb-6">
            <Home className="w-5 h-5 text-[#2F2A29]" />
            <span className="text-sm font-medium text-[#2F2A29]">Propiedades</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2F2A29] mb-6">
            Propiedades disponibles
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Seleccionadas y gestionadas de forma personalizada
          </p>
        </motion.div>

        {/* Filters */}
        <PropertyFilters
          selectedType={selectedType}
          selectedCategory={selectedCategory}
          selectedRooms={selectedRooms}
          selectedNeighborhood={selectedNeighborhood}
          onTypeChange={setSelectedType}
          onCategoryChange={setSelectedCategory}
          onRoomsChange={setSelectedRooms}
          onNeighborhoodChange={setSelectedNeighborhood}
          onClearFilters={handleClearFilters}
        />

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-[#6B7280]">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'propiedad encontrada' : 'propiedades encontradas'}
          </p>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onClick={() => setSelectedProperty(property)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-[#D6ECBA]/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <SearchX className="w-10 h-10 text-[#2F2A29]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#2F2A29] mb-3">
              No hay propiedades que coincidan con tu búsqueda
            </h3>
            <p className="text-[#6B7280] mb-8 max-w-md mx-auto">
              Probá cambiando los filtros o contactanos para una búsqueda personalizada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleClearFilters}
                className="px-6 py-3 bg-white border border-[#E5E7EB] text-[#2F2A29] rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                Limpiar filtros
              </button>
              <button
                onClick={scrollToContact}
                className="px-6 py-3 bg-[#2F2A29] text-white rounded-xl hover:bg-[#3d3735] transition-colors font-medium"
              >
                Contactar para búsqueda personalizada
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <PropertyDetail
          property={selectedProperty}
          isOpen={!!selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </section>
  );
}
