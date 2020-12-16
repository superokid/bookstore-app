import React from 'react';
import { Text } from 'native-base';
import { BookDetailProps } from 'routes/type';

interface Props {}

const BookDetail: React.FC<BookDetailProps> = ({ route }) => {
  const { title, author } = route.params;
  return (
    <>
      <Text>Book Detail</Text>
      <Text>{title}</Text>
      <Text>{author}</Text>
    </>
  );
};

export default BookDetail;
