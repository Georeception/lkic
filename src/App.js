import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Research from './pages/Research';
import RealEstate from './pages/RealEstate';
import PropertyDetail from './pages/PropertyDetail';
import ICT from './pages/ICT';
import Agriventures from './pages/Agriventures';
import Outreach from './pages/Outreach';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <ScrollToTop />
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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
