import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { Text } from 'native-base';
import { Spacing, Label } from 'components';
import { Book } from 'store/features/books';

interface Props {
  item: Book;
  onPress: () => void;
}

const Card: React.FC<Props> = ({ item, onPress }) => {
  const { image, title, author, isSold } = item;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{ uri: image }} resizeMode="cover" />
      <View style={styles.descContainer}>
        <Label color={isSold ? '#00dcb5' : '#ff3e72'}>{isSold ? 'Sold' : 'Unsold'}</Label>
        <Spacing size={10} />
        <Text style={styles.title}>{title}</Text>
        <Spacing size={5} />
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 28,
  },
  descContainer: {
    flex: 1,
    paddingRight: 15,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 120,
    height: 160,
    marginRight: 14,
  },
  title: {
    fontSize: 20,
  },
  author: {
    color: '#aaa',
    fontSize: 15,
  },
});

export default Card;