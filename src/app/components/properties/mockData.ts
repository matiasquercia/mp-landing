import { Property } from './types';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Departamento 3 ambientes con balcón - Palermo Soho',
    description: 'Excelente departamento en el corazón de Palermo Soho. Cuenta con living-comedor amplio con salida a balcón, cocina integrada con barra desayunador, 2 dormitorios (uno en suite), baño completo y toilette. Muy luminoso, con orientación norte. Edificio con amenities: sum, parrilla, solarium y gym. A pasos de Plaza Armenia y toda la gastronomía de Palermo.',
    type: 'venta',
    category: 'departamento',
    price: 245000,
    expenses: 85000,
    location: 'Palermo, CABA',
    neighborhood: 'Palermo',
    area: 75,
    rooms: 3,
    bathrooms: 2,
    parking: 1,
    antiquity: 'A estrenar',
    images: [
      'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjY5MTI3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1664711942326-2c3351e215e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZpbmclMjByb29tJTIwZGVzaWdufGVufDF8fHx8MTc2Njk2MzExNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2OTM4ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY2OTU1ODk3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    features: [
      'Balcón con parrilla',
      'Cocina integrada',
      'Dormitorio en suite',
      'Orientación norte',
      'Amenities completos',
      'Seguridad 24hs',
      'Aire acondicionado',
      'Calefacción central'
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Casa 4 ambientes con jardín y parrilla - Belgrano',
    description: 'Hermosa casa con jardín al frente y contrafrente en zona residencial de Belgrano. Planta baja: living-comedor amplio, cocina con office, toilette y acceso al jardín con parrilla. Planta alta: 3 dormitorios con placard y baño completo. Muy luminosa, mantenimiento impecable. Ideal para familia.',
    type: 'venta',
    category: 'casa',
    price: 395000,
    expenses: 0,
    location: 'Belgrano, CABA',
    neighborhood: 'Belgrano',
    area: 180,
    rooms: 4,
    bathrooms: 2,
    parking: 0,
    antiquity: '15 años',
    images: [
      'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2Njg2NTg1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1664711942326-2c3351e215e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZpbmclMjByb29tJTIwZGVzaWdufGVufDF8fHx8MTc2Njk2MzExNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2OTM4ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    features: [
      'Jardín al frente y fondo',
      'Parrilla cubierta',
      'Living-comedor amplio',
      'Cocina con office',
      'Dormitorios con placard',
      'Zona residencial',
      'Cerca de colegios',
      'Transporte cercano'
    ],
    featured: true
  },
  {
    id: '3',
    title: 'Monoambiente luminoso - Recoleta',
    description: 'Monoambiente con excelente distribución en edificio clásico de Recoleta. Ambiente principal con ventanal al frente, cocina separada, baño completo. Orientación este, muy luminoso. Edificio con portero y baulera. Ubicación premium, a metros de Av. Santa Fe, Plaza Francia y transporte.',
    type: 'alquiler',
    category: 'departamento',
    price: 650,
    expenses: 45000,
    location: 'Recoleta, CABA',
    neighborhood: 'Recoleta',
    area: 35,
    rooms: 1,
    bathrooms: 1,
    parking: 0,
    antiquity: '30 años',
    images: [
      'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjY5MTI3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2OTM4ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    features: [
      'Muy luminoso',
      'Cocina separada',
      'Edificio con portero',
      'Baulera incluida',
      'Ubicación premium',
      'Cerca de transporte',
      'Zona comercial',
      'Apto profesional'
    ]
  },
  {
    id: '4',
    title: 'Departamento 2 ambientes - Puerto Madero',
    description: 'Espectacular departamento con vista al río en el dique de Puerto Madero. Living-comedor con ventanales de piso a techo, cocina integrada equipada, 1 dormitorio en suite con vestidor, toilette. Edificio de categoría con amenities: piscina, gym, spa, salón de usos múltiples. Seguridad 24hs.',
    type: 'alquiler',
    category: 'departamento',
    price: 1200,
    expenses: 120000,
    location: 'Puerto Madero, CABA',
    neighborhood: 'Puerto Madero',
    area: 65,
    rooms: 2,
    bathrooms: 2,
    parking: 1,
    antiquity: '10 años',
    images: [
      'https://images.unsplash.com/photo-1572218169112-664cf57fea11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NjY4ODIyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1664711942326-2c3351e215e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZpbmclMjByb29tJTIwZGVzaWdufGVufDF8fHx8MTc2Njk2MzExNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY2OTU1ODk3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    features: [
      'Vista al río',
      'Piscina',
      'Gimnasio',
      'Spa',
      'Dormitorio en suite',
      'Cocina equipada',
      'Cochera cubierta',
      'Seguridad 24hs'
    ],
    featured: true
  },
  {
    id: '5',
    title: 'PH 3 ambientes con terraza - Villa Crespo',
    description: 'PH al fondo con terraza propia en villa tranquila de Villa Crespo. Living-comedor, cocina separada, 2 dormitorios, baño completo y amplia terraza con parrilla. Mucha luz natural, patio privado. Ideal para quienes buscan tranquilidad cerca de todo.',
    type: 'alquiler',
    category: 'ph',
    price: 750,
    expenses: 15000,
    location: 'Villa Crespo, CABA',
    neighborhood: 'Villa Crespo',
    area: 70,
    rooms: 3,
    bathrooms: 1,
    parking: 0,
    antiquity: '20 años',
    images: [
      'https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjY5MTI3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1664711942326-2c3351e215e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZpbmclMjByb29tJTIwZGVzaWdufGVufDF8fHx8MTc2Njk2MzExNXww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    features: [
      'Terraza propia',
      'Parrilla',
      'Patio privado',
      'PH al fondo',
      'Muy luminoso',
      'Villa tranquila',
      'Cerca de transporte',
      'Zona comercial'
    ]
  },
  {
    id: '6',
    title: 'Departamento 4 ambientes con dependencia - Caballito',
    description: 'Amplio departamento en excelente ubicación de Caballito. Living-comedor, cocina con lavadero, 3 dormitorios con placard, 2 baños completos, dependencia de servicio. Balcón corrido. Edificio con sum y terraza. Cerca de Primera Junta, comercios, colegios y transporte.',
    type: 'venta',
    category: 'departamento',
    price: 215000,
    expenses: 55000,
    location: 'Caballito, CABA',
    neighborhood: 'Caballito',
    area: 95,
    rooms: 4,
    bathrooms: 2,
    parking: 0,
    antiquity: '25 años',
    images: [
      'https://images.unsplash.com/photo-1572218169112-664cf57fea11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NjY4ODIyMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1664711942326-2c3351e215e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZpbmclMjByb29tJTIwZGVzaWdufGVufDF8fHx8MTc2Njk2MzExNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY2OTU1ODk3fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    features: [
      'Dependencia de servicio',
      'Balcón corrido',
      'Edificio con sum',
      'Terraza común',
      'Excelente ubicación',
      'Cerca de Primera Junta',
      'Zona de colegios',
      'Bien comunicado'
    ]
  }
];
