import React from 'react';
import { render } from '@testing-library/react-native';
import Component from './Card';
import { mock } from '../../mockData';

describe('MyBook <Card />', () => {
  it('render content', () => {
    const { getByText } = render(<Component item={mock[0]} />);
    expect(getByText(mock[0].title)).toBeTruthy();
    expect(getByText(mock[0].author)).toBeTruthy();
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
