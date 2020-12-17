import { Dispatch } from 'redux';
import {
  GET_BOOKS,
  GET_BOOK_SEARCH,
  GET_BOOK_DETAIL,
  PATCH_BOOK_SALES,
  GetBooksParams,
} from './type';
import { getMock, patchBookSalesMock, getBookByIdMock } from '../../../mockData';

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

export const patchBookSales = (id: number, val: boolean) => (dispatch: Dispatch) => {
  try {
    patchBookSalesMock(id, val);
    dispatch({
      type: PATCH_BOOK_SALES.success,
      payload: { id, val },
    });
  } catch (err) {
    dispatch({ type: GET_BOOKS.error });
  }
};

export const getBookDetail = (id: number) => (dispatch: Dispatch) => {
  try {
    const payload = getBookByIdMock(id);
    dispatch({
      type: GET_BOOK_DETAIL.success,
      payload,
    });
  } catch (err) {
    dispatch({ type: GET_BOOKS.error });
  }
};
