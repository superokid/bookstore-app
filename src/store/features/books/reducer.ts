import { GET_BOOKS, ModalActions, BooksState } from './type';

const INITIAL_STATE: BooksState = {
  books: [],
};

export default (state = INITIAL_STATE, action: ModalActions) => {
  switch (action.type) {
    case GET_BOOKS.success:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};
