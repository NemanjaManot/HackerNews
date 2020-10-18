import { StyleSheet } from 'react-native';
import { theme } from '../../utils/config';

export const styles = StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomColor: theme.colors.lighterGrey,
    borderBottomWidth: 0.7,
  },
  firstRow: {
    flexDirection: 'row',
    paddingLeft: 22,
  },
  secondRow: {
    flexDirection: 'row',
    paddingLeft: 26,
    paddingVertical: 4,
  },
  thirdRow: {
    flexDirection: 'row',
    paddingLeft: 26,
  },

  // Text Styles
  index: {
    fontSize: theme.fontSize.text,
    color: theme.colors.lightGray,
    position: 'absolute',
  },
  title: {
    fontSize: theme.fontSize.text,
    color: theme.colors.secondaryColor,
    paddingLeft: 4,
    flexWrap: 'wrap',
    flex: 1,
  },
  url: {
    fontSize: theme.fontSize.description,
    color: theme.colors.lightGray,
  },
  points: {
    fontSize: theme.fontSize.description,
    color: theme.colors.secondaryColor,
  },
  byLabel: {
    color: theme.colors.lightGray,
  },
  by: {
    fontSize: theme.fontSize.description,
    color: theme.colors.secondaryColor,
  },
  time: {
    fontSize: theme.fontSize.description,
    color: theme.colors.lightGray,
  },
});
