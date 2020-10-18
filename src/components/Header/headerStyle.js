import { StyleSheet } from 'react-native';
import { theme } from '../../utils/config';

const headerHeight = 50;

export const styles = StyleSheet.create({
  header: {
    height: headerHeight,
    flexDirection: 'row',
    backgroundColor: theme.colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: theme.colors.secondaryColor,
    fontSize: theme.fontSize.title,
    fontWeight: '600',
  },
});
