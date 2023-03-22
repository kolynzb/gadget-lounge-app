import {StyleSheet, ImageURISource, Image} from 'react-native';
import React from 'react';
import {Icon, Text, View} from '../layout';

type Props = {
  image: ImageURISource['uri'];
};

const ProductCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: props.image}} />
        <View style={styles.icon}>
          <Icon name="cards-heart-outline" size="extraLarge" color="black" />
        </View>
      </View>

      <Text style={styles.name}>ProductCard</Text>
      <View>
        <Text>Ugandan Used</Text>
        <Text>|</Text>
        <Text>ProductCard</Text>
      </View>
      <Text style={styles.price}>UGX 100,000</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {},
  image: {},
  icon: {},
  name: {},
  price: {},
});
