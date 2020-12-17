import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Left, Right, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import ImgBack from 'assets/images/icon/Back.svg';
import ImgSearch from 'assets/images/icon/Search.svg';

interface Props {
  title: string;
  type: 'back' | 'search';
  location?: string;
}

const CHeader: React.FC<Props> = ({ title, type, location }) => {
  const navigation = useNavigation();
  const handleBack = () => navigation.goBack();

  const renderIcon = () => {
    if (type === 'search' && location) {
      return (
        <TouchableOpacity onPress={() => navigation.navigate(location)}>
          <ImgSearch />
        </TouchableOpacity>
      );
    }
    if (type === 'back') {
      return (
        <TouchableOpacity onPress={handleBack}>
          <ImgBack />
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <Header style={styles.header} hasTabs>
      <Left style={styles.left}>{renderIcon()}</Left>
      <View style={styles.body}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <Right />
    </Header>
  );
  return null;
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
