import React from 'react';
import { render } from '@testing-library/react-native';
import Component from './BookResult';
import { mock } from '../../mockData';

describe('<BookResult />', () => {
  it('render content', () => {
    const { getByText, getAllByText } = render(<Component books={mock} />);
    expect(getByText(mock[0].title)).toBeTruthy();
    expect(getAllByText(mock[0].author).length).toBeGreaterThan(0);
  });
});
