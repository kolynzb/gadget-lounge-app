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
    <View style={styles.container}>
      <View style={styles.leftcontainer}>
        <Text>{props.percentage}%</Text>
        <Text>{props.title}</Text>
        <Text>{props.message}</Text>
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
    backgroundColor: 'red',
    height: 100,
    flexDirection: 'row',
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftcontainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  percentage: {
    fontSize: 30,
    color: 'white',
    fontWeight: '800',
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  message: {
    fontSize: 14,
    color: 'white',
    fontWeight: '400',
  },
  image: {
    width: 100,
    height: 100,
  },
});
