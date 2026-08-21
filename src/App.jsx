import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, CircularProgress } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import SiteLayout from './components/SiteLayout';
import RouteEnhancements from './components/RouteEnhancements';
import ErrorBoundary from './components/ErrorBoundary';

const Index = lazy(() => import('./pages/Index'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Research = lazy(() => import('./pages/Research'));
const RealEstate = lazy(() => import('./pages/RealEstate'));
const PropertyDetail = lazy(() => import('./pages/PropertyDetail'));
const ICT = lazy(() => import('./pages/ICT'));
const Agriventures = lazy(() => import('./pages/Agriventures'));
const Outreach = lazy(() => import('./pages/Outreach'));
const NotFound = lazy(() => import('./pages/NotFound'));

const RouteLoading = () => (
  <Box role="status" aria-live="polite" sx={{ minHeight: '50vh', display: 'grid', placeItems: 'center' }}>
    <CircularProgress aria-label="Loading page" />
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTopOnRouteChange />
          <ScrollToTop />
          <RouteEnhancements />
          <SiteLayout>
            <Suspense fallback={<RouteLoading />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/research" element={<Research />} />
                <Route path="/real-estate" element={<RealEstate />} />
                <Route path="/real-estate/:id" element={<PropertyDetail />} />
                <Route path="/ict" element={<ICT />} />
                <Route path="/agriventures" element={<Agriventures />} />
                <Route path="/outreach" element={<Outreach />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </SiteLayout>
        </BrowserRouter>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
