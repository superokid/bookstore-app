import { StackScreenProps } from '@react-navigation/stack';
import { Book } from 'store/features/books';

export type RootStackParamList = {
  MyBooks: undefined;
  BookDetail: Book;
  BookSearch: undefined;
};

export type BookDetailProps = StackScreenProps<RootStackParamList, 'BookDetail'>;
export type BookSearchProps = StackScreenProps<RootStackParamList, 'BookSearch'>;
