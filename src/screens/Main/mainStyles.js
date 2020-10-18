import { StyleSheet } from 'react-native';
// Config
import { headerFooterHeight, theme } from '../../utils/config';

export const styles = StyleSheet.create({
  mainWrapper: {
    height: '100%',
  },
  scrollingContentWrapper: {
    flex: 1,
    marginBottom: headerFooterHeight,
  },
  activityIndicator: {
    marginTop: '70%',
  },

  globalSafeArea: {
    flex: 1,
  },
  // Status top bar styles (iOS only)
  iosSafeAreaView: {
    flex: 0,
    backgroundColor: theme.colors.primary,
  },
});
