import { Dispatch } from 'redux';
import { GET_BOOKS, GET_BOOK_SEARCH, GetBooksParams } from './type';
import { getMock } from '../../../mockData';

export const getBooks = (params: GetBooksParams) => async (dispatch: Dispatch) => {
  dispatch({ type: GET_BOOKS.request });
  try {
    const payload = getMock(params);
    dispatch({
      type: GET_BOOKS.success,
      payload,
    });
  } catch (err) {
    dispatch({ type: GET_BOOKS.error });
  }
};

export const getBooksMore = () => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_BOOKS.success,
      payload: false,
    });
  } catch (err) {}
};

export const setBookSearch = (search: string) => (dispatch: Dispatch) => {
  try {
    const payload = getMock({ search });
    dispatch({
      type: GET_BOOK_SEARCH.success,
      payload,
    });
  } catch (err) {
    dispatch({ type: GET_BOOK_SEARCH.error });
  }
};
