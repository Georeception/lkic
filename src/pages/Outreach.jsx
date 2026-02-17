import React, { useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack, Chip, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PeopleIcon from '@mui/icons-material/People';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FlagIcon from '@mui/icons-material/Flag';
import LaunchIcon from '@mui/icons-material/Launch';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Outreach = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const programs = [
    {
      icon: FavoriteIcon,
      title: 'Philanthropy',
      description: 'Community support programs addressing education, healthcare, and poverty alleviation'
    },
    {
      icon: PeopleIcon,
      title: 'Leadership Development',
      description: 'Training and mentorship programs for emerging leaders and change-makers'
    },
    {
      icon: SchoolIcon,
      title: 'Youth Empowerment',
      description: 'Skills development, entrepreneurship training, and career guidance for young people'
    },
    {
      icon: LightbulbIcon,
      title: 'Innovation Programs',
      description: 'Supporting innovative ideas and solutions from community members'
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
                Outreach & <Box component="span" sx={{ color: theme.palette.secondary.main }}>Leadership</Box>
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
                Philanthropy, leadership development, and community empowerment through the BUS movement
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
                LKIC's Outreach division is dedicated to creating lasting positive change in communities across Kenya. Through strategic philanthropy, leadership development programs, and grassroots engagement via the BUS political movement, we're building capacity and creating opportunities for sustainable progress at the community level.
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 4 }}>
                <Chip label="Community Impact" sx={{ bgcolor: theme.palette.secondary.main + '15', color: theme.palette.secondary.main, fontSize: { xs: '0.75rem', md: '0.95rem' }, py: { xs: 1.5, md: 2.5 } }} />
                <Chip label="Leadership" sx={{ bgcolor: theme.palette.primary.main + '15', color: theme.palette.primary.main, fontSize: { xs: '0.75rem', md: '0.95rem' }, py: { xs: 1.5, md: 2.5 } }} />
                <Chip label="Empowerment" sx={{ bgcolor: theme.palette.primary.main + '15', color: theme.palette.primary.main, fontSize: { xs: '0.75rem', md: '0.95rem' }, py: { xs: 1.5, md: 2.5 } }} />
              </Stack>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid item xs={4}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>4</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Core Programs</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>1000+</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Lives Impacted</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>50+</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Communities</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Box
                component="img"
                src="/images/bus.png"
                alt="Community Outreach"
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

          {/* Mission with Image */}
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 4, md: 8 }, alignItems: 'stretch' }}>
            <Grid item xs={12} md={6} data-aos="fade-up" sx={{ display: 'flex' }}>
              <Box
                component="img"
                src="/images/lenny.png"
                alt="Community Mission"
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
                  Our Outreach Mission
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8, color: theme.palette.text.secondary }}>
                  LKIC's Outreach division is dedicated to creating lasting positive change in communities across Kenya. Through philanthropy, leadership development, and strategic community engagement, we're building capacity and creating opportunities for sustainable progress.
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: theme.palette.text.secondary }}>
                  We believe that sustainable development begins at the grassroots level, and our programs are designed to empower communities with the tools, knowledge, and resources they need to thrive.
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* Programs Grid */}
          <Box sx={{ mb: { xs: 4, md: 8 } }}>
            <Typography variant="h3" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }} data-aos="fade-up">
              Our Programs
            </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {programs.map((program, index) => (
                <Grid item xs={12} sm={6} key={index} data-aos="flip-left" data-aos-delay={index * 100}>
                  <Card sx={{ p: 4, height: '100%', borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <program.icon sx={{ fontSize: 40, color: theme.palette.secondary.main, mb: 2 }} />
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {program.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      {program.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* BUS Movement Section */}
          <Card sx={{ p: { xs: 4, md: 6 }, mb: { xs: 4, md: 8 }, borderRadius: 3, bgcolor: theme.palette.primary.main, color: theme.palette.secondary.main }} data-aos="zoom-in">
            <Box sx={{ maxWidth: '800px', mx: 'auto', textAlign: 'center' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <FlagIcon sx={{ fontSize: { xs: 36, md: 48 }, color: theme.palette.secondary.main }} />
              </Box>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}>
                The BUS Political Movement
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.8 }}>
                BUS represents a grassroots political movement dedicated to bringing real representation and meaningful change to the people of Kenya. Founded on principles of inclusivity, transparency, and servant leadership, BUS connects directly with communities to understand their needs and aspirations.
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Through BUS, we're building a new model of political engagement that prioritizes people over politics, solutions over rhetoric, and sustainable development over short-term gains.
              </Typography>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<LaunchIcon />}
                  href="https://dep-party.com/"
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
                  Visit DEP Party Website
                </Button>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Card sx={{ p: 3, bgcolor: theme.palette.secondary.main + '15', borderRadius: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.secondary.main, mb: 1 }}>People</Typography>
                    <Typography variant="body2">Community-Centered</Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card sx={{ p: 3, bgcolor: theme.palette.secondary.main + '15', borderRadius: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.secondary.main, mb: 1 }}>Progress</Typography>
                    <Typography variant="body2">Development-Focused</Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Card sx={{ p: 3, bgcolor: theme.palette.secondary.main + '15', borderRadius: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.secondary.main, mb: 1 }}>Unity</Typography>
                    <Typography variant="body2">Building Together</Typography>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Card>

          {/* Community Impact */}
          <Box sx={{ mb: { xs: 4, md: 8 } }}>
            <Typography variant="h3" sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }} data-aos="fade-up">
              Community Impact Areas
            </Typography>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              <Grid item xs={12} md={6} data-aos="fade-right">
                <Stack spacing={3}>
                  <Card sx={{ p: 4, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <SchoolIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Education Support
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Scholarships, school infrastructure improvements, and educational resource provision for underserved communities
                    </Typography>
                  </Card>
                  <Card sx={{ p: 4, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <VolunteerActivismIcon sx={{ fontSize: 24, color: theme.palette.secondary.main }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Healthcare Initiatives
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Medical camps, health awareness programs, and support for local health facilities
                    </Typography>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6} data-aos="fade-left">
                <Stack spacing={3}>
                  <Card sx={{ p: 4, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <LightbulbIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Economic Empowerment
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Skills training, microfinance support, and entrepreneurship programs for community members
                    </Typography>
                  </Card>
                  <Card sx={{ p: 4, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <PeopleIcon sx={{ fontSize: 24, color: theme.palette.primary.main }} />
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Social Welfare
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Support for vulnerable groups, disaster relief, and community infrastructure development
                    </Typography>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          {/* Call to Action */}
          <Box sx={{ textAlign: 'center' }} data-aos="fade-up">
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 'bold', fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
              Join Our Mission
            </Typography>
            <Typography variant="h6" sx={{ color: theme.palette.text.secondary, maxWidth: '800px', mx: 'auto', fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Whether through volunteering, partnerships, or community participation, there are many ways to contribute to positive change
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Outreach;

