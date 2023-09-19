import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const helloWorldText = screen.getByText(/hello world/i);
  expect(helloWorldText).toBeInTheDocument();
});
