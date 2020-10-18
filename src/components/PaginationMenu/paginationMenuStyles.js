import { StyleSheet } from 'react-native';
import { theme, headerFooterHeight } from '../../utils/config';

export const styles = StyleSheet.create({
  paginationMenuWrapper: {
    height: headerFooterHeight,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderTopColor: theme.colors.lightGray,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 20,
    marginHorizontal: 18,
    width: 1,
    backgroundColor: theme.colors.lightGray,
  },
  buttonText: {
    color: theme.colors.secondaryColor,
    fontSize: theme.fontSize.description,
  },
  disabledButtonText: {
    color: theme.colors.lightGray,
  },
});
