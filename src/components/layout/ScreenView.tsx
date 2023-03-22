import {StyleSheet, ViewStyle, StyleProp, SafeAreaView} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const ScreenView = (props: Props) => {
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      {props.children}
    </SafeAreaView>
  );
};

export default ScreenView;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
});
