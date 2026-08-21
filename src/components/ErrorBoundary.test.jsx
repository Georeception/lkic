import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

const BrokenComponent = () => {
  throw new Error('Test error');
};

test('shows a recovery screen when the interface crashes', () => {
  const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
  render(
    <ErrorBoundary>
      <BrokenComponent />
    </ErrorBoundary>
  );

  expect(screen.getByRole('heading', { name: /something went wrong/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /reload/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /return home/i })).toHaveAttribute('href', '/');
  consoleError.mockRestore();
});
