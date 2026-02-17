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
  '/images/partner2.jfif',
  '/images/partner3.png',
  '/images/partner4.jfif',
  '/images/partner5.png',
  '/images/partner6.png',
  '/images/partner7.jfif',
  '/images/partner8.png',
  '/images/karlo.png',
  '/images/kemri.jfif'
];

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
          width: 'fit-content',
          animation: `${scrollLeft} 30s linear infinite`,
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
      >
        {/* First set of logos */}
        {partners.map((partner, index) => (
          <Box
            key={`first-${index}`}
            sx={{
              mx: { xs: 2, md: 4 },
              height: { xs: '60px', md: '100px' },
              display: 'flex',
              alignItems: 'center',
              //filter: 'grayscale(1)',
              //opacity: 0.7,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                filter: 'grayscale(0)',
                opacity: 1,
              },
            }}
          >
            <img
              src={partner}
              alt={`Partner ${index + 1}`}
              style={{
                height: '100%',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        ))}
        
        {/* Duplicate set for seamless scrolling */}
        {partners.map((partner, index) => (
          <Box
            key={`second-${index}`}
            sx={{
              mx: { xs: 2, md: 4 },
              height: { xs: '60px', md: '100px' },
              display: 'flex',
              alignItems: 'center',
              //filter: 'grayscale(1)',
              //opacity: 0.7,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                filter: 'grayscale(0)',
                opacity: 1,
              },
            }}
          >
            <img
              src={partner}
              alt={`Partner ${index + 1}`}
              style={{
                height: '100%',
                width: 'auto',
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