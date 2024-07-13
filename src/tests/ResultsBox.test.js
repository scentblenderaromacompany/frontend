import React from 'react';
import { render } from '@testing-library/react';
import ResultsBox from '../components/ResultsBox';

const mockResults = [
  {
    title: 'Laptop 1',
    price: '500',
    link: 'https://example.com/laptop1',
    category: 'Electronics',
    item_id: '12345',
    total_price: '550',
    deal_alert: true,
  },
  {
    title: 'Laptop 2',
    price: '600',
    link: 'https://example.com/laptop2',
    category: 'Electronics',
    item_id: '12346',
    total_price: '660',
    deal_alert: false,
  },
];

test('renders ResultsBox component with data', () => {
  const { getByText } = render(<ResultsBox results={mockResults} />);

  expect(getByText(/laptop 1/i)).toBeInTheDocument();
  expect(getByText(/laptop 2/i)).toBeInTheDocument();
  expect(getByText(/$550/i)).toBeInTheDocument();
  expect(getByText(/$660/i)).toBeInTheDocument();
  expect(getByText(/deal alert!/i)).toBeInTheDocument();
});
