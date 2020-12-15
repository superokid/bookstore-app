import MyBooks from '../views/MyBooks';
import BookDetail from '../views/BookDetail';

const routes = [
  {
    name: 'myBooks',
    component: MyBooks,
    options: {
      title: 'My Books',
    },
  },
  {
    name: 'bookDetail',
    component: BookDetail,
  },
];

export default routes;
