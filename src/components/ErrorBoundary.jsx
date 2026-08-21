import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) {
      console.error('LKIC interface error', error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box component="main" sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', bgcolor: 'background.default' }}>
          <Container maxWidth="sm" sx={{ textAlign: 'center', py: 8 }}>
            <Typography component="h1" variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
              Something went wrong
            </Typography>
            <Typography sx={{ mb: 4, color: 'text.secondary' }}>
              The page could not be displayed. Reload the site or return to the homepage.
            </Typography>
            <Button variant="contained" onClick={() => window.location.reload()} sx={{ mr: 2, color: 'black', fontWeight: 700 }}>
              Reload
            </Button>
            <Button
              component="a"
              href="/"
              variant="contained"
              sx={{
                bgcolor: 'secondary.main',
                color: 'primary.main',
                fontWeight: 700,
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.18)',
                '&:hover': {
                  bgcolor: '#171717',
                  color: 'primary.light',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 26px rgba(0, 0, 0, 0.25)',
                },
              }}
            >
              Return home
            </Button>
          </Container>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
