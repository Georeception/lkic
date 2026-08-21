import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, Chip, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BiotechIcon from '@mui/icons-material/Biotech';
import ScienceIcon from '@mui/icons-material/Science';
import MemoryIcon from '@mui/icons-material/Memory';
import ComputerIcon from '@mui/icons-material/Computer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Research = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const areas = [
    {
      icon: BiotechIcon,
      title: 'Bioscience Research',
      description: 'Botanical garden & medicinal plants research, biotechnology, synthetic biology, and bioinformatics with pan-African flora'
    },
    {
      icon: ScienceIcon,
      title: 'Advanced Physics & Energy',
      description: 'Renewable energy research, reverse transitory power transfer, particle physics, and advanced electronics invention'
    },
    {
      icon: PsychologyIcon,
      title: 'Applied AI',
      description: 'AI technology applications across multiple fields of research and innovation'
    },
    {
      icon: ComputerIcon,
      title: 'Geospatial & Nanotechnology',
      description: 'Earth Sciences research facility leveraging cutting-edge geospatial expertise and nanotechnology'
    },
    {
      icon: MemoryIcon,
      title: 'Environmental Law',
      description: 'Developing legal frameworks for resilience and standards in the age of climate change'
    },
    {
      icon: SmartToyIcon,
      title: 'Quantum Research',
      description: 'Exploring quantum mechanics applications for sustainable energy solutions'
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
                Research & <Box component="span" sx={{ color: theme.palette.primary.main }}>Development</Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  fontSize: { xs: '0.95rem', md: '1.25rem' },
                }}
              >
                Pioneering Kenya's journey toward exponential technologies through cutting-edge research and innovation
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
                At LKIC, we're building Kenya's future through groundbreaking research spanning bioscience, advanced physics, quantum energy, environmental law, and applied AI. Our integrated research divisions combine botanical research, particle physics, geospatial technology, and cutting-edge nanotechnology to create solutions that transform industries and improve lives across Africa.
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 4 }}>
                {['Bioscience', 'Quantum & Energy', 'Earth Sciences'].map((label) => (
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
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Research Areas</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>50+</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Researchers</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>20+</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Projects</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Box
                component="img"
                src="/images/innovation.jpg"
                alt="Research Laboratory"
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

          {/* Mission Statement with Image */}
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 4, md: 8 }, alignItems: 'stretch' }}>
            <Grid item xs={12} md={6} data-aos="fade-up" sx={{ display: 'flex' }}>
              <Box
                component="img"
                src="/images/tech.jpg"
                alt="Research Technology"
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
                  Our Research Mission
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                  LKIC's Research & Development division integrates two major research modules: Module 1 (Bioscience, Advanced Physics & Energy, Applied AI) and Module 4 (Earth Sciences & Environmental Law). Together, these divisions serve as Kenya's gateway to exponential technologies.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: theme.palette.text.secondary }}>
                  From botanical gardens and medicinal plant research to particle physics and quantum energy, from geospatial technology to environmental legal frameworks—our interdisciplinary approach creates innovative solutions that drive sustainable development across Africa.
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* Research Areas */}
          <Box sx={{ mb: { xs: 4, md: 8 } }}>
            <Typography variant="h3" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }} data-aos="fade-up">
              Key Research Areas
            </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {areas.map((area, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                  <Card sx={{ p: 4, height: '100%', borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <area.icon sx={{ fontSize: 40, color: theme.palette.primary.main, mb: 2 }} />
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {area.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      {area.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Image Section */}
          <Box sx={{ mb: 8 }} data-aos="fade-up">
            <Box
              component="img"
              src="/images/board.jpg"
              alt="Research Collaboration"
              sx={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: 3,
                boxShadow: 3,
              }}
            />
          </Box>

          {/* Core Research Areas */}
          <Box sx={{ mb: { xs: 4, md: 8 } }}>
            <Typography variant="h3" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }} data-aos="fade-up">
              Pioneering Research Divisions
            </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              <Grid item xs={12} md={4} data-aos="flip-left" data-aos-delay="100">
                <Card sx={{ p: 4, height: '100%', borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: theme.palette.primary.main }}>
                    Bioscience Research
                  </Typography>
                  <Stack spacing={2}>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      • Botanical & Medicinal Research
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      • Biotechnology & Synthetic Biology
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      • Bioinformatics
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      • Pan-African Flora Collection
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ p: 4, height: '100%', borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: theme.palette.primary.main }}>
                    Advanced Physics & Energy
                  </Typography>
                  <Stack spacing={2}>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      • Renewable Energy Research
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      • Reverse Transitory Power Transfer
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      • Particle Physics Research
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      • Advanced Electronics Invention
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ p: 4, height: '100%', borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: theme.palette.primary.main }}>
                    Applied AI
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                    Use of AI technology in multiple fields of research and innovation:
                  </Typography>
                  <Stack spacing={2}>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      • AI-powered Research Tools
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      • Machine Learning Applications
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      • Cross-field AI Integration
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Earth Sciences Section */}
          <Box sx={{ mb: { xs: 4, md: 8 } }}>
            <Typography variant="h3" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }} data-aos="fade-up">
              Earth Sciences & Environmental Law
            </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              <Grid item xs={12} md={6} data-aos="fade-right">
                <Card sx={{ p: { xs: 4, md: 6 }, height: '100%', borderRadius: 3, bgcolor: theme.palette.background.paper }}>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: theme.palette.secondary.main }}>
                    Geospatial & Nanotechnology
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8, color: theme.palette.text.secondary }}>
                    A specialized research facility for Earth Sciences, leveraging the founder's extensive geospatial expertise combined with cutting-edge nanotechnology research.
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Our geospatial research integrates satellite technology, remote sensing, and nano-scale materials science to create innovative solutions for environmental monitoring and resource management.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} data-aos="fade-left">
                <Card sx={{ p: { xs: 4, md: 6 }, height: '100%', borderRadius: 3, bgcolor: theme.palette.background.paper }}>
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: theme.palette.secondary.main }}>
                    Environmental Law
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.8, color: theme.palette.text.secondary }}>
                    Developing comprehensive frameworks for resilience and legal standards in the age of climate change.
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Our environmental law division focuses on creating policy frameworks, compliance standards, and legal structures that support sustainable development while addressing climate adaptation and mitigation challenges.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>

          {/* Future Vision */}
          <Card sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, bgcolor: theme.palette.primary.main, color: theme.palette.secondary.main }} data-aos="zoom-in">
            <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Watch This Space
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8 }}>
                Our R&D initiatives are continuously evolving. We're expanding our research capabilities and forging partnerships with leading institutions globally to bring breakthrough technologies to Kenya.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8 }}>
                Stay tuned for announcements on new research projects, collaborations, and innovation labs.
              </Typography>
            </Box>
          </Card>
        </Container>
    </Box>
  );
};

export default Research;
