import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  useTheme,
  IconButton,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const stories = [
  {
    title: 'How Capsule is supporting young men to build thriving businesses',
    image: '/images/story1.jpg',
  },
  {
    title: 'How women innovators in Nairobi are transforming food security, nutrition and climate action',
    image: '/images/story2.jpg',
  },
  {
    title: 'Playing the green game: Nurturing sustainability in the startup ecosystem',
    image: '/images/story3.jpg',
  },
];

const StoryCard = ({ title, image }) => {
  const theme = useTheme();
  
  return (
    <Card 
      sx={{ 
        height: '400px',
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        '&:hover': {
          '& .MuiCardContent-root': {
            transform: 'translateY(0)',
          },
          '& .overlay': {
            opacity: 0.7,
          },
        },
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image={image}
        alt={title}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)',
          opacity: 0.5,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
      <CardContent
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          background: 'transparent',
          padding: '2rem',
          transform: 'translateY(20px)',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            color: 'white',
            fontWeight: 600,
            mb: 2,
          }}
        >
          {title}
        </Typography>
        <IconButton
          sx={{
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.secondary.main,
            border: '1px solid rgba(255, 215, 0, 0.55)',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.25)',
            '&:hover': {
              backgroundColor: '#171717',
              transform: 'scale(1.1)',
            },
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

const StoriesOfImpact = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 6,
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            textAlign: 'left',
          }}
        >
          Stories of impact and innovation
        </Typography>

        <Grid container spacing={3}>
          {stories.map((story, index) => (
            <Grid item xs={12} md={4} key={index}>
              <StoryCard {...story} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StoriesOfImpact;
