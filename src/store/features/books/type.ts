import { actionTypeGenerator } from '../../../helpers';

export const GET_BOOKS = actionTypeGenerator('books/GET_BOOKS');
export const GET_BOOKS_MORE = actionTypeGenerator('books/GET_BOOKS_MORE');
export const GET_BOOK_SEARCH = actionTypeGenerator('books/GET_BOOK_SEARCH');
export const PATCH_BOOK_SALES = actionTypeGenerator('books/PATCH_BOOK_SALES');
export const GET_BOOK_DETAIL = actionTypeGenerator('books/GET_BOOK_DETAIL');

export interface Book {
  id: number;
  image: string;
  title: string;
  author: string;
  isSold: boolean;
  currency: string;
  price: number;
}

export type Books = Book[];

export interface BooksState {
  /** <MyBooks /> books result on main page */
  books: Books extends never ? Books : any;
  /** <BookSearch /> books result after searching */
  booksSearch: Books;
  /** <BookDetail /> book detail by id */
  bookDetail: Book | null;
}

interface GetBookAction {
  type: typeof GET_BOOKS.success;
  payload: Books;
}

interface GetBookSearchAction {
  type: typeof GET_BOOK_SEARCH.success;
  payload: Books;
}

interface PatchBookSalesAction {
  type: typeof PATCH_BOOK_SALES.success;
  payload: { id: number; val: boolean };
}

interface GetBookDetailAction {
  type: typeof GET_BOOK_DETAIL.success;
  payload: any;
}

export interface GetBooksParams {
  search?: string;
  filter?: {
    isSold: boolean;
  };
  size?: number;
  page?: number;
}

export type BooksActions =
  | GetBookAction
  | GetBookSearchAction
  | PatchBookSalesAction
  | GetBookDetailAction;
