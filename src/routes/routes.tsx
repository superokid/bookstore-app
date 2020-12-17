import React from 'react';
import Header from '../components/Header';
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
    options: {
      header: () => <Header type="back" title="Book Details" />,
    },
  },
];

export default routes;
