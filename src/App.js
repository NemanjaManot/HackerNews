import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
// screens
import Main from './screens/Main';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default App;
