import React from 'react';
import { render } from '@testing-library/react-native';
import Component from './BookCard';
import { mock } from '../../mockData';

describe('<BookCard />', () => {
  it('render content', () => {
    const { getByText, getAllByText } = render(<Component item={mock[0]} />);
    expect(getByText(mock[0].title)).toBeTruthy();
    expect(getAllByText(mock[0].author).length).toBeGreaterThan(0);
  });

  it('render unsold', () => {
    const { getByText } = render(
      <Component
        item={{
          isSold: true,
        }}
      />,
    );
    getByText(/Sold/);
  });

  it('render sold', () => {
    const { getByText } = render(
      <Component
        item={{
          isSold: false,
        }}
      />,
    );
    getByText(/Unsold/);
  });
});
