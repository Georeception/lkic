export const siteConfig = {
  name: 'Lenny Kivuti Innovation Centre',
  shortName: 'LKIC',
  siteUrl: 'https://lkic.africa',
  description: 'LKIC advances research, technology, sustainable enterprise and community development across Kenya.',
  email: 'info@lkic.africa',
  address: 'Geomaps Centre, Upper Hill, Nairobi, Kenya',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Geomaps+Centre+Upper+Hill+Nairobi+Kenya',
  socialImage: '/images/hero-poster.webp',
};

export const navigation = {
  primary: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ],
  divisions: [
    { name: 'Research & Development', path: '/research' },
    { name: 'Real Estate', path: '/real-estate' },
    { name: 'ICT & Geomaps', path: '/ict' },
    { name: 'Agriventures', path: '/agriventures' },
    { name: 'Outreach & Leadership', path: '/outreach' },
  ],
};

export const routeMetadata = {
  '/': ['Innovation, Research & Sustainable Development', siteConfig.description],
  '/about': ['About LKIC', 'Learn about LKIC, our mission, leadership and commitment to transforming Kenya through innovation.'],
  '/contact': ['Contact LKIC', 'Contact the Lenny Kivuti Innovation Centre about partnerships, programmes, property and general enquiries.'],
  '/research': ['Research & Development', 'Explore LKIC research in bioscience, applied AI, advanced energy, geospatial technology and environmental law.'],
  '/real-estate': ['Real Estate', 'Explore LKIC property developments and real-estate opportunities across Kenya.'],
  '/ict': ['ICT, AI & Geomaps', 'Discover LKIC technology, artificial intelligence and geospatial solutions for African organisations.'],
  '/agriventures': ['Agriventures', 'Explore LKIC sustainable farming, agricultural processing and food-security initiatives.'],
  '/outreach': ['Outreach & Leadership', 'Discover LKIC community outreach, youth empowerment and leadership development programmes.'],
};
