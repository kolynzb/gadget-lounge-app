import {StyleSheet} from 'react-native';
import React from 'react';
import {Text, View} from './layout';

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>SearchBar</Text>
      
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {},
});
