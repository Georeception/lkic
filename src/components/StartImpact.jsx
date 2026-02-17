import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.dark,
  borderRadius: '24px',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)',
    zIndex: 1,
  },
}));

const StartImpact = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <StyledBox>
          <Grid 
            container 
            spacing={0}
            sx={{ 
              position: 'relative',
              zIndex: 2,
              py: { xs: 6, md: 8 },
              px: { xs: 3, md: 6 },
            }}
          >
            <Grid item xs={12} md={7}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  mb: 3,
                }}
              >
                Start Making Impact Today
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                Join our community of innovators and entrepreneurs. Together, we can 
                create solutions that drive positive change in our society.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    color: 'secondary.main',
                    fontWeight: 600,
                    px: 4,
                    '&:hover': {
                      backgroundColor: 'primary.light',
                    },
                  }}
                >
                  Join Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    borderWidth: '2px',
                    px: 4,
                    '&:hover': {
                      borderColor: 'primary.main',
                      borderWidth: '2px',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={5}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: { xs: 4, md: 0 },
              }}
            >
              <Box
                component="img"
                src="/images/impact.jpg"
                alt="Impact illustration"
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                }}
              />
            </Grid>
          </Grid>
        </StyledBox>
      </Container>
    </Box>
  );
};

export default StartImpact; 