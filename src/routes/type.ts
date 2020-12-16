import { StackScreenProps } from '@react-navigation/stack';
import { Book } from 'store/features/books';

export type RootStackParamList = {
  MyBooks: undefined;
  BookDetail: Book;
};

export type BookDetailProps = StackScreenProps<RootStackParamList, 'BookDetail'>;
