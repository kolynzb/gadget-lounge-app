import {StyleSheet, Image, ImageURISource} from 'react-native';
import React from 'react';
import {Text, View} from './layout';
import colors from '../constants/colors';
import truncateString from '../utils/truncateString';

type Props = {
  name: string;
  image: ImageURISource['uri'];
};

const BrandIcon: React.FC<Props> = ({name, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.logo}
        />
      </View>
      <Text style={styles.brand}>{truncateString(name, 8)}</Text>
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
  logoContainer: {
    backgroundColor: colors.gray[4],
    borderRadius: 50,
    width: 60,
    height: 60,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
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
