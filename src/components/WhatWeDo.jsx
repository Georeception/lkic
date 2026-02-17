import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import BusinessIcon from '@mui/icons-material/Business';
import MapIcon from '@mui/icons-material/Map';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: 'Research & Development',
    description: 'Pioneering exponential technologies for Kenya\'s future through advanced research in AI, robotics, and biotechnology.',
    icon: ScienceIcon,
  },
  {
    title: 'Real Estate',
    description: 'Premium properties from Nina Apartments to luxury Vipingo Ridge residences, redefining modern living.',
    icon: BusinessIcon,
  },
  {
    title: 'ICT - Geomaps',
    description: 'High-tech geospatial solutions and advanced imaging technology driving precision and innovation.',
    icon: MapIcon,
  },
  {
    title: 'Agriventures',
    description: '40 acres of thriving mango farms and innovative agricultural enterprises through Clearcut Enterprises.',
    icon: AgricultureIcon,
  },
  {
    title: 'Outreach',
    description: 'Philanthropy, leadership, and community development through the BUS political movement.',
    icon: VolunteerActivismIcon,
  },
];

const WhatWeDo = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 2,
            textAlign: 'center',
            color: theme.palette.secondary.main,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
          data-aos="fade-up"
        >
          Five Pillars of Excellence
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: { xs: 4, md: 6 },
            textAlign: 'center',
            color: theme.palette.text.secondary,
            maxWidth: '800px',
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.5rem' },
            px: { xs: 2, md: 0 },
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Integrated divisions driving innovation, growth, and sustainable impact across Kenya
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'background.paper',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box
                    sx={{
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <service.icon
                      sx={{
                        fontSize: { xs: 36, md: 48 },
                        color: theme.palette.primary.main,
                      }}
                    />
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 600,
                      fontSize: { xs: '1rem', md: '1.25rem' },
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: { xs: '0.875rem', md: '0.875rem' },
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatWeDo; 