import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
  /** text type group by design similarity */
  type?: 'title1' | 'subTitle1';
  /** margin bottom */
  mb?: number;
}

const CText: React.FC<Props> = ({ type, mb, children }) => {
  return (
    <Text
      style={[
        type && styles[type],
        {
          marginBottom: mb,
        },
      ]}>
      {children}
    </Text>
  );
};

export default CText;

const styles = StyleSheet.create({
  title1: {
    fontSize: 20,
  },
  subTitle1: {
    fontSize: 15,
    color: '#aaa',
  },
});
