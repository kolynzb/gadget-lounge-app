import {StyleSheet, View as RNView, ViewStyle, StyleProp} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const View = (props: Props) => {
  return (
    <RNView style={[styles.container, props.style]}>{props.children}</RNView>
  );
};

export default View;

const styles = StyleSheet.create({
  container: {},
});
