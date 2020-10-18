import React from 'react';
import { View, Text } from 'react-native';
// Styles
import { styles } from './listItemStyle';

const ListItem = ({ index, title, url, score, by, time }) => {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.firstRow}>
        <Text style={styles.index}>{index}.</Text>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>

      <View style={styles.secondRow}>
        <Text style={styles.url}>{url}</Text>
      </View>

      <View style={styles.thirdRow}>
        <Text style={styles.points}>{score} points </Text>
        <Text style={styles.byLabel}>by </Text>
        <Text style={styles.by}>{by} </Text>
        <Text style={styles.time}>{time} hour ago</Text>
      </View>
    </View>
  );
};

export default ListItem;
