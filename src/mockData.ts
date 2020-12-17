import { Image, ImageSourcePropType } from 'react-native';
import { GetBooksParams, Books, Book } from 'store/features/books';

import img1 from 'assets/images/book/1.png';
import img2 from 'assets/images/book/2.png';
import img3 from 'assets/images/book/3.png';
import img4 from 'assets/images/book/4.png';

function imgToUri(img: ImageSourcePropType): string {
  return Image.resolveAssetSource(img).uri;
}

export const mock = [
  {
    id: 1,
    image: imgToUri(img1),
    title: 'The Kinfolk Home: Interiors for Slow Living',
    author: 'William, Nathan',
    isSold: true,
    price: 1072,
    currency: 'THB',
  },
  {
    id: 2,
    image: imgToUri(img2),
    title: 'Wonder: The Art and Practice of Beatrice Blue',
    author: 'by Blue, Beatrice / Diez, Daniel Paniagua (FRW)',
    isSold: true,
    price: 1002,
    currency: 'THB',
  },
  {
    id: 3,
    image: imgToUri(img3),
    title: 'Sketch Every Day',
    author: 'by Gmewald, Simone',
    isSold: false,
    price: 1003,
    currency: 'THB',
  },
  {
    id: 4,
    image: imgToUri(img4),
    title: '365 Days of Art',
    author: 'by Scobie, Lorna',
    isSold: false,
    price: 1004,
    currency: 'THB',
  },
  {
    id: 5,
    image: imgToUri(img1),
    title: 'The Kinfolk Home2: Interiors for Slow Living',
    author: 'William, Nathan',
    isSold: false,
    price: 1005,
    currency: 'THB',
  },
  {
    id: 6,
    image: imgToUri(img2),
    title: 'Wonder2: The Art and Practice of Beatrice Blue',
    author: 'by Blue, Beatrice / Diez, Daniel Paniagua (FRW)',
    isSold: false,
    price: 1006,
    currency: 'THB',
  },
];

export const getMock = (params: GetBooksParams): Books => {
  const { filter, search = '' } = params || {};
  if (filter?.isSold) {
    return mock.filter((item) => item.isSold);
  }
  if (filter?.isSold === false) {
    return mock.filter((item) => item.isSold === false);
  }
  if (search) {
    const searchText = search.toLowerCase();
    return mock.filter(
      (item) =>
        item.title.toLowerCase().includes(searchText) ||
        item.author.toLowerCase().includes(searchText),
    );
  }
  return mock;
};

export const patchBookSalesMock = (id: number, val: boolean) => {
  Object.assign(
    mock.find((item) => item.id === id),
    { isSold: val },
  );
  return mock;
};

export const getBookByIdMock = (id: number): Book | null => {
  return mock.find((item) => item.id === id) || null;
};
