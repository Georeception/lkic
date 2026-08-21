import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import BusinessIcon from '@mui/icons-material/Business';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LaunchIcon from '@mui/icons-material/Launch';
import { propertiesData } from '../data/propertiesData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RealEstate = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const handleViewDetails = (propertyId) => {
    navigate(`/real-estate/${propertyId}`);
  };

  const properties = propertiesData;
  const locationCount = new Set(properties.map((property) => property.location).filter(Boolean)).size;

  return (
    <Box sx={{ pt: { xs: 12, md: 15 }, pb: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {/* Hero Section */}
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 4, md: 8 } }}>
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
                Real <Box component="span" sx={{ color: theme.palette.primary.main }}>Estate</Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1.25rem' },
                }}
              >
                Premium properties and developments redefining modern living across Kenya
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                }}
              >
                From luxury apartments in Nairobi's prime locations to exclusive coastal residences, our real estate portfolio represents the pinnacle of modern living. Each property is carefully designed and developed to offer exceptional quality, strategic locations, and lasting value for residents and investors alike.
              </Typography>
              <Stack direction="row" spacing={{ xs: 2, md: 4 }} flexWrap="wrap" sx={{ mb: 4 }}>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>{properties.length}</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Properties</Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>{locationCount}</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Locations</Typography>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>Premium</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Quality</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Box
                component="img"
                src="/images/nina.jpeg"
                alt="Real Estate Development"
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
                src="/images/viping.jpeg"
                alt="Real Estate Portfolio"
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
                  Our Real Estate Portfolio
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                  LKIC's real estate division encompasses a diverse portfolio of residential, commercial, and hospitality properties. From luxury apartments to exclusive villas and prime development land, we're creating spaces that enhance lifestyles and drive value.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: theme.palette.text.secondary }}>
                  Our commitment to excellence is reflected in every project, from initial design through construction to final delivery, ensuring that each property meets the highest standards of quality and craftsmanship.
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* Properties Grid */}
          <Box sx={{ mb: { xs: 4, md: 8 } }}>
            <Typography variant="h3" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }} data-aos="fade-up">
              Featured Properties
            </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {properties.map((property, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                  <Card
                    sx={{
                      borderRadius: 2,
                      overflow: 'hidden',
                      bgcolor: theme.palette.background.paper,
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={property.images?.[0] || property.image}
                      alt={property.name}
                      sx={{
                        objectFit: 'cover',
                        height: { xs: '200px', sm: '240px' }
                      }}
                    />
                    <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap', gap: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                          {property.name}
                        </Typography>
                        <Chip
                          label={property.status}
                          size="small"
                          sx={{
                            bgcolor: theme.palette.secondary.main,
                            color: theme.palette.primary.main,
                            border: '1px solid rgba(255, 215, 0, 0.45)',
                            fontWeight: 600,
                            fontSize: { xs: '0.7rem', sm: '0.8rem' },
                          }}
                        />
                      </Box>
                      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                        <HomeIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                          {property.type}
                        </Typography>
                      </Stack>
                      {property.location && (
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                          <LocationOnIcon sx={{ fontSize: 16, color: theme.palette.text.secondary }} />
                          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                            {property.location}
                          </Typography>
                        </Stack>
                      )}
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 3 }}>
                        {property.description}
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<VisibilityIcon />}
                        onClick={() => handleViewDetails(property.id)}
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          color: theme.palette.secondary.main,
                          '&:hover': {
                            bgcolor: theme.palette.primary.dark,
                          },
                        }}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Key Features */}
          <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 4, md: 8 } }}>
            <Grid item xs={12} md={4} data-aos="flip-up" data-aos-delay="100">
              <Card sx={{ p: 4, textAlign: 'center', borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                <StarIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Premium Quality
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  World-class construction and finishing standards
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 4, textAlign: 'center', borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                <LocationOnIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Prime Locations
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  Strategic positioning in Kenya's most desirable areas
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 4, textAlign: 'center', borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                <BusinessIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                  Diverse Portfolio
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  From residential to commercial and hospitality
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* CTA Section */}
          <Card sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, bgcolor: theme.palette.primary.main, color: theme.palette.secondary.main }} data-aos="zoom-in">
            <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Invest in Quality Living
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8 }}>
                Explore our real estate opportunities and discover properties that combine luxury, location, and lasting value.
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<LaunchIcon />}
                href="https://www.kbestvilla.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  color: theme.palette.primary.main,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: 'white',
                    transform: 'translateY(-2px)',
                    boxShadow: 4,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Visit K Best Villa
              </Button>
            </Box>
          </Card>
        </Container>
    </Box>
  );
};

export default RealEstate;
