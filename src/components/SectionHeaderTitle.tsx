import {StyleSheet, TouchableOpacity} from 'react-native';
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
      <TouchableOpacity>
        <Text style={styles.route}>{route}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeaderTitle;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
  },
  route: {
    fontWeight: '600',
  },
});