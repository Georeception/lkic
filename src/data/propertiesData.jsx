import HomeIcon from '@mui/icons-material/Home';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StraightenIcon from '@mui/icons-material/Straighten';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export const propertiesData = [
  {
    id: 1,
    name: 'Nina Apartments',
    type: 'Residential',
    location: 'Nairobi',
    description: 'Modern apartment complex with premium amenities and strategic location',
    detailedDescription:
      'Nina Apartments represents contemporary urban living at its finest. Located in a prime area of Nairobi, these thoughtfully designed apartments offer spacious layouts, modern finishes, and a host of amenities including 24/7 security, parking, and proximity to shopping centers, schools, and business districts.',
    status: 'Available',
    image: '/images/nina.jpeg', // Primary/thumbnail image (for backward compatibility)
    images: ['/images/nina.jpeg'],
    price: 'Contact for Pricing',
    features: [
      { label: 'Bedrooms', value: '2-3 BR', icon: <HomeIcon /> },
      { label: 'Bathrooms', value: '2-3 BA', icon: <BathtubIcon /> },
      { label: 'Size', value: '1,200-1,800 sqft', icon: <StraightenIcon /> },
    ],
    amenities: [
      '24/7 Security',
      'Parking Spaces',
      'Swimming Pool',
      'Fitness Center',
      'Nearby Shopping',
      'Schools Nearby',
    ],
  },
  {
    id: 2,
    name: 'Geomaps Centre',
    type: 'Commercial',
    location: 'Nairobi',
    description: 'State-of-the-art office complex for technology and business enterprises',
    detailedDescription:
      'Geomaps Centre is a cutting-edge commercial development designed for modern businesses. This prestigious office complex features flexible floor plans, high-speed internet infrastructure, meeting rooms, and a professional environment ideal for technology companies, startups, and established enterprises.',
    status: 'Operational',
    image: '/images/geomap.jpeg', // Primary/thumbnail image (for backward compatibility)
    images: ['/images/geomap.jpeg'],
    price: 'Contact for Pricing',
    features: [
      { label: 'Floors', value: '5 Floors', icon: <ApartmentIcon /> },
      { label: 'Units', value: '20+ Offices', icon: <MeetingRoomIcon /> },
      { label: 'Parking', value: '50+ Spaces', icon: <LocalParkingIcon /> },
    ],
    amenities: [
      'High-Speed Internet',
      'Meeting Rooms',
      'Reception Services',
      'Security System',
      'Parking Facilities',
      'Cafeteria',
    ],
  },
  {
    id: 4,
    name: 'K Best Villa (Resort)',
    type: 'Hospitality',
    location: 'Central Kenya',
    description: 'Luxury resort offering world-class accommodation and facilities',
    detailedDescription:
      'K Best Villa is a luxury resort destination offering world-class accommodation and exceptional facilities. Set in a stunning coastal location, the resort features elegant villas, fine dining restaurants, spa facilities, and direct beach access for an unforgettable vacation experience.',
    status: 'Operating',
    image: '/images/exp.jpeg', // Primary/thumbnail image (for backward compatibility)
    images: ['/images/exp.jpeg'],
    price: 'Contact for Rates',
    features: [
      { label: 'Rooms', value: '30+ Villas', icon: <HotelIcon /> },
      { label: 'Restaurants', value: '3 Restaurants', icon: <RestaurantIcon /> },
      { label: 'Beach Access', value: 'Direct', icon: <BeachAccessIcon /> },
    ],
    amenities: [
      'Spa & Wellness',
      'Fine Dining',
      'Beach Access',
      'Swimming Pools',
      'Water Sports',
      'Conference Facilities',
    ],
  },
  {
    id: 5,
    name: 'Vipingo Ridge',
    type: 'Luxury Residences',
    location: 'Coastal Kenya',
    description: 'Exquisite coastal living with golf course and ocean views',
    detailedDescription:
      'Vipingo Ridge represents the pinnacle of coastal luxury living. This exclusive development features stunning residences with panoramic ocean views, world-class golf course access, and premium amenities. Experience the ultimate in coastal lifestyle with privacy, security, and natural beauty.',
    status: 'Elite',
    image: '/images/vip.jpeg', // Primary/thumbnail image (for backward compatibility)
    images: ['/images/vi.jpeg', '/images/vip.jpeg'],
    price: 'Contact for Pricing',
    features: [
      { label: 'Bedrooms', value: '5-6 BR', icon: <HomeIcon /> },
      { label: 'Bathrooms', value: '5-6 BA', icon: <BathtubIcon /> },
      { label: 'Size', value: '5,000+ sqft', icon: <StraightenIcon /> },
    ],
    amenities: [
      'Golf Course Access',
      'Ocean Views',
      'Private Beach',
      'Gated Community',
      '24/7 Security',
      'Clubhouse',
    ],
  },
];
