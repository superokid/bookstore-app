import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Tabs, Tab } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header';
import Card from './Card';
import { ReduxState } from 'store';
import { getBooks, Books, Book } from 'store/features/books';

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

  const renderItem = ({ item }: { item: Book }) => <Card item={item} />;

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
      <Header></Header>
      <Tabs
        locked
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
              <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
              />
            </Tab>
          );
        })}
      </Tabs>
    </>
  );
};

export default MyBooks;

const styles = StyleSheet.create({
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
