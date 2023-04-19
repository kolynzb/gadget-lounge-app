import {Dimensions, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  DetailsScreenNavigationProps,
  DetailsScreenRouteProps,
} from '../types/navigation';
import colors from '../constants/colors';
import {Icon, ScreenView, Spacer} from '../components/layout';
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
    <ScreenView>
      <ScrollView>
        {/* Slider */}
        <View style={styles.sliderContainer}></View>
        <View style={styles.BottomContainer}>
          <View style={styles.titleSection}>
            <Text style={styles.productName}>{product?.name}</Text>
            <Icon name="cards-heart-outline" size="extraLarge" color="#000" />
          </View>
          <View style={styles.reviewSection}>
            <BrandBadge brandName="apple" />
            <Icon name="cards-heart-outline" size="extraLarge" color="#000" />
            <Text style={styles.paragraph}>
              {product?.rating} ({product?.reviews} reviews)
            </Text>
          </View>
          <Divider size={2} horizontal />
          <Text style={styles.subtitle}>Description</Text>
          <ShowMore
            trimHeight={100}
            showLessText="view less"
            showMoreText="view more"
            buttonColor="#000">
            <Text style={styles.paragraph}>{product?.description}</Text>
          </ShowMore>
          <Spacer size={20} />

          <Divider size={2} horizontal />
          <View style={styles.cartSect}>
            <View>
              <Text>Total price</Text>
              <Text>{product?.price} </Text>
            </View>
            <LargeBtn
              style={styles.cartBtn}
              iconName="cards-heart-outline"
              title="Add to Cart"
            />
          </View>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  sliderContainer: {
    backgroundColor: colors.gray[5],
    height: Dimensions.get('window').height * 0.42,
    marginBottom: 10,
  },
  BottomContainer: {
    backgroundColor: 'white',
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  productName: {
    color: COLORS.black[1],
    fontWeight: 'bold',
    fontSize: 25,
  },
  reviewSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: Dimensions.get('window').width * 0.6,
  },
  paragraph: {
    color: COLORS.black[1],
  },
  subtitle: {
    color: COLORS.black[1],
    fontWeight: 'bold',
  },
  cartSect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartBtn: {
    width: Dimensions.get('window').width * 0.6,
  },
});
