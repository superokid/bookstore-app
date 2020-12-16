import MyBooks from '../views/MyBooks';
import BookDetail from '../views/BookDetail';

const routes = [
  {
    name: 'MyBooks',
    component: MyBooks,
    options: {
      title: 'My Books',
    },
  },
  {
    name: 'BookDetail',
    component: BookDetail,
  },
];

export default routes;
