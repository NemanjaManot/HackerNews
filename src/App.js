import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
// Styles
import { styles } from './screens/Main/mainStyles';
// Screens
import Main from './screens/Main';
// Config
import { theme } from './utils/config';

const App = () => {
  return (
    <>
      {Platform.OS === 'ios' && <SafeAreaView style={styles.iosSafeAreaView} />}
      {Platform.OS === 'android' && <StatusBar backgroundColor={theme.colors.primary} />}
      <SafeAreaView style={styles.globalSafeArea}>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default App;
