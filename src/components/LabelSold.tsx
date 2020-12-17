import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Label from './Label';

interface Props {
  isSold: boolean;
  hasBorder?: boolean;
}

const LabelSold: React.FC<Props> = ({ isSold, hasBorder }) => {
  const color = isSold ? '#00dcb5' : '#ff3e72';
  const text = isSold ? 'Sold' : 'Unsold';
  if (hasBorder) {
    return <Label color={color}>{text}</Label>;
  }
  return <Text style={[styles.text, { color }]}>{text}</Text>;
};

export default LabelSold;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
