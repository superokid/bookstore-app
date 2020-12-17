import React from 'react';
import { render } from '@testing-library/react-native';
import Root from 'test/Root';
import Component from './index';
import { mock } from '../../mockData';

describe('BookDetail', () => {
  const item = mock[0];
  it('render no param', () => {
    const routeMock = { params: {} };
    render(
      <Root
        initialState={{
          books: {
            bookDetail: item,
          },
        }}>
        <Component route={routeMock} />
      </Root>,
    );
  });

  it('render content', () => {
    const routeMock = { params: { id: 1 } };
    const { getByText } = render(
      <Root
        initialState={{
          books: {
            bookDetail: item,
          },
        }}>
        <Component route={routeMock} />
      </Root>,
    );
    expect(getByText(item.title)).toBeTruthy();
    expect(getByText(item.author)).toBeTruthy();
    expect(getByText(/THB/)).toBeTruthy();
    expect(getByText(/1072/)).toBeTruthy();
  });
});
