import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const SiteLayout = ({ children }) => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '100%',
      minWidth: 0,
      overflowX: 'clip',
    }}
  >
    <Box
      component="a"
      href="#main-content"
      sx={{
        position: 'fixed',
        top: 8,
        left: 8,
        zIndex: 2000,
        px: 2,
        py: 1,
        bgcolor: 'primary.main',
        color: 'black',
        fontWeight: 700,
        borderRadius: 1,
        transform: 'translateY(-150%)',
        transition: 'transform 0.2s ease',
        '&:focus': { transform: 'translateY(0)' },
      }}
    >
      Skip to main content
    </Box>
    <Navbar />
    <Box
      component="main"
      id="main-content"
      tabIndex={-1}
      sx={{ flex: 1, width: '100%', maxWidth: '100%', minWidth: 0, overflowX: 'clip', outline: 'none' }}
    >
      {children}
    </Box>
    <Footer />
  </Box>
);

export default SiteLayout;
