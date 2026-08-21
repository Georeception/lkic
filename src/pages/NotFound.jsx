import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Box sx={{ pt: { xs: 14, md: 18 }, pb: 10, textAlign: 'center' }}>
    <Container maxWidth="sm">
      <Typography component="h1" variant="h2" sx={{ mb: 2, fontWeight: 800 }}>
        Page not found
      </Typography>
      <Typography sx={{ mb: 4, color: 'text.secondary' }}>
        The page you requested may have moved or no longer exists.
      </Typography>
      <Button component={Link} to="/" variant="contained" sx={{ color: 'black', fontWeight: 700 }}>
        Return home
      </Button>
    </Container>
  </Box>
);

export default NotFound;
