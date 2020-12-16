import React from 'react';
import { View } from 'react-native';

interface Props {
  size: number;
}

const Spacing: React.FC<Props> = ({ size }) => {
  return <View style={{ height: size }} />;
};

export default Spacing;
