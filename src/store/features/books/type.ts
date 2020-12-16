import { actionTypeGenerator } from '../../../helpers';

export const GET_BOOKS = actionTypeGenerator('books/GET_BOOKS');
export const GET_BOOKS_MORE = actionTypeGenerator('books/GET_BOOKS_MORE');
export const GET_BOOK_SEARCH = actionTypeGenerator('books/GET_BOOK_SEARCH');

export interface Book {
  id: number;
  image: string;
  title: string;
  author: string;
  isSold: boolean;
}

export type Books = Book[];

export interface BooksState {
  books: Books;
  booksSearch: Books;
}

interface SetModalAction {
  type: typeof GET_BOOKS.success;
  payload: Books;
}

export interface GetBooksParams {
  search?: string;
  filter?: {
    isSold: boolean;
  };
  size?: number;
  page?: number;
}

export type ModalActions = SetModalAction;
