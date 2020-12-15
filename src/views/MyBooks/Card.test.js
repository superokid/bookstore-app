import React from 'react';
import { render } from '@testing-library/react-native';
import Component from './Card';

describe('MyBook Card', () => {
  const item = {
    id: 1,
    image: '',
    title: 'The Kinfolk Home: Interiors for Slow Living',
    author: 'William, Nathan',
    isSold: false,
  };

  it('render content', () => {
    const { getByText } = render(<Component item={item} />);
    expect(getByText(item.title)).toBeTruthy();
    expect(getByText(item.author)).toBeTruthy();
  });
});
