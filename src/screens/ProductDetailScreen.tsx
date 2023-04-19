import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  DetailsScreenNavigationProps,
  DetailsScreenRouteProps,
} from '../types/navigation';
import colors from '../constants/colors';
import {Icon, Spacer} from '../components/layout';
import COLORS from '../constants/colors';
import Divider from '../components/layout/Divider';
import BrandBadge from '../components/badges/BrandBadge';
import ShowMore from '../components/ShowMoreBtn';
import LargeBtn from '../components/buttons/LargeBtn';
import {IProduct} from '../interfaces/product.interface';
import products from '../data/products';

type DetailsScreenProps = {
  route: DetailsScreenRouteProps;
  navigation: DetailsScreenNavigationProps;
};

const ProductDetailScreen = (props: DetailsScreenProps) => {
  const {itemId, otherParam} = props.route.params;
  const [product, setProduct] = useState<IProduct | undefined>();

  useEffect(() => {
    const productData = products[itemId];

    setProduct(productData);
  }, [itemId]);

  return (
    <View>
      {/* Slider */}
      <View style={styles.sliderContainer}></View>
      <View style={styles.BottomContainer}>
        <View style={styles.titleSection}>
          <Text style={styles.productName}>{product?.name}</Text>
          <Icon name="cards-heart-outline" size="extraLarge" color="white" />
        </View>
        <View style={styles.reviewSection}>
          <BrandBadge brandName="apple" />
          <Icon name="cards-heart-outline" size="extraLarge" color="white" />
          <Text style={styles.paragraph}>
            {product?.rating} ({product?.reviews} reviews)
          </Text>
        </View>
        <Divider size={2} horizontal />
        <Text style={styles.subtitle}>Description</Text>
        <ShowMore trimHeight={100}>
          <Text style={styles.paragraph}>{product?.description}</Text>
        </ShowMore>
        <Spacer size={20} />

        <Divider size={2} horizontal />
        <View style={styles.cartSect}>
          <View>
            <Text>Total price</Text>
            <Text>{product?.price} </Text>
          </View>
          <LargeBtn iconName="cards-heart-outline" title="Add to Cart" />
        </View>
      </View>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  sliderContainer: {
    backgroundColor: colors.gray[5],
  },
  BottomContainer: {
    backgroundColor: 'white',
  },
  titleSection: {},
  productName: {
    color: COLORS.black[1],
  },
  reviewSection: {},
  paragraph: {
    color: COLORS.black[1],
  },
  subtitle: {
    color: COLORS.black[1],
  },
  cartSect: {},
});
