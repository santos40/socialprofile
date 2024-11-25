import { Business } from '@/types/business';

export const specializedBusinesses: Business[] = [
  {
    id: '11',
    name: 'Green Energy Solutions',
    email: 'info@greenenergy.com',
    description: 'Sustainable energy solutions and consulting for businesses looking to reduce their carbon footprint and implement eco-friendly practices.',
    logo: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9',
    category: 'Energy',
    website: 'https://greenenergy.example.com',
    instagram: 'https://instagram.com/greenenergy',
    facebook: 'https://facebook.com/greenenergy',
    linkedin: 'https://linkedin.com/company/greenenergy',
    youtube: 'https://youtube.com/greenenergy',
    whatsapp: '5551234567900',
    address: '123 Eco Street, San Diego, CA',
    latitude: 32.7157,
    longitude: -117.1611,
    rating: 4.9,
    photos: ['https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9'],
    createdAt: new Date('2024-01-25'),
  },
  {
    id: '12',
    name: 'HealthTech Innovations',
    email: 'contact@healthtech.com',
    description: 'Healthcare technology solutions provider specializing in telemedicine platforms and medical software systems.',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
    category: 'Healthcare',
    website: 'https://healthtech.example.com',
    instagram: 'https://instagram.com/healthtech',
    facebook: 'https://facebook.com/healthtech',
    linkedin: 'https://linkedin.com/company/healthtech',
    youtube: 'https://youtube.com/healthtech',
    whatsapp: '5551234567901',
    address: '456 Medical Plaza, Houston, TX',
    latitude: 29.7604,
    longitude: -95.3698,
    rating: 4.7,
    photos: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'],
    createdAt: new Date('2024-01-26'),
  },
];