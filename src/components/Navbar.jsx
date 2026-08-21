import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { Close, KeyboardArrowDown, Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../data/siteContent';

const { primary: primaryPages, divisions } = navigation;

const Navbar = () => {
  const [mobileAnchor, setMobileAnchor] = useState(null);
  const [divisionAnchor, setDivisionAnchor] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => (
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)
  );
  const divisionIsActive = divisions.some(({ path }) => isActive(path));
  const closeMenus = () => {
    setMobileAnchor(null);
    setDivisionAnchor(null);
  };

  const navButtonStyles = (active) => ({
    position: 'relative',
    mx: 0.25,
    px: 1.75,
    pb: 1.25,
    color: 'white',
    fontSize: '0.925rem',
    fontWeight: active ? 700 : 500,
    borderRadius: 2,
    whiteSpace: 'nowrap',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '12%',
      right: '12%',
      bottom: 1,
      height: 18,
      pointerEvents: 'none',
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      borderRadius: '0 0 50% 50%',
      opacity: active ? 1 : 0,
      transform: active ? 'scaleX(1)' : 'scaleX(0.45)',
      transformOrigin: 'center',
      filter: active ? 'drop-shadow(0 2px 3px rgba(255, 215, 0, 0.35))' : 'none',
      transition: 'opacity 0.22s ease, transform 0.22s ease',
    },
    '&:hover': { color: theme.palette.primary.main, bgcolor: 'rgba(255, 255, 255, 0.06)' },
  });

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        left: 0,
        right: 0,
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'clip',
        bgcolor: scrolled ? 'rgba(0, 0, 0, 0.96)' : 'rgba(0, 0, 0, 0.82)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: scrolled ? '0 8px 24px rgba(0, 0, 0, 0.24)' : 'none',
        transition: 'background-color 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      <Container maxWidth="xl" sx={{ width: '100%', minWidth: 0, px: { xs: 1.5, sm: 2, md: 4 } }}>
        <Toolbar disableGutters sx={{ width: '100%', minHeight: { xs: 64, md: scrolled ? 72 : 82 }, transition: 'min-height 0.25s ease' }}>
          <Box
            component={Link}
            to="/"
            aria-label="LKIC home"
            onClick={closeMenus}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: { xs: 1, md: 0 },
              minWidth: 0,
              overflow: 'hidden',
              pr: { xs: 1, md: 0 },
              mr: { md: 5 },
            }}
          >
            <Box
              component="img"
              src="/images/logo.png"
              alt="Lenny Kivuti Innovation Centre"
              sx={{
                display: 'block',
                height: { xs: 50, sm: 54, md: scrolled ? 58 : 66 },
                width: 'auto',
                maxWidth: { xs: 'calc(100vw - 108px)', md: 'none' },
                objectFit: 'contain',
              }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexGrow: 1,
              ml: 'auto',
              mr: 2,
            }}
          >
            {primaryPages.map((page) => (
              <Button key={page.path} component={Link} to={page.path} sx={navButtonStyles(isActive(page.path))}>
                {page.name}
              </Button>
            ))}
            <Button
              aria-controls={divisionAnchor ? 'division-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={divisionAnchor ? 'true' : undefined}
              endIcon={(
                <KeyboardArrowDown
                  sx={{
                    transition: 'transform 0.2s ease',
                    transform: divisionAnchor ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              )}
              onClick={(event) => setDivisionAnchor(event.currentTarget)}
              sx={navButtonStyles(divisionIsActive)}
            >
              What We Do
            </Button>
            <Menu
              id="division-menu"
              anchorEl={divisionAnchor}
              open={Boolean(divisionAnchor)}
              onClose={() => setDivisionAnchor(null)}
              MenuListProps={{
                'aria-label': 'LKIC divisions',
                sx: { p: 1 },
              }}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    mt: 1.25,
                    minWidth: 290,
                    overflow: 'hidden',
                    color: 'white',
                    bgcolor: 'rgba(10, 10, 10, 0.97)',
                    backgroundImage: 'linear-gradient(145deg, rgba(255, 215, 0, 0.08), rgba(255, 255, 255, 0.015) 45%)',
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                    borderTop: '3px solid',
                    borderTopColor: 'primary.main',
                    borderRadius: 3,
                    boxShadow: '0 20px 48px rgba(0, 0, 0, 0.42)',
                    backdropFilter: 'blur(18px)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      right: 24,
                      width: 52,
                      height: 2,
                      bgcolor: 'primary.main',
                      boxShadow: '0 0 18px rgba(255, 215, 0, 0.85)',
                    },
                  },
                },
              }}
            >
              {divisions.map((division, index) => (
                <MenuItem
                  key={division.path}
                  component={Link}
                  to={division.path}
                  selected={isActive(division.path)}
                  onClick={closeMenus}
                  sx={{
                    position: 'relative',
                    gap: 1.5,
                    minHeight: 50,
                    px: 2,
                    py: 1.25,
                    mb: index === divisions.length - 1 ? 0 : 0.35,
                    borderRadius: 2,
                    fontSize: '0.95rem',
                    fontWeight: isActive(division.path) ? 700 : 500,
                    color: isActive(division.path) ? 'primary.main' : 'rgba(255, 255, 255, 0.9)',
                    transition: 'color 0.18s ease, background-color 0.18s ease, transform 0.18s ease',
                    '&::before': {
                      content: '""',
                      width: 5,
                      height: 5,
                      flexShrink: 0,
                      borderRadius: '50%',
                      bgcolor: isActive(division.path) ? 'primary.main' : 'rgba(255, 215, 0, 0.45)',
                      boxShadow: isActive(division.path) ? '0 0 10px rgba(255, 215, 0, 0.8)' : 'none',
                    },
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'rgba(255, 215, 0, 0.1)',
                      transform: 'translateX(4px)',
                    },
                    '&.Mui-selected': {
                      color: 'primary.main',
                      bgcolor: 'rgba(255, 215, 0, 0.12)',
                    },
                    '&.Mui-selected:hover': {
                      bgcolor: 'rgba(255, 215, 0, 0.16)',
                    },
                  }}
                >
                  {division.name}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Button
            component={Link}
            to="/contact"
            variant="contained"
            onClick={closeMenus}
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              px: 2.5,
              py: 1,
              color: 'black',
              fontSize: '0.9rem',
              fontWeight: 700,
            }}
          >
            Contact Us
          </Button>

          <IconButton
            aria-label={mobileAnchor ? 'Close navigation' : 'Open navigation'}
            aria-controls={mobileAnchor ? 'mobile-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={mobileAnchor ? 'true' : undefined}
            onClick={(event) => setMobileAnchor((current) => (current ? null : event.currentTarget))}
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              flexShrink: 0,
              width: 44,
              height: 44,
              ml: 1,
              bgcolor: 'primary.main',
              color: 'secondary.main',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
              '&:hover': { bgcolor: 'primary.light' },
              '&:focus-visible': { outline: '3px solid white', outlineOffset: 2 },
            }}
          >
            {mobileAnchor ? <Close sx={{ fontSize: 28 }} /> : <MenuIcon sx={{ fontSize: 28 }} />}
          </IconButton>
          <Menu
            id="mobile-menu"
            anchorEl={mobileAnchor}
            open={Boolean(mobileAnchor)}
            onClose={() => setMobileAnchor(null)}
            slotProps={{ paper: { sx: { mt: 1.5, width: 'min(320px, calc(100vw - 32px))', borderRadius: 2 } } }}
          >
            {primaryPages.map((page) => (
              <MenuItem key={page.path} component={Link} to={page.path} selected={isActive(page.path)} onClick={closeMenus}>
                {page.name}
              </MenuItem>
            ))}
            <Divider />
            <Typography variant="overline" sx={{ display: 'block', px: 2, pt: 1, color: 'text.secondary', fontWeight: 700 }}>
              What We Do
            </Typography>
            {divisions.map((division) => (
              <MenuItem
                key={division.path}
                component={Link}
                to={division.path}
                selected={isActive(division.path)}
                onClick={closeMenus}
                sx={{ pl: 3 }}
              >
                {division.name}
              </MenuItem>
            ))}
            <Divider />
            <MenuItem component={Link} to="/contact" selected={isActive('/contact')} onClick={closeMenus}>
              Contact Us
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
