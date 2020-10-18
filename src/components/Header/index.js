import React from 'react';
import { View, Text } from 'react-native';
// Styles
import { styles } from './headerStyle';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Hacker News</Text>
    </View>
  );
};

export default Header;
