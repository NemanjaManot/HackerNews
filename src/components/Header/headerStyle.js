import { StyleSheet } from 'react-native';
import { theme } from '../../utils/config';

const headerHeight = 45;

export const styles = StyleSheet.create({
  header: {
    height: headerHeight,
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
  },
});
