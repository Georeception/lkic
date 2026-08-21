import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Card, Stack, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSearchParams } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { trackEvent } from '../utils/analytics';
import { siteConfig } from '../data/siteContent';

const Contact = () => {
  const theme = useTheme();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: searchParams.get('subject') || '',
    message: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    trackEvent('contact_email_opened', { enquiry_subject: formData.subject });
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : null,
      '',
      formData.message,
    ].filter(Boolean).join('\n');

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Box sx={{ pt: { xs: 12, md: 15 }, pb: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {/* Hero Section */}
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }} data-aos="fade-up">
            <Typography
              variant="h2"
              component="h1"
              sx={{
                mb: 3,
                fontWeight: 'bold',
                color: theme.palette.secondary.main,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Get In <Box component="span" sx={{ color: theme.palette.primary.main }}>Touch</Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.5rem' },
              }}
            >
              Have questions about our programs or interested in collaboration? We'd love to hear from you.
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            {/* Contact Form */}
            <Grid item xs={12} md={6} data-aos="fade-right">
              <Card sx={{ p: { xs: 2.5, sm: 3, md: 4 }, borderRadius: 3 }}>
                <Typography variant="h4" sx={{ mb: { xs: 3, md: 4 }, fontWeight: 'bold', fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}>
                  Send Us a Message
                </Typography>
                <Typography variant="body2" sx={{ mb: 3, color: theme.palette.text.secondary }}>
                  Completing this form opens your email application with the message addressed to LKIC. You can review it before sending.
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={{ xs: 2.5, md: 3 }}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={{ xs: 4, sm: 5 }}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        color: theme.palette.secondary.main,
                        fontWeight: 600,
                        py: { xs: 1.25, md: 1.5 },
                        fontSize: { xs: '0.875rem', md: '1rem' },
                      }}
                    >
                      Open Email to Send
                    </Button>
                  </Stack>
                </form>
              </Card>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} md={6} data-aos="fade-left">
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ mb: { xs: 3, md: 4 }, fontWeight: 'bold', fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' } }}>
                  Contact Information
                </Typography>
                <Stack spacing={{ xs: 2.5, md: 3 }}>
                  <Card sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          width: { xs: 40, md: 48 },
                          height: { xs: 40, md: 48 },
                          borderRadius: '50%',
                          bgcolor: theme.palette.primary.main + '15',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <LocationOnIcon sx={{ color: theme.palette.primary.main, fontSize: { xs: 20, md: 24 } }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                          Address
                        </Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.85rem', md: '0.875rem' } }}>
                          Geomaps Center, Upperhill, Nairobi, Kenya
                        </Typography>
                      </Box>
                    </Stack>
                  </Card>

                  <Card sx={{ p: { xs: 2.5, md: 3 }, borderRadius: 2, bgcolor: theme.palette.background.paper }}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          width: { xs: 40, md: 48 },
                          height: { xs: 40, md: 48 },
                          borderRadius: '50%',
                          bgcolor: theme.palette.primary.main + '15',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <EmailIcon sx={{ color: theme.palette.primary.main, fontSize: { xs: 20, md: 24 } }} />
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                          Email
                        </Typography>
                        <Link href={`mailto:${siteConfig.email}`} underline="hover" sx={{ color: theme.palette.text.secondary, fontSize: { xs: '0.85rem', md: '0.875rem' } }}>
                          {siteConfig.email}
                        </Link>
                      </Box>
                    </Stack>
                  </Card>
                </Stack>
              </Box>

              <Card sx={{ p: { xs: 2.5, sm: 3, md: 4 }, borderRadius: 3, bgcolor: theme.palette.primary.main, color: theme.palette.secondary.main }}>
                <Typography variant="h5" sx={{ mb: { xs: 2.5, md: 3 }, fontWeight: 'bold', fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' } }}>
                  Office Hours
                </Typography>
                <Stack spacing={{ xs: 1.5, md: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                    <Typography sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>Monday - Friday</Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.875rem', md: '1rem' } }}>8:00 AM - 5:00 PM</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                    <Typography sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>Saturday</Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.875rem', md: '1rem' } }}>9:00 AM - 1:00 PM</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                    <Typography sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>Sunday</Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: { xs: '0.875rem', md: '1rem' } }}>Closed</Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
    </Box>
  );
};

export default Contact;
