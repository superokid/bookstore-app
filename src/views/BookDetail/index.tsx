import React, { useEffect } from 'react';
import { StyleSheet, View, useWindowDimensions, Image } from 'react-native';
import { Content } from 'native-base';
import { BookDetailProps } from 'routes/type';
import { useDispatch, useSelector } from 'react-redux';

import { Text, LabelSold, Spacing } from 'components';
import TextCurrency from 'components/TextCurrency';
import SalesSwitch from './SalesSwitch';
import { ReduxState } from 'store';
import { getBookDetail, Book } from 'store/features/books';

interface Props {}

const BookDetail: React.FC<BookDetailProps> = ({ route }) => {
  const dispatch = useDispatch();
  const bookDetail = useSelector<ReduxState, Book>((state) => state.books.bookDetail);
  const { title, author, currency, price, isSold, image } = bookDetail || {};
  const { id } = route.params;
  const { width } = useWindowDimensions();

  useEffect(() => {
    dispatch(getBookDetail(id));
  }, [id]);

  return (
    <Content>
      <Image style={styles.image} width={width} source={{ uri: image }} resizeMode="cover" />
      <View style={styles.descContainer}>
        <View style={styles.statusContainer}>
          <View>
            <Text type="subTitle1" mb={6}>
              Sales Status
            </Text>
            <LabelSold isSold={isSold} />
          </View>
          <SalesSwitch isSold={isSold} id={id} />
        </View>
        <Spacing size={16} />
        <TextCurrency currency={currency} amount={price} />
        <Text type="title1" mb={5}>
          {title}
        </Text>
        <Text type="subTitle1">{author}</Text>
        <Spacing size={20} />
      </View>
    </Content>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 540,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  descContainer: {
    marginHorizontal: 16,
  },
});
