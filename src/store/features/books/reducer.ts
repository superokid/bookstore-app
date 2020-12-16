import { GET_BOOKS, GET_BOOK_SEARCH, ModalActions, BooksState } from './type';

const INITIAL_STATE: BooksState = {
  books: [],
  booksSearch: [],
};

export default (state = INITIAL_STATE, action: ModalActions) => {
  switch (action.type) {
    case GET_BOOKS.success:
      return {
        ...state,
        books: action.payload,
      };
    case GET_BOOK_SEARCH.success:
      return {
        ...state,
        booksSearch: action.payload,
      };
    default:
      return state;
  }
};
