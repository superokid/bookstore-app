import React from 'react';
import { render } from '@testing-library/react-native';
import Component from './index';

describe('MyBooks Tabs', () => {
  const data = [
    {
      id: 1,
      image: '',
      title: 'The Kinfolk Home: Interiors for Slow Living',
      author: 'William, Nathan',
      isSold: true,
    },
    {
      id: 2,
      image: '',
      title: 'Wonder: The art and Practice of Beatrice Blue',
      author: 'by Blue, Beatrice / Diez, Daniel Paniagua (FRW)',
      isSold: true,
    },
    {
      id: 3,
      image: '',
      title: 'The Kinfolk Home: Interiors for Slow Living',
      author: 'William, Nathan',
      isSold: false,
    },
  ];

  it('render content', () => {
    const { getByText } = render(<Component data={data} />);
  });
});
