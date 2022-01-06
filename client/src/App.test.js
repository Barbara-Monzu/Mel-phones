import { render, screen } from '@testing-library/react';
import App from './App';

test('app works as expected', () => {
  render(<App />);
  const title = screen.getByText(/Mel-phones/i);
  expect(title).toBeInTheDocument();
});
