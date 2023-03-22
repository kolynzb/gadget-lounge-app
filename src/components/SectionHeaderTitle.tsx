import {StyleSheet} from 'react-native';
import React from 'react';
import {Text, View} from './layout';

type Props = {
  heading: string;
  route?: string;
};

const SectionHeaderTitle = ({heading, route = 'See All'}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.route}>{route}</Text>
    </View>
  );
};

export default SectionHeaderTitle;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
  },
  route: {},
});
