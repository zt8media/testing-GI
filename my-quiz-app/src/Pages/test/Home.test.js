import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home'; // Adjust the import path as necessary

test('renders logo', () => {
  render(<Home />);
  const logo = screen.getByAltText('Logo'); // Make sure Home component renders an image with alt text 'Logo'
  expect(logo).toBeInTheDocument();
});

test('renders heading', () => {
  render(<Home />);
  const heading = screen.getByText('Your guided path to programming enlightenment'); // Adjust text as necessary
  expect(heading).toBeInTheDocument();
});
