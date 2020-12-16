import { Dispatch } from 'redux';
import { GET_BOOKS, GetBooksParams } from './type';
import { mock } from '../../../mockData';

export const getBooks = (params: GetBooksParams) => async (dispatch: Dispatch) => {
  dispatch({ type: GET_BOOKS.request });
  try {
    dispatch({
      type: GET_BOOKS.success,
      payload: mock,
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
