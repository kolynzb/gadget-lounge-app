import {StyleSheet, Image, ImageURISource} from 'react-native';
import React from 'react';
import {Text, View} from './layout';
import colors from '../constants/colors';

type Props = {
  name: string;
  image: ImageURISource['uri'];
};

const BrandIcon = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.image,
        }}
        style={styles.logo}
      />
      <Text>BrandIcon</Text>
    </View>
  );
};

export default BrandIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: colors.gray[4],
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  brand: {
    fontWeight: '400',
    fontSize: 14,
  },
});
