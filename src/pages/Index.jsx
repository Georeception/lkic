import React from 'react';
import { Box } from '@mui/material';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import WhatWeDo from '../components/WhatWeDo';
import Partners from '../components/Partners';

const Index = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: '100%', minWidth: 0, overflowX: 'clip' }}>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Partners />
    </Box>
  );
};

export default Index;
