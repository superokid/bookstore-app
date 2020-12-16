import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Item, Input, Button, Text } from 'native-base';
import ImgBack from 'assets/images/icon/Back.svg';

interface Props {
  setSearch: (key: boolean) => void;
}

const SearchBar: React.FC<Props> = ({ setSearch }) => {
  return (
    <Header searchBar rounded style={styles.header}>
      <Item>
        <TouchableOpacity onPress={() => setSearch(false)}>
          <ImgBack />
        </TouchableOpacity>
        <Input placeholder="Search" />
      </Item>
      <Button transparent>
        <Text>Search...</Text>
      </Button>
    </Header>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
  },
});
