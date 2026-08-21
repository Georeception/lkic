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
import { keyframes, styled } from '@mui/material/styles';

const logoReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(22px) scale(0.94);
    filter: drop-shadow(0 0 0 rgba(255, 215, 0, 0));
  }
  to {
    opacity: 0.94;
    transform: translateY(0) scale(1);
    filter: drop-shadow(0 8px 24px rgba(255, 196, 0, 0.24));
  }
`;

const logoFloat = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
    filter: drop-shadow(0 8px 24px rgba(255, 196, 0, 0.22));
  }
  50% {
    transform: translateY(-7px) scale(1.012);
    filter: drop-shadow(0 12px 34px rgba(255, 215, 0, 0.34));
  }
`;

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
  width: '100%',
  maxWidth: '100%',
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.dark,
  backgroundImage: 'url(/images/hero-poster.webp)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    minHeight: '100svh',
    height: '100svh',
    paddingTop: 82,
    boxSizing: 'border-box',
  },
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
  width: '100%',
  maxWidth: '100%',
  minWidth: 0,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  px: { xs: 2, sm: 3, md: 4 },
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
  },
}));

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <HeroSection>
      {!isMobile && (
        <VideoBackground
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.webp"
          aria-hidden="true"
        >
          <source src="/images/hero-optimized.mp4" type="video/mp4" />
        </VideoBackground>
      )}
      <ContentWrapper maxWidth="lg">
        <Box
          component="h1"
          sx={{
            position: 'relative',
            width: 'min(100%, 650px)',
            mx: 'auto',
            mt: 0,
            mb: { xs: 2.5, md: 2 },
            p: 0,
            lineHeight: 0,
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: '12% 5%',
              zIndex: -1,
              borderRadius: '50%',
              background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 44%, transparent 74%)',
              filter: 'blur(10px)',
            },
          }}
        >
          <Box
            component="img"
            src="/images/hero-logo.png"
            alt="Lenny Kivuti Innovation Centre"
            sx={{
              display: 'block',
              width: { xs: 'min(88vw, 430px)', sm: 'min(62vw, 540px)', md: 'auto' },
              maxWidth: { md: 'min(48vw, 560px)' },
              maxHeight: { md: 'min(36svh, 320px)' },
              height: 'auto',
              objectFit: 'contain',
              mx: 'auto',
              opacity: 0.94,
              transformOrigin: 'center',
              animation: `${logoReveal} 0.9s ease-out both, ${logoFloat} 6s ease-in-out 0.9s infinite`,
            }}
          />
        </Box>

        <Typography
          variant="h5"
          sx={{
            mb: { xs: 4, md: 3 },
            color: 'text.light',
            maxWidth: '800px',
            mx: 'auto',
            opacity: 0.9,
            fontSize: { xs: '1.15rem', sm: '1.5rem', md: 'clamp(2.15rem, 2vw, 1.4rem)' },
            px: { xs: 2, md: 0 },
          }}
        >
          INTERNATIONAL KNOWLEDGE EDGE
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, md: 2 }}
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
