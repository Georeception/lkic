import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link as MuiLink,
  Stack,
  Divider,
  useTheme,
  Card,
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
  Phone,
  Email,
  LocationOn,
  ArrowUpward,
} from '@mui/icons-material';

const footerLinks = {
  company: [
    { title: 'About Us', url: '/about' },
    { title: 'Research & Development', url: '/research' },
    { title: 'Real Estate', url: '/real-estate' },
    { title: 'ICT Solutions', url: '/ict' },
  ],
  divisions: [
    { title: 'Agriventures', url: '/agriventures' },
    { title: 'Outreach Programs', url: '/outreach' },
    { title: 'Geomaps', url: '/ict' },
  ],
  resources: [
    { title: 'Contact Us', url: '/contact' },
    { title: 'Careers', url: '/contact' },
    { title: 'Partners', url: '/about' },
  ],
};

const socialLinks = [
  { icon: Facebook, url: '#', color: '#1877F2' },
  { icon: Twitter, url: '#', color: '#1DA1F2' },
  { icon: LinkedIn, url: '#', color: '#0A66C2' },
  { icon: Instagram, url: '#', color: '#E4405F' },
  { icon: YouTube, url: '#', color: '#FF0000' },
];

const Footer = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        bgcolor: 'black',
        position: 'relative',
        borderTop: '3px solid',
        borderColor: theme.palette.primary.main,
      }}
    >
      {/* Back to Top Button */}
      <IconButton
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
          '&:hover': {
            bgcolor: theme.palette.primary.dark,
            transform: 'translateY(-5px)',
            boxShadow: '0 6px 20px rgba(255, 215, 0, 0.4)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <ArrowUpward />
      </IconButton>

      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 }, pt: { xs: 5, sm: 6, md: 8 }, pb: { xs: 2, md: 3 } }}>
        <Grid container spacing={{ xs: 4, sm: 6, md: 6 }}>
          {/* Logo & Description */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src="/images/logo.png"
              alt="LKIC Logo"
              sx={{ 
                height: { xs: 50, sm: 60, md: 70 }, 
                mb: { xs: 2, md: 3 },
                cursor: 'pointer',
              }}
              onClick={scrollToTop}
            />
            <Typography
              variant="body1"
              sx={{ 
                mb: { xs: 2, md: 3 },
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: { xs: '0.875rem', md: '0.95rem' },
                lineHeight: 1.7,
              }}
            >
              Pioneering Kenya's future through innovation, technology, and sustainable development across five integrated divisions.
            </Typography>
          </Grid>

          {/* Links Sections */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={{ xs: 3, sm: 3, md: 4 }}>
              {/* Company */}
              <Grid item xs={6} sm={4}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: theme.palette.primary.main, 
                    mb: { xs: 2, md: 2.5 },
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    fontWeight: 700,
                    letterSpacing: 0.5,
                  }} 
                >
                  Company
                </Typography>
                <Stack spacing={{ xs: 1, md: 1.25 }}>
                  {footerLinks.company.map((link, index) => (
                    <Link
                      key={index}
                      to={link.url}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                      sx={{
                          color: 'rgba(255, 255, 255, 0.75)',
                          transition: 'all 0.2s',
                          fontSize: { xs: '0.8rem', md: '0.9rem' },
                          cursor: 'pointer',
                        '&:hover': { 
                          color: theme.palette.primary.main,
                            paddingLeft: '8px',
                        },
                      }}
                    >
                      {link.title}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Grid>

              {/* Divisions */}
              <Grid item xs={6} sm={4}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: theme.palette.primary.main, 
                    mb: { xs: 2, md: 2.5 },
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    fontWeight: 700,
                    letterSpacing: 0.5,
                  }}
                >
                  Divisions
                </Typography>
                <Stack spacing={{ xs: 1, md: 1.25 }}>
                  {footerLinks.divisions.map((link, index) => (
                    <Link
                      key={index}
                      to={link.url}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        sx={{
                          color: 'rgba(255, 255, 255, 0.75)',
                          transition: 'all 0.2s',
                          fontSize: { xs: '0.8rem', md: '0.9rem' },
                          cursor: 'pointer',
                          '&:hover': { 
                            color: theme.palette.primary.main,
                            paddingLeft: '8px',
                          },
                        }}
                      >
                        {link.title}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Grid>

              {/* Resources */}
              <Grid item xs={12} sm={4}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: theme.palette.primary.main, 
                    mb: { xs: 2, md: 2.5 },
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    fontWeight: 700,
                    letterSpacing: 0.5,
                  }}
                >
                  Resources
                </Typography>
                <Stack spacing={{ xs: 1, md: 1.25 }}>
                  {footerLinks.resources.map((link, index) => (
                    <Link
                      key={index}
                      to={link.url}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                      sx={{
                          color: 'rgba(255, 255, 255, 0.75)',
                          transition: 'all 0.2s',
                          fontSize: { xs: '0.8rem', md: '0.9rem' },
                          cursor: 'pointer',
                        '&:hover': { 
                          color: theme.palette.primary.main,
                            paddingLeft: '8px',
                        },
                      }}
                    >
                      {link.title}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          {/* Contact Information & Social Media */}
          <Grid item xs={12}>
            <Divider sx={{ my: { xs: 3, md: 4 }, borderColor: 'rgba(255, 215, 0, 0.2)' }} />
            
            {/* Contact Details */}
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mb: { xs: 3, md: 4 } }}>
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ 
                  p: { xs: 2, md: 2.5 }, 
                  bgcolor: 'rgba(255, 255, 255, 0.03)', 
                  borderRadius: 2,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: 'rgba(255, 215, 0, 0.05)',
                    borderColor: 'rgba(255, 215, 0, 0.3)',
                  },
                }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ 
                      bgcolor: 'rgba(255, 215, 0, 0.1)', 
                      p: 1.5, 
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <LocationOn sx={{ color: theme.palette.primary.main, fontSize: { xs: 20, md: 24 } }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: { xs: '0.7rem', md: '0.75rem' } }}>
                        Location
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500, fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
                    Geomaps Center, Upperhill, Nairobi, Kenya
                  </Typography>
                    </Box>
                </Stack>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ 
                  p: { xs: 2, md: 2.5 }, 
                  bgcolor: 'rgba(255, 255, 255, 0.03)', 
                  borderRadius: 2,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: 'rgba(255, 215, 0, 0.05)',
                    borderColor: 'rgba(255, 215, 0, 0.3)',
                  },
                }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ 
                      bgcolor: 'rgba(255, 215, 0, 0.1)', 
                      p: 1.5, 
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Phone sx={{ color: theme.palette.primary.main, fontSize: { xs: 20, md: 24 } }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: { xs: '0.7rem', md: '0.75rem' } }}>
                        Call Us
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500, fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
                    +254 XXX XXX XXX
                  </Typography>
                    </Box>
                </Stack>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={12} md={4}>
                <Card sx={{ 
                  p: { xs: 2, md: 2.5 }, 
                  bgcolor: 'rgba(255, 255, 255, 0.03)', 
                  borderRadius: 2,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: 'rgba(255, 215, 0, 0.05)',
                    borderColor: 'rgba(255, 215, 0, 0.3)',
                  },
                }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ 
                      bgcolor: 'rgba(255, 215, 0, 0.1)', 
                      p: 1.5, 
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Email sx={{ color: theme.palette.primary.main, fontSize: { xs: 20, md: 24 } }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: { xs: '0.7rem', md: '0.75rem' } }}>
                        Email Us
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500, fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
                    info@lkic.africa
                  </Typography>
                    </Box>
                </Stack>
                </Card>
              </Grid>
            </Grid>

            {/* Social Media Section */}
            <Box sx={{ 
              textAlign: 'center', 
              py: { xs: 3, md: 4 },
              px: { xs: 2, md: 4 },
              bgcolor: 'rgba(255, 215, 0, 0.03)',
              borderRadius: 3,
              border: '1px solid rgba(255, 215, 0, 0.1)',
            }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: theme.palette.primary.main, 
                  mb: 2.5,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 700,
                }}
              >
                Connect With Us
              </Typography>
              <Stack 
                direction="row" 
                spacing={{ xs: 1, md: 1.5 }} 
                sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}
              >
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    component={MuiLink}
                    href={social.url}
                    target="_blank"
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      color: 'rgba(255, 255, 255, 0.7)',
                      width: { xs: 40, md: 48 },
                      height: { xs: 40, md: 48 },
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        bgcolor: social.color,
                        color: 'white',
                        transform: 'translateY(-5px)',
                        boxShadow: `0 8px 20px ${social.color}40`,
                        borderColor: social.color,
                      },
                    }}
                  >
                    <social.icon sx={{ fontSize: { xs: 20, md: 24 } }} />
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Copyright & Legal */}
          <Grid item xs={12}>
            <Divider sx={{ my: { xs: 3, md: 4 }, borderColor: 'rgba(255, 215, 0, 0.2)' }} />
            <Grid container justifyContent="space-between" alignItems="center" spacing={{ xs: 2, md: 0 }}>
              <Grid item xs={12} md={6}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.6)', 
                    fontSize: { xs: '0.75rem', md: '0.85rem' },
                    textAlign: { xs: 'center', md: 'left' },
                    lineHeight: 1.6,
                  }}
                >
                  © {new Date().getFullYear()} <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>Lenny Kivuti Innovation Centre</Box>
                  <br />
                  All rights reserved. Pioneering Kenya's future.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack 
                  direction="row" 
                  spacing={{ xs: 2, md: 3 }} 
                  sx={{ justifyContent: { xs: 'center', md: 'flex-end' }, flexWrap: 'wrap', gap: { xs: 1, md: 0 } }}
                >
                  <MuiLink
                    href="#"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      fontSize: { xs: '0.75rem', md: '0.85rem' },
                      '&:hover': { 
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    Privacy Policy
                  </MuiLink>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.3)', display: { xs: 'none', sm: 'block' } }}>•</Typography>
                  <MuiLink
                    href="#"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      fontSize: { xs: '0.75rem', md: '0.85rem' },
                      '&:hover': { 
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    Terms of Service
                  </MuiLink>
                  <Typography sx={{ color: 'rgba(255, 255, 255, 0.3)', display: { xs: 'none', sm: 'block' } }}>•</Typography>
                  <MuiLink
                    href="#"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      fontSize: { xs: '0.75rem', md: '0.85rem' },
                      '&:hover': { 
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    Cookie Policy
                  </MuiLink>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer; 