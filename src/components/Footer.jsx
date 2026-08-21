import React from 'react';
import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  Link as MuiLink,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowUpward, Email, LocationOn } from '@mui/icons-material';
import { siteConfig } from '../data/siteContent';

const footerSections = [
  {
    title: 'Company',
    links: [
      { title: 'About Us', url: '/about' },
      { title: 'Research & Development', url: '/research' },
      { title: 'Contact Us', url: '/contact' },
    ],
  },
  {
    title: 'Divisions',
    links: [
      { title: 'Real Estate', url: '/real-estate' },
      { title: 'ICT & Geomaps', url: '/ict' },
      { title: 'Agriventures', url: '/agriventures' },
      { title: 'Outreach', url: '/outreach' },
    ],
  },
  {
    title: 'Enquiries',
    links: [
      { title: 'Partnerships', url: '/contact?subject=Partnership%20enquiry' },
      { title: 'Careers', url: '/contact?subject=Careers%20enquiry' },
      { title: 'Property Viewings', url: '/contact?subject=Property%20viewing' },
    ],
  },
];

const Footer = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cardStyles = {
    p: { xs: 2, md: 2.5 },
    height: '100%',
    bgcolor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 2,
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'black',
        position: 'relative',
        borderTop: '3px solid',
        borderColor: theme.palette.primary.main,
      }}
    >
      <IconButton
        aria-label="Back to top"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: { xs: 20, md: 30 },
          right: { xs: 20, md: 30 },
          bgcolor: theme.palette.primary.main,
          color: theme.palette.secondary.main,
          width: { xs: 45, md: 50 },
          height: { xs: 45, md: 50 },
          boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          '&:hover': {
            bgcolor: theme.palette.primary.dark,
            transform: 'translateY(-5px)',
          },
        }}
      >
        <ArrowUpward />
      </IconButton>

      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 }, pt: { xs: 5, md: 8 }, pb: 3 }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={12} md={4}>
            <Box component={Link} to="/" aria-label="LKIC home" sx={{ display: 'inline-flex', mb: 2 }}>
              <Box
                component="img"
                src="/images/logo.png"
                alt="Lenny Kivuti Innovation Centre"
                sx={{ height: { xs: 55, md: 70 }, width: 'auto' }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: { xs: '0.875rem', md: '0.95rem' }, lineHeight: 1.7 }}
            >
              Advancing research, technology, enterprise and sustainable development through five integrated divisions.
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {footerSections.map((section) => (
                <Grid item xs={6} sm={4} key={section.title}>
                  <Typography
                    variant="h6"
                    sx={{ color: theme.palette.primary.main, mb: 2.5, fontSize: { xs: '0.95rem', md: '1.1rem' }, fontWeight: 700 }}
                  >
                    {section.title}
                  </Typography>
                  <Stack spacing={1.25}>
                    {section.links.map((link) => (
                      <Typography
                        key={link.title}
                        component={Link}
                        to={link.url}
                        sx={{
                          color: 'rgba(255, 255, 255, 0.75)',
                          textDecoration: 'none',
                          fontSize: { xs: '0.8rem', md: '0.9rem' },
                          '&:hover': { color: theme.palette.primary.main },
                        }}
                      >
                        {link.title}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ borderColor: 'rgba(255, 215, 0, 0.2)' }} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card sx={cardStyles}>
              <Stack direction="row" spacing={2} alignItems="center">
                <LocationOn sx={{ color: theme.palette.primary.main }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                    Visit us
                  </Typography>
                  <MuiLink
                    href={siteConfig.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ display: 'block', color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', fontWeight: 500 }}
                  >
                    {siteConfig.address}
                  </MuiLink>
                </Box>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card sx={cardStyles}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Email sx={{ color: theme.palette.primary.main }} />
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                    Email us
                  </Typography>
                  <MuiLink
                    href={`mailto:${siteConfig.email}`}
                    sx={{ display: 'block', color: 'rgba(255, 255, 255, 0.85)', textDecoration: 'none', fontWeight: 500 }}
                  >
                    {siteConfig.email}
                  </MuiLink>
                </Box>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ mb: 3, borderColor: 'rgba(255, 215, 0, 0.2)' }} />
            <Typography
              variant="body2"
              sx={{ color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center', fontSize: { xs: '0.75rem', md: '0.85rem' } }}
            >
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
