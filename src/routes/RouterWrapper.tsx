import React from 'react';
import { Container } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import routes from './routes';

const Stack = createStackNavigator();

interface Props {}

const RouterWrapper = (props: Props) => {
  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MyBooks">
          {routes.map((route) => {
            return <Stack.Screen {...route} key={route.name} />;
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
};

export default RouterWrapper;
