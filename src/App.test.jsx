import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

vi.mock('./components/Navbar', () => ({ default: () => <header>Navigation</header> }));
vi.mock('./components/Footer', () => ({ default: () => <footer>Footer</footer> }));
vi.mock('./components/ScrollToTop', () => ({ default: () => null }));
vi.mock('./components/ScrollToTopOnRouteChange', () => ({ default: () => null }));
vi.mock('./pages/Index', () => ({ default: () => <h1>Home</h1> }));
vi.mock('./pages/About', () => ({ default: () => <h1>About LKIC</h1> }));
vi.mock('./pages/Contact', () => ({ default: () => <h1>Contact LKIC</h1> }));
vi.mock('./pages/Research', () => ({ default: () => <h1>Research</h1> }));
vi.mock('./pages/RealEstate', () => ({ default: () => <h1>Real Estate</h1> }));
vi.mock('./pages/PropertyDetail', () => ({ default: () => <h1>Property</h1> }));
vi.mock('./pages/ICT', () => ({ default: () => <h1>ICT</h1> }));
vi.mock('./pages/Agriventures', () => ({ default: () => <h1>Agriventures</h1> }));
vi.mock('./pages/Outreach', () => ({ default: () => <h1>Outreach</h1> }));
vi.mock('./pages/NotFound', () => ({ default: () => <h1>Page not found</h1> }));

const renderAt = (path) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

test('renders the shared shell and home metadata', async () => {
  renderAt('/');

  expect(screen.getByRole('link', { name: /skip to main content/i })).toHaveAttribute('href', '#main-content');
  expect(screen.getAllByRole('banner')).toHaveLength(1);
  expect(screen.getAllByRole('contentinfo')).toHaveLength(1);
  await waitFor(() => expect(document.title).toMatch(/Innovation, Research & Sustainable Development/));
});

test('renders route content and updates canonical metadata', async () => {
  renderAt('/about');

  expect(await screen.findByRole('heading', { level: 1, name: /about lkic/i })).toBeInTheDocument();
  await waitFor(() => expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://lkic.africa/about'));
  expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'index, follow');
});

test('renders an accessible noindex page for unknown routes', async () => {
  renderAt('/missing-page');

  expect(await screen.findByRole('heading', { level: 1, name: /page not found/i })).toBeInTheDocument();
  await waitFor(() => expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow'));
});
