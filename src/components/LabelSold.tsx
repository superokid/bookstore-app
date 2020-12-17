import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Label from './Label';
import { color } from 'components/styles';

interface Props {
  isSold: boolean;
  hasBorder?: boolean;
}

const LabelSold: React.FC<Props> = ({ isSold, hasBorder }) => {
  const currColor = isSold ? color.turquoise : color.red;
  const text = isSold ? 'Sold' : 'Unsold';
  if (hasBorder) {
    return <Label color={currColor}>{text}</Label>;
  }
  return <Text style={[styles.text, { color: currColor }]}>{text}</Text>;
};

export default LabelSold;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
