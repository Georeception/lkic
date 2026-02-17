import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Research', path: '/research' },
  { name: 'Real Estate', path: '/real-estate' },
  { name: 'ICT', path: '/ict' },
  { name: 'Agriventures', path: '/agriventures' },
  { name: 'Outreach', path: '/outreach' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(0, 0, 0, 0.85)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        py: { xs: 0.5, md: 1 },
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 1.5, sm: 2, md: 3 } }}>
        <Toolbar disableGutters sx={{ minHeight: { xs: '56px', sm: '64px', md: '70px' } }}>
          {/* Logo for desktop */}
          <Box
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              textDecoration: 'none',
              overflow: 'hidden',
            }}
          >
            <img 
              src="/images/logo.png" 
              alt="LKIC Logo" 
              style={{ 
                height: '80px',
                width: 'auto',
                objectFit: 'contain',
              }} 
            />
          </Box>

          {/* Mobile menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: 'white',
                p: { xs: 1, sm: 1.5 },
              }}
            >
              <MenuIcon sx={{ fontSize: { xs: 28, sm: 32 } }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  bgcolor: 'background.paper',
                  mt: 1.5,
                  minWidth: '200px',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    py: 1.5,
                    px: 3,
                    color: location.pathname === page.path ? theme.palette.primary.main : theme.palette.text.primary,
                    bgcolor: location.pathname === page.path ? theme.palette.primary.main + '10' : 'transparent',
                    fontWeight: location.pathname === page.path ? 600 : 400,
                    '&:hover': {
                      bgcolor: theme.palette.primary.main + '15',
                    },
                  }}
                >
                  <Typography 
                    sx={{ 
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                      fontWeight: location.pathname === page.path ? 600 : 400,
                    }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              justifyContent: 'center',
              textDecoration: 'none',
              mr: { xs: 5, sm: 6 },
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <img 
              src="/images/logo.png" 
              alt="LKIC Logo" 
              style={{ 
                height: '75px',
                width: 'auto',
                objectFit: 'contain',
              }} 
            />
          </Box>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.path}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 1.5,
                  mx: { md: 0.5, lg: 1 },
                  px: { md: 1.5, lg: 2 },
                  color: 'white',
                  display: 'block',
                  fontSize: { md: '0.875rem', lg: '0.95rem' },
                  fontWeight: location.pathname === page.path ? 600 : 400,
                  borderBottom: location.pathname === page.path ? `2px solid ${theme.palette.primary.main}` : 'none',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 