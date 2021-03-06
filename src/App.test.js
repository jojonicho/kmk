import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('KMK CSUI', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Navbar/i);
  expect(linkElement).toBeInTheDocument();
});
