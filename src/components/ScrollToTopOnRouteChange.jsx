import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top on route change - immediate and smooth
    // Using requestAnimationFrame ensures it happens after render
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    });
  }, [pathname]);

  return null;
};

export default ScrollToTopOnRouteChange;

