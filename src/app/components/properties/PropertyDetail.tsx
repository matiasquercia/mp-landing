import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, MapPin, Square, Bed, Bath, Car, Calendar, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { Property } from './types';

interface PropertyDetailProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

export function PropertyDetail({ property, isOpen, onClose }: PropertyDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsApp = () => {
    const message = `Hola! Me interesa la propiedad: ${property.title}`;
    window.open(`https://wa.me/5491157687121?text=${encodeURIComponent(message)}`, '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          >
            <X className="w-5 h-5 text-[#2F2A29]" />
          </button>

          {/* Image Gallery */}
          <div className="relative h-96 bg-gray-100">
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover"
            />

            {/* Gallery Navigation */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5 text-[#2F2A29]" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <ChevronRight className="w-5 h-5 text-[#2F2A29]" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              </>
            )}

            {/* Tags */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className={`px-3 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm ${
                property.type === 'venta' 
                  ? 'bg-[#2F2A29]/90 text-white' 
                  : 'bg-[#D6ECBA]/90 text-[#2F2A29]'
              }`}>
                {property.type === 'venta' ? 'Venta' : 'Alquiler'}
              </span>
            </div>
          </div>

          {/* Thumbnails */}
          {property.images.length > 1 && (
            <div className="flex gap-2 p-4 overflow-x-auto bg-gray-50">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index
                      ? 'border-[#2F2A29] scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${property.title} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#2F2A29] mb-4">
                {property.title}
              </h2>
              <div className="flex items-center gap-2 text-[#6B7280] mb-6">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{property.location}</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-4">
                <div className="text-4xl font-bold text-[#2F2A29]">
                  {property.price ? formatPrice(property.price) : 'Consultar'}
                </div>
                {property.expenses && (
                  <div className="text-lg text-[#6B7280]">
                    + Expensas: {formatPrice(property.expenses)}
                  </div>
                )}
              </div>
            </div>

            {/* Main Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#D6ECBA]/30 rounded-lg flex items-center justify-center">
                  <Square className="w-6 h-6 text-[#2F2A29]" />
                </div>
                <div>
                  <div className="text-sm text-[#6B7280]">Superficie</div>
                  <div className="font-semibold text-[#2F2A29]">{property.area}m²</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#D6ECBA]/30 rounded-lg flex items-center justify-center">
                  <Bed className="w-6 h-6 text-[#2F2A29]" />
                </div>
                <div>
                  <div className="text-sm text-[#6B7280]">Ambientes</div>
                  <div className="font-semibold text-[#2F2A29]">{property.rooms}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#D6ECBA]/30 rounded-lg flex items-center justify-center">
                  <Bath className="w-6 h-6 text-[#2F2A29]" />
                </div>
                <div>
                  <div className="text-sm text-[#6B7280]">Baños</div>
                  <div className="font-semibold text-[#2F2A29]">{property.bathrooms}</div>
                </div>
              </div>

              {property.parking && (
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#D6ECBA]/30 rounded-lg flex items-center justify-center">
                    <Car className="w-6 h-6 text-[#2F2A29]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280]">Cocheras</div>
                    <div className="font-semibold text-[#2F2A29]">{property.parking}</div>
                  </div>
                </div>
              )}

              {property.antiquity && (
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#D6ECBA]/30 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-[#2F2A29]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6B7280]">Antigüedad</div>
                    <div className="font-semibold text-[#2F2A29]">{property.antiquity}</div>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#2F2A29] mb-4">Descripción</h3>
              <p className="text-[#6B7280] leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Features */}
            {property.features.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-[#2F2A29] mb-4">Características</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#2F2A29] flex-shrink-0" />
                      <span className="text-[#6B7280]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#2F2A29] mb-4">Ubicación</h3>
              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <MapPin className="w-12 h-12 text-[#6B7280] mx-auto mb-3" />
                <p className="text-[#6B7280]">{property.location}</p>
                <p className="text-sm text-[#6B7280] mt-1">Mapa disponible en la consulta personalizada</p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-[#2F2A29] to-[#3d3735] rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-3">
                ¿Te interesa esta propiedad?
              </h3>
              <p className="text-white/80 mb-6">
                Contactame para coordinar una visita o recibir más información
              </p>
              <button
                onClick={handleWhatsApp}
                className="px-8 py-4 bg-[#D6ECBA] text-[#2F2A29] rounded-xl hover:bg-[#D6ECBA]/90 transition-colors font-semibold text-lg inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Consultar por WhatsApp
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
