import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, Chip, Stack, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MapIcon from '@mui/icons-material/Map';
import SatelliteIcon from '@mui/icons-material/Satellite';
import LayersIcon from '@mui/icons-material/Layers';
import PublicIcon from '@mui/icons-material/Public';
import RadarIcon from '@mui/icons-material/Radar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LaunchIcon from '@mui/icons-material/Launch';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ICT = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const module2Services = [
    {
      icon: PublicIcon,
      title: 'Sovereign AI Node',
      description: 'Independent AI infrastructure ensuring data sovereignty for African research with blockchain IP protection'
    },
    {
      icon: LayersIcon,
      title: 'DeSci DAO',
      description: 'Decentralized Autonomous Organization for transparent research funding and IP management'
    },
    {
      icon: RadarIcon,
      title: 'BPO & IT Incubation',
      description: 'Exponential BPO center and Computer Science incubator supporting AI, ML, and IoT innovations'
    }
  ];

  const geomapsServices = [
    {
      icon: MapIcon,
      title: 'Geospatial Mapping',
      description: 'High-precision mapping and surveying services for land management and development'
    },
    {
      icon: SatelliteIcon,
      title: 'Satellite Imagery',
      description: 'Advanced satellite imaging and analysis for agriculture, urban planning, and monitoring'
    },
    {
      icon: LocationOnIcon,
      title: 'Location Intelligence',
      description: 'Data-driven insights for business decisions and resource optimization'
    }
  ];

  return (
    <Box sx={{ pt: { xs: 12, md: 15 }, pb: { xs: 4, md: 8 } }}>
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
                ICT & AI | <Box component="span" sx={{ color: theme.palette.secondary.main }}>Geomaps</Box>
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
                Two Distinct Technology Divisions: Sovereign AI Infrastructure & Geospatial Intelligence
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
                LKIC operates two specialized technology divisions: <strong>ICT & AI</strong> focuses on sovereign digital infrastructure, AI solutions, DeSci DAO, and BPO services. <strong>Geomaps</strong> delivers cutting-edge geospatial technology, mapping, and location intelligence services. Together, we're building Africa's technological future.
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 4 }}>
                {['Sovereign AI', 'DeSci DAO', 'BPO & IT', 'Geomaps'].map((label) => (
                  <Chip
                    key={label}
                    label={label}
                    sx={{
                      bgcolor: theme.palette.secondary.main,
                      color: theme.palette.primary.main,
                      border: '1px solid rgba(255, 215, 0, 0.45)',
                      fontWeight: 600,
                      fontSize: { xs: '0.75rem', md: '0.95rem' },
                      py: { xs: 1.5, md: 2.5 },
                    }}
                  />
                ))}
              </Stack>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item xs={4}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>6+</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Services</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>100+</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Projects</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>50+</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Clients</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Box
                component="img"
                src="/images/innovation_double.png"
                alt="ICT & AI Technology"
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

          {/* ========== ICT & AI DIVISION ========== */}
          <Box sx={{ mb: { xs: 6, md: 10 } }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }} data-aos="fade-up">
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' }, color: theme.palette.primary.main }}>
                ICT & AI Division
              </Typography>
              <Box sx={{ width: '100px', height: '4px', bgcolor: theme.palette.primary.main, mx: 'auto', borderRadius: 2 }} />
            </Box>

            {/* About ICT & AI */}
            <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 4, md: 8 }, alignItems: 'stretch' }}>
              <Grid item xs={12} md={6} data-aos="fade-up" data-aos-delay="200" sx={{ display: 'flex' }}>
                <Box
                  component="img"
                  src="/images/innovation_three.png"
                  alt="ICT & AI Technology"
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
              <Grid item xs={12} md={6} data-aos="fade-up" sx={{ display: 'flex' }}>
                <Card sx={{ p: { xs: 4, md: 6 }, width: '100%', borderRadius: 3, bgcolor: theme.palette.background.paper, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                    About ICT & AI
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                    LKIC's ICT & AI division focuses on building sovereign digital infrastructure for Africa. We establish independent AI infrastructure ensuring data sovereignty, decentralized science governance through DeSci DAO, and comprehensive BPO & IT incubation centers supporting AI, ML, and IoT innovations.
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                    Our mission is to create African-owned technology solutions with blockchain-protected intellectual property, enabling research institutions and businesses to maintain data sovereignty while accessing cutting-edge AI capabilities.
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            {/* ICT & AI Services */}
            <Box sx={{ mb: { xs: 4, md: 8 } }}>
              <Typography variant="h3" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }} data-aos="fade-up">
                ICT & AI Services
              </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {module2Services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} data-aos="flip-left" data-aos-delay={index * 100}>
                  <Card sx={{ p: 4, height: '100%', borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <service.icon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      {service.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* ========== GEOMAPS DIVISION ========== */}
          <Box sx={{ mb: { xs: 6, md: 10 }, pt: { xs: 4, md: 6 }, borderTop: `3px solid ${theme.palette.divider}` }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }} data-aos="fade-up">
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' }, color: theme.palette.secondary.main }}>
                Geomaps Division
              </Typography>
              <Box sx={{ width: '100px', height: '4px', bgcolor: theme.palette.secondary.main, mx: 'auto', borderRadius: 2 }} />
            </Box>

            {/* About Geomaps */}
            <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 4, md: 8 }, alignItems: 'stretch' }}>
              <Grid item xs={12} md={6} data-aos="fade-up" sx={{ display: 'flex' }}>
                <Card sx={{ p: { xs: 4, md: 6 }, width: '100%', borderRadius: 3, bgcolor: theme.palette.background.paper, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                    About Geomaps
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                    Geomaps is LKIC's specialized geospatial technology division, delivering cutting-edge mapping, satellite imagery, and location intelligence services across Africa. We leverage state-of-the-art Geographic Information Systems (GIS), remote sensing, and spatial data analytics.
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                    Our geospatial solutions support agriculture, urban planning, environmental monitoring, infrastructure development, and natural resource management through precision mapping and real-time data integration.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} data-aos="fade-up" data-aos-delay="200" sx={{ display: 'flex' }}>
                <Box
                  component="img"
                  src="/images/geomap.jpeg"
                  alt="Geomaps Technology"
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
            </Grid>

            {/* Geomaps Services */}
            <Box sx={{ mb: { xs: 4, md: 8 } }}>
              <Typography variant="h3" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }} data-aos="fade-up">
                Geomaps Services
              </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {geomapsServices.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                  <Card sx={{ p: 4, height: '100%', borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <service.icon sx={{ fontSize: 40, color: theme.palette.secondary.main, mb: 2 }} />
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      {service.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ textAlign: 'center', mt: 6 }} data-aos="fade-up">
              <Button
                variant="contained"
                size="large"
                endIcon={<LaunchIcon />}
                href="https://www.geoafrica.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: theme.palette.secondary.main,
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: theme.palette.secondary.dark,
                    transform: 'translateY(-2px)',
                    boxShadow: 4,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Visit Geomaps Website
              </Button>
            </Box>
          </Box>

              {/* Geospatial Technology Showcase */}
              <Box sx={{ mb: { xs: 4, md: 8 } }}>
                <Card sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, bgcolor: theme.palette.background.paper }} data-aos="fade-up">
                  <Typography variant="h3" sx={{ mb: 4, textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
                    Advanced Geospatial Solutions
                  </Typography>
              <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                <Grid item xs={12} md={6} data-aos="fade-left">
                  <Box
                    component="img"
                    src="/images/raster.webp"
                    loading="lazy"
                    decoding="async"
                    alt="Geospatial Technology"
                    sx={{
                      width: '100%',
                      height: '350px',
                      objectFit: 'cover',
                      borderRadius: 3,
                      boxShadow: 3,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} data-aos="fade-right">
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                    Cutting-Edge GIS Technology
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                    Leveraging state-of-the-art Geographic Information Systems, remote sensing, and spatial data analytics to deliver precision mapping and location intelligence across Africa.
                  </Typography>
                  <Stack spacing={2}>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      ✓ High-Precision Mapping & Surveying
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      ✓ Satellite Imagery & Remote Sensing
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      ✓ 3D Modeling & Spatial Analysis
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      ✓ Real-Time Data Integration
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          </Box>

              {/* Geomaps Industry Applications */}
              <Box sx={{ mb: { xs: 4, md: 8 } }}>
                <Typography variant="h3" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }} data-aos="fade-up">
                  Geomaps Industry Applications
                </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              <Grid item xs={12} md={6} data-aos="fade-right">
                <Stack spacing={3}>
                  <Card sx={{ p: 4, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Agriculture & Land Management
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Precision farming solutions, crop monitoring, soil analysis, and land use planning through advanced geospatial data
                    </Typography>
                  </Card>
                  <Card sx={{ p: 4, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Urban Planning & Development
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      City planning, infrastructure development, and zoning analysis using 3D modeling and GIS technology
                    </Typography>
                  </Card>
                  <Card sx={{ p: 4, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Environmental Monitoring
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Track environmental changes, deforestation, water resources, and climate impact through satellite imagery
                    </Typography>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6} data-aos="fade-left">
                <Stack spacing={3}>
                  <Card sx={{ p: 4, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Real Estate & Property
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Site selection, boundary surveys, property valuation, and development feasibility studies
                    </Typography>
                  </Card>
                  <Card sx={{ p: 4, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Infrastructure & Transportation
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Route planning, asset management, and network optimization for roads, utilities, and logistics
                    </Typography>
                  </Card>
                  <Card sx={{ p: 4, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Mining & Natural Resources
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Resource exploration, site surveys, and environmental impact assessments using geospatial intelligence
                    </Typography>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Box>

            </Box>
          </Box>

          {/* Technology Stack - Combined Overview */}
          <Card sx={{ p: { xs: 4, md: 6 }, mb: { xs: 4, md: 8 }, borderRadius: 3, bgcolor: theme.palette.background.paper, border: `2px solid ${theme.palette.divider}` }} data-aos="zoom-in">
            <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
              <Typography variant="h4" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Technology Stack Overview
              </Typography>
              <Grid container spacing={{ xs: 3, md: 4 }}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ p: 3, height: '100%', borderRadius: 2, bgcolor: theme.palette.primary.main + '08', border: `1px solid ${theme.palette.primary.main + '20'}` }}>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, fontSize: { xs: '1.25rem', md: '1.5rem' }, color: theme.palette.primary.main }}>
                      ICT & AI Division
                    </Typography>
                    <Stack spacing={1}>
                      <Typography sx={{ color: theme.palette.text.secondary }}>• Sovereign AI Infrastructure</Typography>
                      <Typography sx={{ color: theme.palette.text.secondary }}>• Blockchain IP Protection</Typography>
                      <Typography sx={{ color: theme.palette.text.secondary }}>• DeSci DAO Platform</Typography>
                      <Typography sx={{ color: theme.palette.text.secondary }}>• ML/IoT Innovation</Typography>
                      <Typography sx={{ color: theme.palette.text.secondary }}>• BPO Solutions</Typography>
                      <Typography sx={{ color: theme.palette.text.secondary }}>• IT Incubation</Typography>
                    </Stack>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card sx={{ p: 3, height: '100%', borderRadius: 2, bgcolor: theme.palette.secondary.main + '08', border: `1px solid ${theme.palette.secondary.main + '20'}` }}>
                    <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, fontSize: { xs: '1.25rem', md: '1.5rem' }, color: theme.palette.secondary.main }}>
                      Geomaps Division
                    </Typography>
                    <Stack spacing={1}>
                      <Typography sx={{ color: theme.palette.text.secondary }}>• Satellite Imagery</Typography>
                      <Typography sx={{ color: theme.palette.text.secondary }}>• LiDAR Scanning</Typography>
                      <Typography sx={{ color: theme.palette.text.secondary }}>• GIS Platforms</Typography>
                      <Typography sx={{ color: theme.palette.text.secondary }}>• Location Intelligence</Typography>
                      <Typography sx={{ color: theme.palette.text.secondary }}>• High-Precision Mapping</Typography>
                      <Typography sx={{ color: theme.palette.text.secondary }}>• Remote Sensing</Typography>
                    </Stack>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Card>

          {/* CTA */}
          <Box sx={{ textAlign: 'center' }} data-aos="fade-up">
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
              Building Africa's Digital Future
            </Typography>
            <Typography variant="h6" sx={{ color: theme.palette.text.secondary, maxWidth: '800px', mx: 'auto', fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Partner with LKIC's <strong>ICT & AI Division</strong> for sovereign digital infrastructure and AI solutions, or our <strong>Geomaps Division</strong> for geospatial intelligence and mapping services. Together, we're building Africa's technological future.
            </Typography>
          </Box>
        </Container>
    </Box>
  );
};

export default ICT;
