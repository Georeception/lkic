import { useEffect, useMemo } from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { propertiesData } from '../data/propertiesData';
import { routeMetadata, siteConfig } from '../data/siteContent';
import { trackPageView } from '../utils/analytics';

const setMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
};

const RouteEnhancements = () => {
  const { pathname, search } = useLocation();

  const metadata = useMemo(() => {
    if (pathname.startsWith('/real-estate/')) {
      const propertyId = Number(pathname.split('/').pop());
      const property = propertiesData.find(({ id }) => id === propertyId);
      return property
        ? [`${property.name} | Real Estate`, property.description || 'View this LKIC property and request more information.']
        : ['Property Not Found', 'The requested LKIC property could not be found.'];
    }
    return routeMetadata[pathname] || ['Page Not Found', siteConfig.description];
  }, [pathname]);

  useEffect(() => {
    const [pageTitle, description] = metadata;
    const title = `${pageTitle} | ${siteConfig.name}`;
    const configuredUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '');
    const siteUrl = configuredUrl || siteConfig.siteUrl || window.location.origin;
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '' : pathname}`;
    const imageUrl = `${siteUrl}${siteConfig.socialImage}`;

    document.title = title;
    setMeta('meta[name="description"]', { name: 'description', content: description });
    setMeta('meta[name="robots"]', { name: 'robots', content: pathname in routeMetadata || pathname.startsWith('/real-estate/') ? 'index, follow' : 'noindex, follow' });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    setMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    trackPageView(`${pathname}${search}`, title);
    requestAnimationFrame(() => document.getElementById('main-content')?.focus({ preventScroll: true }));
  }, [metadata, pathname, search]);

  return (
    <Box
      aria-live="polite"
      aria-atomic="true"
      sx={{ position: 'absolute', width: 1, height: 1, p: 0, m: -1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0 }}
    >
      {metadata[0]} page loaded
    </Box>
  );
};

export default RouteEnhancements;
