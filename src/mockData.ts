import { Image, ImageSourcePropType } from 'react-native';
import { GetBooksParams, Books } from 'store/features/books';

import img1 from 'assets/images/book/1.png';
import img2 from 'assets/images/book/2.png';
import img3 from 'assets/images/book/3.png';

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
  },
  {
    id: 2,
    image: imgToUri(img2),
    title: 'Wonder: The Art and Practice of Beatrice Blue',
    author: 'by Blue, Beatrice / Diez, Daniel Paniagua (FRW)',
    isSold: true,
  },
  {
    id: 3,
    image: imgToUri(img3),
    title: 'Sketch Every Day',
    author: 'by Gmewald, Simone',
    isSold: false,
  },
  {
    id: 4,
    image: imgToUri(img3),
    title: 'Sketch Every Day',
    author: 'by Gmewald, Simone',
    isSold: false,
  },
  {
    id: 5,
    image: imgToUri(img3),
    title: 'Sketch Every Day',
    author: 'by Gmewald, Simone',
    isSold: false,
  },
  {
    id: 6,
    image: imgToUri(img3),
    title: 'Sketch Every Day',
    author: 'by Gmewald, Simone',
    isSold: false,
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
