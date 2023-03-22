import {StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {Text} from '../layout';
import colors from '../../constants/colors';

type Props = {
  text: string;
  active?: boolean;
};

const SmallFilterButton = ({text, active = false}: Props) => {
  return (
    <Pressable
      style={[
        styles.button,
        {backgroundColor: active ? colors.black[1] : 'white'},
      ]}>
      <Text style={[styles.text, {color: active ? 'white' : 'black'}]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default SmallFilterButton;

const styles = StyleSheet.create({
  button: {
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderColor: colors.black[1],
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 5,
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
  },
});
