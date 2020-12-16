import { Image, ImageSourcePropType } from 'react-native';

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
