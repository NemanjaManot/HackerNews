import { StyleSheet } from 'react-native';
import { theme } from '../../utils/config';
import { headerFooterHeight } from '../../utils/config';

export const styles = StyleSheet.create({
  header: {
    height: headerFooterHeight,
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
