import React from 'react';
import { Switch } from 'native-base';
import { useDispatch } from 'react-redux';
import { patchBookSales } from 'store/features/books';

interface Props {
  isSold: boolean;
  id: number;
}

const StatusSwitch: React.FC<Props> = ({ id, isSold }) => {
  const dispatch = useDispatch();
  return (
    <Switch
      value={isSold}
      onValueChange={(val) => {
        dispatch(patchBookSales(id, val));
      }}
    />
  );
};

export default StatusSwitch;
