import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Left, Right, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import ImgSearch from 'assets/images/icon/Search.svg';

interface Props {}

const CHeader = (props: Props) => {
  const navigation = useNavigation();

  return (
    <Header style={styles.header} hasTabs>
      <Left style={styles.left}>
        <TouchableOpacity onPress={() => navigation.navigate('BookSearch')}>
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
