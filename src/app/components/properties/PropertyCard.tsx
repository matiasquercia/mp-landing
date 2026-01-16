import React from 'react';
import { MapPin, Bed, Bath, Square, Car, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Property } from './types';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

export function PropertyCard({ property, onClick }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hola! Me interesa la propiedad: ${property.title}`;
    window.open(`https://wa.me/5491157687121?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlays */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm ${
            property.type === 'venta' 
              ? 'bg-[#2F2A29]/90 text-white' 
              : 'bg-[#D6ECBA]/90 text-[#2F2A29]'
          }`}>
            {property.type === 'venta' ? 'Venta' : 'Alquiler'}
          </span>
          {property.featured && (
            <span className="px-3 py-1.5 bg-amber-500/90 text-white rounded-full text-sm font-semibold backdrop-blur-sm">
              Destacada
            </span>
          )}
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
          <div className="text-2xl font-bold text-[#2F2A29]">
            {property.price ? formatPrice(property.price) : 'Consultar'}
          </div>
          {property.expenses && (
            <div className="text-xs text-[#6B7280]">
              + Expensas: {formatPrice(property.expenses)}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-[#2F2A29] mb-2 group-hover:text-[#3d3735] transition-colors line-clamp-2">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-[#6B7280] mb-4">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-1.5 text-[#6B7280]">
            <Square className="w-4 h-4" />
            <span className="text-sm font-medium">{property.area}m²</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#6B7280]">
            <Bed className="w-4 h-4" />
            <span className="text-sm font-medium">{property.rooms} amb</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#6B7280]">
            <Bath className="w-4 h-4" />
            <span className="text-sm font-medium">{property.bathrooms}</span>
          </div>
          {property.parking && (
            <div className="flex items-center gap-1.5 text-[#6B7280]">
              <Car className="w-4 h-4" />
              <span className="text-sm font-medium">{property.parking}</span>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClick}
            className="flex-1 px-4 py-3 bg-[#2F2A29] text-white rounded-xl hover:bg-[#3d3735] transition-colors font-medium text-sm flex items-center justify-center gap-2"
          >
            Ver detalles
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={handleWhatsApp}
            className="px-4 py-3 bg-[#D6ECBA] text-[#2F2A29] rounded-xl hover:bg-[#D6ECBA]/80 transition-colors font-medium text-sm"
          >
            WhatsApp
          </button>
        </div>
      </div>
    </motion.div>
  );
}
