import React from 'react';
import { StyleSheet } from 'react-native';
import Switch from 'react-native-switch-pro';
import { useDispatch } from 'react-redux';
import { patchBookSales } from 'store/features/books';
import { color } from 'components/styles';

interface Props {
  isSold: boolean;
  id: number;
}

const StatusSwitch: React.FC<Props> = ({ id, isSold }) => {
  const dispatch = useDispatch();
  return (
    <Switch
      value={isSold}
      backgroundActive={color.turquoise}
      backgroundInactive={color.gray}
      style={styles.style}
      circleStyle={styles.circleStyle}
      onSyncPress={(val: boolean) => {
        dispatch(patchBookSales(id, val));
      }}
    />
  );
};

export default StatusSwitch;

const styles = StyleSheet.create({
  circleStyle: {
    width: 23,
    height: 23,
  },
  style: {
    width: 46,
    height: 28,
    borderRadius: 30,
  },
});
