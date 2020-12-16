import React from 'react';
import { useSelector } from 'react-redux';
import { ReduxState } from 'store';
import { Books } from 'store/features/books';
import BookResult from '../Shared/BookResult';

interface Props {}

const Result = (props: Props) => {
  const books = useSelector<ReduxState, Books>((state) => state.books.booksSearch);
  return <BookResult books={books} navReplace />;
};

export default Result;
