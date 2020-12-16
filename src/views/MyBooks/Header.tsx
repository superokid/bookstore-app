import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Left, Right, Text } from 'native-base';
import ImgSearch from 'assets/images/icon/Search.svg';
import SearchBar from './SearchBar';

interface Props {}

const CHeader = (props: Props) => {
  const [isSearch, setSearch] = useState(false);
  if (isSearch) {
    return <SearchBar setSearch={setSearch} />;
  }
  return (
    <Header style={styles.header}>
      <Left style={styles.left}>
        <TouchableOpacity onPress={() => setSearch(true)}>
          <ImgSearch />
        </TouchableOpacity>
      </Left>
      <View style={styles.body}>
        <Text style={styles.text}>My Books</Text>
      </View>
      <Right />
    </Header>
  );
};

export default CHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
  },
  left: {
    flex: 1,
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
});
