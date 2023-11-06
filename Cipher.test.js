import React from 'react';
import { render, screen } from '@testing-library/react';
import Cipher from './Cipher';

test('renders the component with initial state', () => {
  render(<Cipher />);
  
  // Check if the component renders the initial elements
  expect(screen.getByText('AIU HiddenKey')).toBeInTheDocument();
  expect(screen.getByText('Choose a File')).toBeInTheDocument();
  expect(screen.getByText('Passkey :')).toBeInTheDocument();
  expect(screen.getByText('Encrypt')).toBeInTheDocument();
  expect(screen.getByText('Decrypt')).toBeInTheDocument();
});

test('initial state of file and passkey', () => {
  render(<Cipher />);
  
  // Check if the initial state of file and passkey is as expected
  const fileInput = screen.getByLabelText('Choose a File');
  const passkeyInput = screen.getByPlaceholderText(''); // Placeholder for passkey

  expect(fileInput).toHaveValue('');
  expect(passkeyInput).toHaveValue('');
});
