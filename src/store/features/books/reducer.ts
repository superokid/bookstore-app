import {
  GET_BOOKS,
  GET_BOOK_SEARCH,
  GET_BOOK_DETAIL,
  PATCH_BOOK_SALES,
  BooksActions,
  BooksState,
  Book,
} from './type';

const INITIAL_STATE: BooksState = {
  books: [],
  booksSearch: [],
  bookDetail: null,
};

export default (state = INITIAL_STATE, action: BooksActions) => {
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
    case PATCH_BOOK_SALES.success:
      return {
        ...state,
        books: state.books.map((item: Book) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              isSold: action.payload.val,
            };
          }
          return item;
        }),
        bookDetail: {
          ...state.bookDetail,
          isSold: action.payload.val,
        },
      };
    case GET_BOOK_DETAIL.success:
      return {
        ...state,
        bookDetail: action.payload,
      };
    default:
      return state;
  }
};
