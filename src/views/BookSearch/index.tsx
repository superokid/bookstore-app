import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Item } from 'native-base';
import { useDispatch } from 'react-redux';
import ImgBack from 'assets/images/icon/Back.svg';

import SearchInput from './SearchInput';
import { setBookSearch } from 'store/features/books';
import { BookSearchProps } from 'routes/type';
import Result from './Result';

interface Props {}

const SearchBar: React.FC<BookSearchProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleBack = () => {
    dispatch(setBookSearch(''));
    navigation.goBack();
  };

  return (
    <>
      <Header searchBar hasTabs style={styles.header}>
        <Item>
          <TouchableOpacity onPress={handleBack}>
            <ImgBack />
          </TouchableOpacity>
          <SearchInput />
        </Item>
      </Header>
      <Result />
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
  },
});
