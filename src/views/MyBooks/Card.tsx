import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';

interface Props {
  item: {
    id: number;
    image: string;
    title: string;
    author: string;
    isSold: boolean;
  };
}

const Card: React.FC<Props> = ({ item: { image, title, author, isSold } }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Card;
