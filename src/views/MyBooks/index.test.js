import React from 'react';
import { render } from '@testing-library/react-native';
import Component from './index';
import Root from 'test/Root';

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
      title: 'Wonder: The Art and Practice of Beatrice Blue',
      author: 'by Blue, Beatrice / Diez, Daniel Paniagua (FRW)',
      isSold: true,
    },
    {
      id: 3,
      image: '',
      title: 'Sketch Every Day',
      author: 'by Gmewald, Simone',
      isSold: false,
    },
  ];

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
            books: data,
          },
        }}>
        <Component />
      </Root>,
    );
    expect(getByText(data[0].title)).toBeTruthy();
    expect(getByText(data[0].author)).toBeTruthy();
  });
});
