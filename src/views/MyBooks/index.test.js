import React from 'react';
import { render } from '@testing-library/react-native';
import Component from './index';
import Root from 'test/Root';
import { mock } from '../../mockData';

describe('MyBooks Tabs', () => {
  it('render initial state', () => {
    render(
      <Root
        initialState={{
          books: {
            books: [],
          },
        }}>
        <Component />
      </Root>,
    );
  });

  it('render content', () => {
    const { getByText } = render(
      <Root
        initialState={{
          books: {
            books: mock,
          },
        }}>
        <Component />
      </Root>,
    );
    expect(getByText(mock[0].title)).toBeTruthy();
    expect(getByText(mock[0].author)).toBeTruthy();
  });
});
