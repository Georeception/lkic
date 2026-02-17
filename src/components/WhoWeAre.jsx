import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '12px',
});

const ImageWrapper = styled(Box)({
  overflow: 'hidden',
  borderRadius: '12px',
  position: 'relative',
});

const WhoWeAre = () => {
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
        py: { xs: 6, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
          {/* Text Content */}
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 4,
                color: theme.palette.secondary.main,
                fontWeight: 'bold',
              }}
            >
              Who we are
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: theme.palette.text.secondary,
                fontSize: '1.2rem',
                lineHeight: 1.8,
              }}
            >
              Lenny Kivuti Innovation and Research Centre (LKIC) was established as a legacy program 
              to empower Kenya's youth and innovative minds. Founded by Hon. Lenny Kivuti, a 
              distinguished political leader who served as Senator for Embu County and Member of 
              Parliament, LKIC embodies a commitment to transforming lives through innovation and opportunity.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: theme.palette.text.secondary,
                fontSize: '1.2rem',
                lineHeight: 1.8,
              }}
            >
              Drawing from years of public service and deep understanding of Kenya's needs, LKIC 
              operates across five integrated divisions: Research & Development, Real Estate, ICT 
              Solutions, Agriventures, and Outreach Programs. Each division works synergistically 
              to create sustainable impact and drive progress.
            </Typography>
            <Button
              component={Link}
              to="/about"
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                mt: 2,
                borderWidth: '2px',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  borderWidth: '2px',
                  backgroundColor: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
                  color: theme.palette.background.default,
                },
              }}
            >
              More about us
            </Button>
          </Grid>

          {/* Image Grid */}
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Grid container spacing={2}>
              {/* Left Column */}
              <Grid item xs={12} sm={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <ImageWrapper sx={{ height: { xs: '200px', sm: '280px' } }}>
                      <StyledImage
                        src="/images/book.jpg"
                        alt="Innovation center main"
                      />
                    </ImageWrapper>
                  </Grid>
                  <Grid item xs={12}>
                    <ImageWrapper sx={{ height: { xs: '140px', sm: '160px' } }}>
                      <StyledImage
                        src="/images/hands.png"
                        alt="Innovation center activities"
                      />
                    </ImageWrapper>
                  </Grid>
                </Grid>
              </Grid>
              {/* Right Column */}
              <Grid item xs={12} sm={4}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={12}>
                    <ImageWrapper sx={{ height: { xs: '160px', sm: '200px' } }}>
                      <StyledImage
                        src="/images/innovation.jpg"
                        alt="Team collaboration"
                      />
                    </ImageWrapper>
                  </Grid>
                  <Grid item xs={6} sm={12}>
                    <ImageWrapper sx={{ height: { xs: '160px', sm: '240px' } }}>
                      <StyledImage
                        src="/images/track.jpg"
                        alt="Innovation workspace"
                      />
                    </ImageWrapper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhoWeAre; 