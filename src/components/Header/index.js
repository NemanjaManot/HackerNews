import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// Styles
import { styles } from './headerStyle';

const Header = ({ onRefresh }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Hacker News</Text>
      <TouchableOpacity onPress={onRefresh}>
        <Text>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
