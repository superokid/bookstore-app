import React from 'react';
import { Input } from 'native-base';
import { useDispatch } from 'react-redux';

import { setBookSearch } from 'store/features/books';

interface Props {}

const SearchInput = (props: Props) => {
  const dispatch = useDispatch();
  const handleChange = (text: string) => {
    dispatch(setBookSearch(text));
  };
  return <Input placeholder="Search title / author" autoFocus onChangeText={handleChange} />;
};

export default SearchInput;
