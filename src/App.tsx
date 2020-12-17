/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, LogBox } from 'react-native';
import { Provider } from 'react-redux';

import RouterWrapper from './routes/RouterWrapper';
import { store } from './store';

/** from packages: [react-native-switch-pro] */
LogBox.ignoreLogs([/componentWillReceiveProps/, /componentWillMount/]);

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <RouterWrapper />
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
