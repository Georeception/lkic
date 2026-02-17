import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TargetIcon from '@mui/icons-material/TrackChanges';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '24px',
  objectFit: 'cover',
});

const About = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const values = [
    {
      icon: LightbulbIcon,
      title: 'Innovation',
      description: 'Pioneering exponential technologies and forward-thinking solutions'
    },
    {
      icon: TargetIcon,
      title: 'Excellence',
      description: 'Commitment to the highest standards across all our divisions'
    },
    {
      icon: PeopleIcon,
      title: 'Empowerment',
      description: 'Creating opportunities for youth and innovative minds'
    },
    {
      icon: EmojiEventsIcon,
      title: 'Legacy',
      description: 'Building lasting impact for future generations'
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
                  color: theme.palette.secondary.main,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                About <Box component="span" sx={{ color: theme.palette.primary.main }}>LKIC</Box>
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
                A visionary legacy program founded by Hon. Lenny Kivuti, former Senator and MP for Embu County
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
                Lenny Kivuti Innovation and Research Centre represents a commitment to transforming Kenya through innovation, technology, and sustainable development. Our integrated approach spans five core divisions, each working synergistically to create lasting impact and drive progress across the nation.
              </Typography>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item xs={4}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>5</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Core Divisions</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>2010+</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Founded</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>100+</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Team Members</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Box
                component="img"
                src="/images/book.jpg"
                alt="LKIC Innovation"
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

          {/* Story Section with Images */}
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 4, md: 8 }, alignItems: 'flex-start' }}>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Box
                component="img"
                src="/images/hands.png"
                alt="Collaboration"
                sx={{
                  width: '100%',
                  height: 'auto',
                  minHeight: { xs: '300px', md: '400px' },
                  maxHeight: '400px',
                  objectFit: 'cover',
                  borderRadius: 3,
                  boxShadow: 3,
                  mb: 4,
                }}
              />
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 'bold', color: theme.palette.text.primary, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                Lenny Kivuti Innovation and Research Centre (LKIC) was established as a legacy program to empower Kenya's youth and innovative minds. Founded by Hon. Lenny Kivuti, a distinguished political leader who served as Senator for Embu County and Member of Parliament, LKIC embodies a commitment to transforming lives through innovation and opportunity.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                Drawing from years of public service and deep understanding of Kenya's needs, LKIC operates across five integrated divisions: Research & Development, Real Estate, ICT Solutions, Agriventures, and Outreach Programs. Each division works synergistically to create sustainable impact and drive progress.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up" data-aos-delay="200">
              <Typography variant="h3" sx={{ mb: 3, fontWeight: 'bold', color: theme.palette.text.primary, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                We envision a Kenya where youth and innovative minds are equipped with the tools, knowledge, and opportunities to shape the future. Through exponential technologies, sustainable practices, and community-centered programs, LKIC is pioneering pathways to prosperity.
              </Typography>
              <Card sx={{ bgcolor: theme.palette.background.paper, p: { xs: 3, md: 4 }, borderRadius: 2, mb: 4 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8 }}>
                  To advance Kenya's development through integrated innovation across technology, agriculture, real estate, and community empowerment, creating lasting opportunities for current and future generations.
                </Typography>
              </Card>
              <Box
                component="img"
                src="/images/track.jpg"
                alt="Innovation Track"
                sx={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: 3,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>

          {/* Values Section */}
          <Box sx={{ mb: { xs: 4, md: 8 } }}>
            <Typography variant="h3" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', fontWeight: 'bold', color: theme.palette.text.primary, fontSize: { xs: '1.75rem', md: '2.5rem' } }} data-aos="fade-up">
              Our Core Values
            </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                  <Card sx={{ textAlign: 'center', p: 4, height: '100%', bgcolor: theme.palette.background.paper }}>
                    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '50%',
                          bgcolor: theme.palette.primary.main + '15',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <value.icon sx={{ fontSize: 32, color: theme.palette.primary.main }} />
                      </Box>
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      {value.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Leadership Section */}
          <Box sx={{ mb: { xs: 4, md: 8 } }}>
            <Typography variant="h3" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', fontWeight: 'bold', color: theme.palette.text.primary, fontSize: { xs: '1.75rem', md: '2.5rem' } }} data-aos="fade-up">
              Leadership & Legacy
            </Typography>
            
            {/* Founder */}
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ mb: { xs: 6, md: 8 } }}>
              <Grid item xs={12} md={6} data-aos="fade-right">
                <Box
                  component="img"
                  src="/images/kivuti.png"
                  alt="Hon. Lenny Kivuti - Founder"
                  sx={{
                    width: '100%',
                    height: { xs: '400px', md: '500px' },
                    objectFit: 'cover',
                    borderRadius: 3,
                    boxShadow: 3,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} data-aos="fade-left">
                <Card sx={{ bgcolor: theme.palette.background.paper, p: { xs: 4, md: 6 }, borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: theme.palette.text.primary, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                    Hon. Lenny Kivuti
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 4, color: theme.palette.primary.main, fontWeight: 600, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                    Founder & Visionary Leader
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                    Hon. Lenny Kivuti's journey from public service to entrepreneurship and innovation leadership demonstrates a lifelong commitment to Kenya's progress. As founder of LKIC and the BUS political movement, his vision extends beyond traditional boundaries to create integrated solutions for sustainable development.
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                    His experience in governance, combined with ventures in real estate, agriculture, and technology, positions LKIC as a unique catalyst for change, bridging political insight with practical innovation.
                  </Typography>
                </Card>
              </Grid>
            </Grid>

            {/* COO */}
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              <Grid item xs={12} md={6} data-aos="fade-up">
                <Card sx={{ bgcolor: theme.palette.background.paper, p: { xs: 4, md: 6 }, borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold', color: theme.palette.text.primary, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                    Kirika Kivuti
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 4, color: theme.palette.primary.main, fontWeight: 600, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                    Chief Operating Officer
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                    Kirika Kivuti brings exceptional transdisciplinary expertise to LKIC, with extensive experience spanning material science, phytochemistry, microbiology, management, biotechnology, and bioengineering. His deep curiosity about the mechanics of life and ability to bridge knowledge across multiple scientific disciplines drives LKIC's innovative approach to solving complex challenges.
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                    As COO, Kirika's passion for utilizing scientific knowledge to better humanity fuels LKIC's research initiatives and operational excellence. His commitment to fostering innovation across teams and creating positive impact through cutting-edge ideas positions LKIC at the forefront of technological advancement and sustainable development in Kenya.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} data-aos="fade-up" data-aos-delay="200">
                <Box
                  component="img"
                  src="/images/kirika.jfif"
                  alt="Kirika Kivuti - COO"
                  sx={{
                    width: '100%',
                    height: { xs: '400px', md: '500px' },
                    objectFit: 'cover',
                    borderRadius: 3,
                    boxShadow: 3,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default About;

