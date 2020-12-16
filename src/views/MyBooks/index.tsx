import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Tabs, Tab } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header';
import { ReduxState } from 'store';
import { getBooks, Books } from 'store/features/books';
import BookResult from '../Shared/BookResult';

interface Props {}

const tabs = [
  {
    heading: 'All',
  },
  {
    heading: 'Sold',
  },
  {
    heading: 'Unsold',
  },
];

const MyBooks: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const books = useSelector<ReduxState, Books>((state) => state.books.books);

  useEffect(() => {
    dispatch(
      getBooks({
        size: 5,
        page: 1,
      }),
    );
  }, []);

  const getFilter = (i: number) => {
    if (i === 1) {
      return { isSold: true };
    } else if (i === 2) {
      return { isSold: false };
    }
    return undefined;
  };

  return (
    <>
      <Header />
      <Tabs
        locked
        tabContainerStyle={styles.tabContainerStyle}
        tabBarUnderlineStyle={styles.tabUnderline}
        onChangeTab={({ i }: { i: number }) => {
          dispatch(
            getBooks({
              filter: getFilter(i),
              size: 5,
              page: 1,
            }),
          );
        }}>
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.heading}
              heading={tab.heading}
              tabStyle={styles.tabStyle}
              textStyle={styles.textStyle}
              activeTabStyle={styles.activeTabStyle}
              activeTextStyle={styles.activeTextStyle}>
              <BookResult books={books} />
            </Tab>
          );
        })}
      </Tabs>
    </>
  );
};

export default MyBooks;

const styles = StyleSheet.create({
  tabContainerStyle: {
    elevation: 0,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tabUnderline: {
    backgroundColor: '#000',
  },
  tabStyle: {
    backgroundColor: '#fff',
  },
  textStyle: {
    color: '#999',
  },
  activeTabStyle: {
    backgroundColor: '#fff',
  },
  activeTextStyle: {
    color: '#000',
  },
});
