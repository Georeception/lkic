import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Stack,
  useTheme,
} from '@mui/material';
import { CalendarToday, AccessTime, LocationOn } from '@mui/icons-material';

const events = [
  {
    title: "Tech Innovation Summit 2024",
    date: "March 25, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "LKIC Main Auditorium, Nairobi",
    image: "/images/tech.jpg",
    description: "Join us for a day of inspiring talks, workshops, and networking with industry leaders in technology and innovation.",
  },
  {
    title: "Startup Pitch Competition",
    date: "April 15, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "LKIC Innovation Hub, Nairobi",
    image: "/images/board.jpg",
    description: "Witness innovative startups pitch their ideas to investors and compete for funding opportunities.",
  },
];

const EventCard = ({ event }) => {
  const theme = useTheme();
  
  return (
    <Card
      sx={{
        maxWidth: 500,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="240"
        image={event.image}
        alt={event.title}
      />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          {event.title}
        </Typography>
        
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          {event.description}
        </Typography>

        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <CalendarToday sx={{ color: theme.palette.primary.main }} />
            <Typography variant="body2">{event.date}</Typography>
          </Stack>
          
          <Stack direction="row" spacing={1} alignItems="center">
            <AccessTime sx={{ color: theme.palette.primary.main }} />
            <Typography variant="body2">{event.time}</Typography>
          </Stack>
          
          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOn sx={{ color: theme.palette.primary.main }} />
            <Typography variant="body2">{event.location}</Typography>
          </Stack>
        </Stack>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 3,
            color: 'secondary.main',
            fontWeight: 600,
            py: 1.5,
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          Register Now
        </Button>
      </CardContent>
    </Card>
  );
};

const FeaturedEvents = () => {
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
          align="center"
          sx={{
            mb: 2,
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
          }}
        >
          Featured Events
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            mb: 8,
            color: theme.palette.text.secondary,
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          Join our upcoming events and be part of the innovation community
        </Typography>

        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
          sx={{ 
            maxWidth: '1100px',
            mx: 'auto',
          }}
        >
          {events.map((event, index) => (
            <Grid item xs={12} md={6} key={index}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedEvents; 