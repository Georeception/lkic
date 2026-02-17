import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParkIcon from '@mui/icons-material/Park';
import NatureIcon from '@mui/icons-material/Nature';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Agriventures = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const ventures = [
    {
      title: '40-Acre Mango Plantation',
      description: 'Extensive mango farming operation with modern agricultural practices and sustainable cultivation methods'
    },
    {
      title: 'Clearcut Enterprises',
      description: 'Comprehensive agricultural business managing diverse crops, herbs, and plant varieties'
    },
    {
      title: 'Medicinal Herbs & Plants',
      description: 'Cultivation of traditional and medicinal plants for pharmaceutical and wellness applications'
    },
    {
      title: 'Sustainable Farming Practices',
      description: 'Implementation of eco-friendly and sustainable agricultural techniques'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box sx={{ flex: 1, pt: { xs: 12, md: 15 }, pb: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {/* Hero Section */}
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 4, md: 8 }, alignItems: 'center' }}>
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  mb: 3,
                  fontWeight: 'bold',
                  color: theme.palette.text.primary,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                <Box component="span" sx={{ color: theme.palette.primary.main }}>Agri</Box>ventures
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                }}
              >
                Sustainable agricultural enterprises combining traditional farming wisdom with modern innovation and digitalized processing
              </Typography>
              <Card sx={{ mb: 3, p: 2, bgcolor: theme.palette.primary.main + '10', borderLeft: `4px solid ${theme.palette.primary.main}` }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                  Part of ICT Solutions - Geomaps Division
                </Typography>
              </Card>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                }}
              >
                Through Clearcut Enterprises and our extensive agricultural operations, we're demonstrating how sustainable farming practices can enhance productivity while preserving the environment. Our 40-acre mango plantation, diverse crop cultivation, and state-of-the-art digitalized processing plant (under ICT/Geomaps) showcase the integration of agriculture and technology.
              </Typography>
              <Stack direction="row" spacing={{ xs: 2, md: 4 }} flexWrap="wrap" sx={{ mb: 4 }}>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>40+</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Acres</Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>Multiple</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Crops</Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>Organic</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Methods</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Box
                component="img"
                src="/images/mango.jpg"
                alt="Mango Plantation"
                sx={{
                  width: '100%',
                  height: { xs: 'auto', md: '600px' },
                  objectFit: 'cover',
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>

          {/* Overview with Image */}
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 4, md: 8 }, alignItems: 'stretch' }}>
            <Grid item xs={12} md={6} data-aos="fade-up" sx={{ display: 'flex' }}>
              <Box
                component="img"
                src="/images/herb.jpg"
                alt="Agricultural Vision"
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: { xs: '300px', md: '400px' },
                  objectFit: 'cover',
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up" data-aos-delay="200" sx={{ display: 'flex' }}>
              <Card sx={{ p: { xs: 4, md: 6 }, width: '100%', borderRadius: 3, bgcolor: theme.palette.background.paper, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                  Our Agricultural Vision
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                  LKIC's Agriventures represents a commitment to sustainable agriculture and food security. Through Clearcut Enterprises and our extensive mango plantations, we're demonstrating how modern farming techniques can enhance productivity while preserving the environment.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: theme.palette.text.secondary }}>
                  We integrate organic farming methods, water conservation techniques, and soil health management to create sustainable agriculture. Our digitalized, robotic-enhanced fruit & vegetable processing plant (under ICT/Geomaps) transforms local produce into premium export-quality products.
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* Main Projects */}
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 4, md: 8 } }}>
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                <ParkIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
                <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
                  Mango Plantation
                </Typography>
              </Stack>
              <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                Our flagship 40-acre mango plantation showcases large-scale commercial fruit farming at its finest. Using modern irrigation systems, organic fertilizers, and integrated pest management, we produce premium mangoes for both local and export markets.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Card sx={{ p: 2, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, mb: 1 }}>40</Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>Acres Under Cultivation</Typography>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ p: 2, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, mb: 1 }}>Premium</Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>Quality Standards</Typography>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                <NatureIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
                <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
                  Clearcut Enterprises
                </Typography>
              </Stack>
              <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                Clearcut Enterprises manages our diverse agricultural portfolio, including medicinal herbs, specialty plants, and traditional crops. We focus on sustainable practices that enhance soil health, conserve water, and promote biodiversity.
              </Typography>
              <Stack spacing={2}>
                <Card sx={{ p: 2, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <LocalFloristIcon sx={{ color: theme.palette.primary.main }} />
                    <Typography sx={{ fontWeight: 600 }}>Medicinal & Herbal Plants</Typography>
                  </Stack>
                </Card>
                <Card sx={{ p: 2, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <WbSunnyIcon sx={{ color: theme.palette.primary.main }} />
                    <Typography sx={{ fontWeight: 600 }}>Sustainable Practices</Typography>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>

          {/* Ventures Grid */}
          <Box sx={{ mb: { xs: 4, md: 8 } }}>
            <Typography variant="h3" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }} data-aos="fade-up">
              Our Agricultural Ventures
            </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {ventures.map((venture, index) => (
                <Grid item xs={12} sm={6} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                  <Card sx={{ p: 4, height: '100%', borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {venture.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      {venture.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Sustainability Focus */}
          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 4, md: 8 } }}>
            <Grid item xs={12} md={4} data-aos="flip-up" data-aos-delay="100">
              <Card sx={{ p: 4, textAlign: 'center', borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                <NatureIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Organic Methods
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Natural fertilizers and pest management for healthier crops
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 4, textAlign: 'center', borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                <WbSunnyIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Water Conservation
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Efficient irrigation and rainwater harvesting systems
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 4, textAlign: 'center', borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                <LocalFloristIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Soil Health
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Crop rotation and organic matter enrichment
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* Digital Processing Highlight */}
          <Box sx={{ mb: { xs: 4, md: 8 } }}>
            <Card sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, bgcolor: theme.palette.background.paper, border: `2px solid ${theme.palette.primary.main}` }} data-aos="fade-up">
              <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
                Digitalized Agriventure Processing
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                Part of our ICT Solutions - Geomaps Division
              </Typography>
              <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                <Grid item xs={12} md={6} data-aos="fade-right">
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                    Fruit & Vegetable Processing
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                    A state-of-the-art digitalized, robotic-enhanced processing plant for global export, utilizing local agricultural resources and cutting-edge automation technology.
                  </Typography>
                  <Stack spacing={2}>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      ✓ Digitalized Processing Systems
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      ✓ Robotic Enhancement & Automation
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      ✓ Global Export Standards
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      ✓ Local Resource Utilization
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6} data-aos="fade-left">
                  <Box
                    component="img"
                    src="/images/food.jpg"
                    alt="Agriventure Processing"
                    sx={{
                      width: '100%',
                      height: { xs: '300px', sm: '350px' },
                      objectFit: 'cover',
                      borderRadius: 3,
                      boxShadow: 3,
                    }}
                  />
                </Grid>
              </Grid>
            </Card>
          </Box>

          {/* Impact Section */}
          <Card sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, bgcolor: theme.palette.primary.main, color: theme.palette.secondary.main }} data-aos="zoom-in">
            <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Growing Sustainably for the Future
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8 }}>
                Our agricultural ventures demonstrate that farming can be both profitable and environmentally responsible. By combining traditional knowledge with modern techniques and digitalized processing, we're contributing to food security and economic development.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                From seed to harvest to robotic processing and global export, we maintain the highest standards of quality and sustainability.
              </Typography>
            </Box>
          </Card>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Agriventures;

