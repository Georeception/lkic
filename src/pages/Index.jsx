import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import WhatWeDo from '../components/WhatWeDo';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const Index = () => {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box sx={{ flex: 1 }}>
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <Partners />
      </Box>
      <Footer />
    </Box>
  );
};

export default Index;

