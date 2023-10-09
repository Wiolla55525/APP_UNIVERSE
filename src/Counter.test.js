import Counter from './Counter';
import { render, screen } from '@testing-library/react';

test('renders button', () => {
  render(<Counter />);

  const button = screen.getByTestId('button-test');
  expect(button).toBe();
  expect(button.innerText).toBe('Click me');
});

test('clicks button counter adds', () => {
  render(<Counter />);

  const button = screen.getByTestId('button-test');
  const counter = screen.getByTestId('counter-test')
  expect(button).toBe();
  expect(counter.innerText).toBe('0')
  button.click()
  expect(counter.innerText).toBe('1')

})
