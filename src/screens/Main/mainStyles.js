import { StyleSheet } from 'react-native';
import { headerFooterHeight } from '../../utils/config';

export const styles = StyleSheet.create({
  mainWrapper: {
    height: '100%',
  },
  scrollingContentWrapper: {
    flex: 1,
    marginBottom: headerFooterHeight,
  },
});
