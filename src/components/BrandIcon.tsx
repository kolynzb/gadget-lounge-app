import {StyleSheet, Image, ImageURISource} from 'react-native';
import React from 'react';
import {Text, View} from './layout';
import colors from '../constants/colors';
import truncateString from '../utils/truncateString';

type Props = {
  name: string;
  image: ImageURISource['uri'];
};

const BrandIcon = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image
          source={{
            uri: props.image,
          }}
          style={styles.logo}
        />
      </View>
      <Text style={styles.brand}>{truncateString(props.name, 8)}</Text>
    </View>
  );
};

export default BrandIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    marginBottom: 20,
  },
  logocontainer: {
    backgroundColor: colors.gray[4],
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  logo: {
    width: 50,
    height: 50,
  },
  brand: {
    fontWeight: '400',
    fontSize: 14,
    color: colors.black[1],
  },
});
