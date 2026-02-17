import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    // Use smooth scroll for manual button click
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={isVisible}>
      <Fab
        onClick={scrollToTop}
        size="medium"
        sx={{
          position: 'fixed',
          bottom: { xs: 16, md: 32 },
          right: { xs: 16, md: 32 },
          zIndex: 1000,
          bgcolor: theme.palette.primary.main,
          color: theme.palette.secondary.main,
          '&:hover': {
            bgcolor: theme.palette.primary.dark,
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease-in-out',
        }}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;

