import React from 'react';
import { render } from '@testing-library/react-native';
import Component from './index';
import { mock } from '../../mockData';

describe('BookDetail', () => {
  const item = mock[0];
  it('render no param', () => {
    const routeMock = { params: {} };
    render(<Component route={routeMock} />);
  });

  it('render content', () => {
    const routeMock = { params: item };
    const { getByText } = render(<Component route={routeMock} />);
    expect(getByText(item.title)).toBeTruthy();
    expect(getByText(item.author)).toBeTruthy();
  });
});
