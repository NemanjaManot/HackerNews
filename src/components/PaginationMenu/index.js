import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
// Styles
import { styles } from './paginationMenuStyles';
// Config
import { bigHitSlop } from '../../utils/config';

const PaginationMenu = ({ onPrevPress, onMorePress, isPrevDisabled }) => {
  return (
    <View style={styles.paginationMenuWrapper}>
      <TouchableOpacity onPress={onPrevPress} disabled={isPrevDisabled} hitSlop={bigHitSlop}>
        <Text style={[styles.buttonText, isPrevDisabled && styles.disabledButtonText]}>Prev</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity onPress={onMorePress} hitSlop={bigHitSlop}>
        <Text style={styles.buttonText}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

PaginationMenu.propTypes = {
  onPrevPress: PropTypes.func.isRequired,
  onMorePress: PropTypes.func.isRequired,
  isPrevDisabled: PropTypes.bool.isRequired,
};

export default PaginationMenu;
