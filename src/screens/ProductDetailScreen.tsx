import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
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

type DetailsScreenProps = {
  route: DetailsScreenRouteProps;
  navigation: DetailsScreenNavigationProps;
};

const ProductDetailScreen = (props: DetailsScreenProps) => {
  const {itemId, otherParam} = props.route.params;
  return (
    <View>
      <Text>ProductDetailScreen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Other Param: {otherParam}</Text>
    </View>
  );
};

const ProductDetailScreenSample = (props: DetailsScreenProps) => {
  const {itemId, otherParam} = props.route.params;
  return (
    <View>
      {/* Slider */}
      <View style={styles.sliderContainer}></View>
      <View style={styles.BottomContainer}>
        <View style={styles.titleSection}>
          <Text style={styles.productName}>Air Jordan 3 Retro</Text>
          <Icon name="cards-heart-outline" size="extraLarge" color="white" />
        </View>
        <View style={styles.reviewSection}>
          <BrandBadge brandname="apple" />
          <Icon name="cards-heart-outline" size="extraLarge" color="white" />
          <Text style={styles.paragraph}>4.9 (6,573 reviews)</Text>
        </View>
        <Divider size={2} horizontal />
        <Text style={styles.subtitle}>Description</Text>
        <ShowMore height={100}>
          <Text style={styles.paragraph}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            beatae ratione a blanditiis nisi sapiente hic dicta exercitationem,
            sunt voluptatum?
          </Text>
        </ShowMore>
        <Spacer size={20} />

        <Divider size={2} horizontal />
        <View style={styles.cartSect}>
          <View>
            <Text>Total price</Text>
            <Text>$105.00</Text>
          </View>
          <LargeBtn iconname="cards-heart-outline" title="Add to Cart" />
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
  productName: {},
  reviewSection: {},
  paragraph: {},
  subtitle: {},
  cartSect: {},
});
