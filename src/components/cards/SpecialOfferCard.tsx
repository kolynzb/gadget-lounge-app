import {StyleSheet, Image, ImageURISource} from 'react-native';
import React from 'react';
import {Text, View} from '../layout';

type Props = {
  percentage: number;
  title: string;
  message: string;
  image: ImageURISource['uri'];
};

const SpecialOfferCard = (props: Props) => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={styles.leftcontainer}>
        <Text style={styles.percentage}>{props.percentage}%</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.message}>{props.message}</Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: props.image,
        }}
      />
    </View>
  );
};

export default SpecialOfferCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CD0421',
    height: 200,
    flexDirection: 'row',
    borderRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  shadowProp: {
    shadowColor: '#CD0421',
    // shadowOffset: {width: -2, height: 4},
    shadowOpacity: 1,
    shadowRadius: 30,
    elavation: 20,
  },
  leftcontainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: '100%',
    paddingVertical: 30,
    width: '60%',
  },
  percentage: {
    fontSize: 30,
    color: 'white',
    fontWeight: '800',
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  message: {
    fontSize: 12,
    color: 'white',
    fontWeight: '400',
  },
  image: {
    width: 100,
    height: 100,
  },
});
