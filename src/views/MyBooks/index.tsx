import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Content, Tabs, Tab } from 'native-base';
import Card from './Card';

interface Props {}

const MyBooks = ({ navigation }: any) => {
  return (
    <Content>
      <Text>My Books</Text>
      {/* <Tabs>
        <Tab heading="Tab1">
          <Card />
        </Tab>
        <Tab heading="Tab2">
          <Card />
        </Tab>
        <Tab heading="Tab3">
          <Card />
        </Tab>
      </Tabs> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('bookDetail');
        }}>
        <Text>button</Text>
      </TouchableOpacity>
    </Content>
  );
};

export default MyBooks;
