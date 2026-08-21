import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
} from '@mui/material';
import { keyframes } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css';

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const partners = [
  '/images/partner1.png',
  '/images/partner2.jpg',
  '/images/partner3.png',
  '/images/partner4.jpg',
  '/images/partner5.png',
  '/images/partner6.png',
  '/images/partner7.jpg',
  '/images/partner8.png',
  '/images/kemri.jpg',
];

const partnerLoop = [...partners, ...partners];

const Partners = () => {
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
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ mb: { xs: 4, md: 6 }, px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 2,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
          data-aos="fade-up"
        >
          Our Partners
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.text.secondary,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            mb: { xs: 4, md: 8 },
            fontSize: { xs: '1rem', md: '1.5rem' },
            px: { xs: 2, md: 0 },
          }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We collaborate with leading organizations to create meaningful impact
        </Typography>
      </Container>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'max-content',
          animation: `${scrollLeft} 30s linear infinite`,
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
      >
        {partnerLoop.map((partner, index) => (
          <Box
            key={`${partner}-${index}`}
            sx={{
              mx: { xs: 2, md: 4 },
              width: { xs: 132, sm: 150, md: 180 },
              height: { xs: 76, md: 104 },
              flex: '0 0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: { xs: 1, md: 1.5 },
              bgcolor: 'rgba(255, 255, 255, 0.96)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: 2.5,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.14)',
              },
            }}
          >
            <img
              src={partner}
              alt={`Partner ${index + 1}`}
              loading="eager"
              decoding="async"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Partners;
