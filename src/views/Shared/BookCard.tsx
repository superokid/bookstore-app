import React from 'react';
import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { Spacing, LabelSold } from 'components';
import { Book } from 'store/features/books';
import { Text } from 'components';

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
        <LabelSold isSold={isSold} hasBorder />
        <Spacing size={10} />
        <Text type="title1" mb={5}>
          {title}
        </Text>
        <Text type="subTitle1">{author}</Text>
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
});

export default Card;
