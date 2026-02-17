import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const VideoBackground = styled('video')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0,
});

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.dark,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.5)',
    zIndex: 1,
  },
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  px: { xs: 2, sm: 3, md: 4 },
}));

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <HeroSection>
      <VideoBackground autoPlay muted loop playsInline>
        <source src="/images/video.mp4" type="video/mp4" />
      </VideoBackground>
      <ContentWrapper maxWidth="lg">
        <Typography
          variant="h1"
          component="h1"
          sx={{
            mb: 3,
            fontWeight: 700,
            color: 'text.light',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            '& span': {
              color: 'primary.main',
            },
          }}
        >
          <Box component="span">
            <span>Lenny Kivuti</span> Innovation
          </Box>
          <br />
          Centre
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mb: { xs: 4, md: 6 },
            color: 'text.light',
            maxWidth: '800px',
            mx: 'auto',
            opacity: 0.9,
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            px: { xs: 2, md: 0 },
          }}
        >
          A legacy program empowering youth and innovative minds to shape Kenya's future through exponential technologies
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, md: 3 }}
          justifyContent="center"
          sx={{ px: { xs: 2, md: 0 } }}
        >
          <Button
            component={Link}
            to="/about"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              color: 'secondary.main',
              fontWeight: 600,
              fontSize: { xs: '0.875rem', md: '1rem' },
              py: { xs: 1.25, md: 1.5 },
              '&:hover': {
                backgroundColor: 'primary.light',
              },
            }}
          >
            Discover Our Vision
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              borderWidth: '2px',
              fontWeight: 600,
              color: 'text.light',
              fontSize: { xs: '0.875rem', md: '1rem' },
              py: { xs: 1.25, md: 1.5 },
              '&:hover': {
                borderWidth: '2px',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                borderColor: 'primary.main',
              },
            }}
          >
            Get In Touch
          </Button>
        </Stack>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero; 