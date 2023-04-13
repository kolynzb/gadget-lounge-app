import {StyleSheet, ImageURISource, Image} from 'react-native';
import React from 'react';
import {Icon, Text, View} from '../layout';
import colors from '../../constants/colors';
import truncateString from '../../utils/truncateString';
import {TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/RootTabNavigator';
import {CompositeNavigationProp} from '@react-navigation/native';
import BrandBadge from '../badges/BrandBadge';

type ProductCardNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'ProductDetails'>,
  NativeStackNavigationProp<RootStackParamList>
>;

type Props = {
  navigation: ProductCardNavigationProp;
  product: {
    id: number;
    name: string;
    image: ImageURISource['uri'];
    price: number;
    rating: number;
    brand: string;
  };
};

const ProductCard = (props: Props) => {
  const {navigation, product} = props;

  const handlePress = () => {
    navigation.navigate('ProductDetails', {
      itemId: product.id,
      otherParam: product.name,
    });
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.imgcontainer}>
          <Image style={styles.image} source={{uri: product.image}} />
          <View style={styles.icon}>
            <Icon name="cards-heart-outline" size="extraLarge" color="white" />
          </View>
        </View>
        <View style={styles.bottomhalf}>
          <Text style={styles.name}>{truncateString(product.name, 18)}</Text>
          <View style={styles.middlesect}>
            <Icon name="cards-heart-outline" size="extraLarge" color="black" />
            <Text style={styles.rating}>{product.rating}</Text>
            <Text style={styles.divider}>|</Text>
            <BrandBadge brandname={product.brand} />
          </View>
          <Text style={styles.price}>UGX{product.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    height: 320,
    // backgroundColor: 'red',
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: 180,
    marginBottom: 20,
  },
  bottomhalf: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: 3,
  },
  middlesect: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  imgcontainer: {
    backgroundColor: colors.gray[2],
    height: 175,
    width: '100%',
    borderRadius: 15,
    marginBottom: 14,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black[1],
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  name: {
    fontWeight: '700',
    fontSize: 18,
    color: colors.black[1],
    marginVertical: 2,
    opacity: 0.8,
  },
  divider: {
    fontWeight: '300',
    fontSize: 20,
    color: colors.gray[3],
  },
  rating: {
    fontWeight: '300',
    fontSize: 18,
    color: colors.gray[3],
  },
  price: {
    fontWeight: '700',
    fontSize: 20,
    color: colors.black[1],
    opacity: 0.7,
  },
});
