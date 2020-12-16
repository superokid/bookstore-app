import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from 'routes/type';
import { Books, Book } from 'store/features/books';
import BookCard from './BookCard';

interface Props {
  books: Books;
  navReplace?: boolean;
}

const BookResult: React.FC<Props> = ({ books, navReplace }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const renderItem = ({ item }: { item: Book }) => (
    <BookCard
      item={item}
      onPress={() => {
        if (navReplace) {
          navigation.replace('BookDetail', item);
        } else {
          navigation.navigate('BookDetail', item);
        }
      }}
    />
  );

  return (
    <FlatList data={books} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
  );
};

export default BookResult;
