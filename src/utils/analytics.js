const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

const isConfigured = /^G-[A-Z0-9]+$/.test(measurementId || '');

const initializeAnalytics = () => {
  if (!isConfigured || window.gtag) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args) => window.dataLayer.push(args);
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: false, anonymize_ip: true });
};

export const trackPageView = (pagePath, pageTitle) => {
  if (!isConfigured) return;
  initializeAnalytics();
  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href,
  });
};

export const trackEvent = (name, parameters = {}) => {
  if (!isConfigured) return;
  initializeAnalytics();
  window.gtag('event', name, parameters);
};

export const trackWebVital = ({ id, name, value }) => {
  trackEvent(name, {
    event_category: 'Web Vitals',
    event_label: id,
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    non_interaction: true,
  });
};
