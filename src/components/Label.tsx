import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';

interface Props {
  color: string;
}

const Label: React.FC<Props> = ({ color, children }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.border, { borderColor: color }]}>
        <Text style={[styles.text, { color }]}>{children}</Text>
      </View>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  border: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 14,
  },
});
