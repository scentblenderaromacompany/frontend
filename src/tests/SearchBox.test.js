import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from '../components/SearchBox';

test('renders SearchBox component', () => {
  render(<SearchBox onSearch={() => {}} />);
  const inputElement = screen.getByPlaceholderText(/search for items/i);
  expect(inputElement).toBeInTheDocument();
});

test('calls onSearch with the input value', () => {
  const onSearch = jest.fn();
  render(<SearchBox onSearch={onSearch} />);
  const inputElement = screen.getByPlaceholderText(/search for items/i);
  const buttonElement = screen.getByRole('button', { name: /search/i });

  fireEvent.change(inputElement, { target: { value: 'laptop' } });
  fireEvent.click(buttonElement);

  expect(onSearch).toHaveBeenCalledWith('laptop');
});
