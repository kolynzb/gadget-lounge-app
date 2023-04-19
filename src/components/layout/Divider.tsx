import {FlexStyle, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../constants/colors';

type Props = {
  horizontal?: boolean;
  size: FlexStyle['width'] | FlexStyle['height'];
  backgroundColor?: string;
};

const Divider = ({
  horizontal = false,
  size,
  backgroundColor = COLORS.gray['1'],
}: Props) => {
  // const defaultSizeValue = 'auto';
  const defaultSizeValue = '100%';

  return (
    <View
      style={{
        width: !horizontal ? size : defaultSizeValue,
        height: horizontal ? size : defaultSizeValue,
        backgroundColor,
      }}
    />
  );
};

export default Divider;
