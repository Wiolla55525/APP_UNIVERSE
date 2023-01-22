import Counter from './Counter';
import { render, screen } from '@testing-library/react';

test('renders button', () => {
  render(<Counter />);

  const button = screen.getByTestId('button-test');
  expect(button).toBeInTheDocument();
  expect(button.innerHTML).toBe('Click me');
});
