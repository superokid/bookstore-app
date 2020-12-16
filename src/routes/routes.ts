import MyBooks from '../views/MyBooks';
import BookDetail from '../views/BookDetail';
import BookSearch from '../views/BookSearch';

const routes = [
  {
    name: 'MyBooks',
    component: MyBooks,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'BookSearch',
    component: BookSearch,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'BookDetail',
    component: BookDetail,
  },
];

export default routes;
