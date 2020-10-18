import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { formatDistance, fromUnixTime } from 'date-fns';
// Styles
import { styles } from './listItemStyle';

const ListItem = ({ index, title, url, score, by, time }) => {
  const getFormattedTime = useMemo(() => formatDistance(new Date(), fromUnixTime(time)), [time]);

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
        <Text style={styles.time}>{getFormattedTime} ago</Text>
      </View>
    </View>
  );
};

ListItem.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default ListItem;
