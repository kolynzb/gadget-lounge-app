import {FlexStyle, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  horizontal?: boolean;
  size: FlexStyle['width'] | FlexStyle['height'];
};


const Spacer = ({horizontal = false, size}: Props) => {
  const defaultSizeValue = 'auto';

  return (
    <View
      style={{
        width: horizontal ? size : defaultSizeValue,
        height: !horizontal ? size : defaultSizeValue,
      }}
    />
  );
};

export default Spacer;
