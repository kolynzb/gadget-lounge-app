import React from 'react';
import {
  Text as ReactText,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import colors from '../../constants/colors';

type TextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

const Text = ({style, children}: TextProps) => {
  return <ReactText style={[styles.font, style]}>{children}</ReactText>;
};
export default Text;

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Nunito-Regular',
    // color: colors.black[1],
  },
});
