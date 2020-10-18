import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
// Screens
import Main from './screens/Main';
// Config
import { theme } from './utils/config';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.primary} />
      <SafeAreaView>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default App;
