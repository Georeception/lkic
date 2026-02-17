import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Stack,
  Divider,
  Button,
  IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import StarIcon from '@mui/icons-material/Star';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { propertiesData } from '../data/propertiesData';

const PropertyDetail = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const property = propertiesData.find(p => p.id === parseInt(id));
  
  // Get images array or fallback to single image
  const images = property?.images || (property?.image ? [property.image] : []);

  if (!property) {
    return (
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Box sx={{ flex: 1, pt: { xs: 12, md: 15 }, pb: { xs: 4, md: 8 }, textAlign: 'center' }}>
          <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
            <Typography variant="h4" sx={{ mb: 3, fontSize: { xs: '1.5rem', md: '2rem' } }}>Property Not Found</Typography>
            <Button variant="contained" onClick={() => navigate('/real-estate')}>
              Back to Properties
            </Button>
          </Container>
        </Box>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box sx={{ flex: 1, pt: { xs: 12, md: 15 }, pb: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {/* Header with Back Button */}
          <Box sx={{ mb: { xs: 3, md: 4 } }}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/real-estate')}
              sx={{ mb: 3 }}
            >
              Back to Properties
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 2 }}>
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 'bold',
                    color: theme.palette.text.primary,
                    mb: 2,
                    fontSize: { xs: '1.75rem', md: '3rem' },
                  }}
                >
                  {property.name}
                </Typography>
                <Chip
                  label={property.status}
                  sx={{
                    bgcolor: theme.palette.primary.main + '15',
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    py: { xs: 1.5, md: 2.5 },
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {/* Image Gallery */}
            <Grid item xs={12}>
              {/* Main Selected Image */}
              <Box
                component="img"
                src={images[selectedImageIndex] || property.image || '/images/impact.jpg'}
                alt={`${property.name} - Image ${selectedImageIndex + 1}`}
                sx={{
                  width: '100%',
                  height: { xs: '250px', md: '500px' },
                  objectFit: 'cover',
                  borderRadius: 3,
                  boxShadow: 3,
                  mb: { xs: 2, md: 3 },
                  cursor: images.length > 1 ? 'pointer' : 'default',
                }}
                onClick={() => images.length > 1 && setSelectedImageIndex((prev) => (prev + 1) % images.length)}
              />
              
              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <Grid container spacing={1.5}>
                  {images.map((img, index) => (
                    <Grid item xs={4} sm={3} md={2.4} key={index}>
                      <Box
                        component="img"
                        src={img}
                        alt={`${property.name} - Thumbnail ${index + 1}`}
                        onClick={() => setSelectedImageIndex(index)}
                        sx={{
                          width: '100%',
                          height: { xs: '80px', sm: '100px', md: '120px' },
                          objectFit: 'cover',
                          borderRadius: 2,
                          cursor: 'pointer',
                          border: selectedImageIndex === index ? `3px solid ${theme.palette.primary.main}` : '3px solid transparent',
                          opacity: selectedImageIndex === index ? 1 : 0.7,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            opacity: 1,
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>

            {/* Property Details */}
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Property Overview
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}
              >
                {property.description}
              </Typography>

              {property.detailedDescription && (
                <Typography
                  variant="body1"
                  sx={{ mb: 4, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}
                >
                  {property.detailedDescription}
                </Typography>
              )}

              <Divider sx={{ my: { xs: 3, md: 4 } }} />

              <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Key Features
              </Typography>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                {property.features &&
                  property.features.map((feature, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '50%',
                            bgcolor: theme.palette.primary.main + '15',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {React.cloneElement(feature.icon, { sx: { color: theme.palette.primary.main, fontSize: 24 } })}
                        </Box>
                        <Box>
                          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                            {feature.label}
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {feature.value}
                          </Typography>
                        </Box>
                      </Stack>
                    </Grid>
                  ))}
              </Grid>

              {property.amenities && (
                <>
                  <Divider sx={{ my: { xs: 3, md: 4 } }} />
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                    Amenities
                  </Typography>
                  <Grid container spacing={{ xs: 1, md: 2 }}>
                    {property.amenities.map((amenity, index) => (
                      <Grid item xs={6} sm={4} key={index}>
                        <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                          • {amenity}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
            </Grid>

            {/* Sidebar Info */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  bgcolor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  position: { xs: 'static', md: 'sticky' },
                  top: { md: 100 },
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                  Property Information
                </Typography>

                <Stack spacing={{ xs: 2, md: 3 }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <HomeIcon sx={{ color: theme.palette.primary.main }} />
                    <Box>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        Type
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        {property.type}
                      </Typography>
                    </Box>
                  </Stack>

                  {property.location && (
                    <Stack direction="row" spacing={2} alignItems="center">
                      <LocationOnIcon sx={{ color: theme.palette.primary.main }} />
                      <Box>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                          Location
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {property.location}
                        </Typography>
                      </Box>
                    </Stack>
                  )}

                  {property.price && (
                    <Box>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 1, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                        Price
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
                        {property.price}
                      </Typography>
                    </Box>
                  )}

                  <Divider />

                  <Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                      Contact Us
                    </Typography>
                    <Stack spacing={2}>
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<PhoneIcon />}
                        sx={{
                          bgcolor: theme.palette.primary.main,
                          color: theme.palette.secondary.main,
                          py: { xs: 1.25, md: 1.5 },
                          fontSize: { xs: '0.875rem', md: '1rem' },
                          '&:hover': {
                            bgcolor: theme.palette.primary.dark,
                          },
                        }}
                      >
                        Call Now
                      </Button>
                      <Button
                        variant="outlined"
                        fullWidth
                        startIcon={<EmailIcon />}
                        sx={{
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                          py: { xs: 1.25, md: 1.5 },
                          fontSize: { xs: '0.875rem', md: '1rem' },
                          '&:hover': {
                            borderColor: theme.palette.primary.dark,
                            bgcolor: theme.palette.primary.main + '10',
                          },
                        }}
                      >
                        Send Email
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>

          {/* CTA Section */}
          <Box sx={{ mt: { xs: 4, md: 6 }, textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: theme.palette.primary.main,
                color: theme.palette.secondary.main,
                px: { xs: 4, md: 6 },
                py: { xs: 1.25, md: 1.5 },
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                '&:hover': {
                  bgcolor: theme.palette.primary.dark,
                },
              }}
            >
              Schedule Viewing
            </Button>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default PropertyDetail;

