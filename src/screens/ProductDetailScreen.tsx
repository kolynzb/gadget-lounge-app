import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ViewStyle,
  ColorValue,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  DetailsScreenNavigationProps,
  DetailsScreenRouteProps,
} from '../types/navigation';
import {Icon, ScreenView, Spacer} from '../components/layout';
import COLORS from '../constants/colors';
import Divider from '../components/layout/Divider';
import BrandBadge from '../components/badges/BrandBadge';
import ShowMore from '../components/ShowMoreBtn';
import LargeBtn from '../components/buttons/LargeBtn';
import {IProduct} from '../interfaces/product.interface';
import products from '../data/products';
import ProductSlider from '../components/ProductSlider';
import formatMoney from '../utils/formatMoney';
import QuantityBtn from '../components/buttons/QuantityBtn';

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

  let productPrice = formatMoney(product?.price as number);

  return (
    <ScreenView>
      <ScrollView>
        <ProductSlider product={product as IProduct} />
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
          <Divider size={0.5} horizontal />
          <Text style={styles.subtitle}>Description</Text>
          <ShowMore
            trimHeight={100}
            showLessText="view less"
            showMoreText="view more..."
            buttonColor="#000">
            <Text style={styles.paragraph}>{product?.description}</Text>
          </ShowMore>
          <Spacer size={20} />
          <View style={styles.specContainer}>
            <View style={styles.sizeContainer}>
              <Text style={styles.subtitle}>Size</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <SizeBtn active value={42} />
                <Spacer size={10} horizontal />
                <SizeBtn value={40} />
                <Spacer size={10} horizontal />
                <SizeBtn value={43} />
                <Spacer size={10} horizontal />
                <SizeBtn value={48} />
                <Spacer size={10} horizontal />
              </ScrollView>
            </View>
            <View style={styles.colorContainer}>
              <Text style={styles.subtitle}>Color</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <ColorBtn active backgroundColor="red" />
                <Spacer size={10} horizontal />
                <ColorBtn backgroundColor="blue" />
                <Spacer size={10} horizontal />
                <ColorBtn backgroundColor="green" />
                <Spacer size={10} horizontal />
                <ColorBtn backgroundColor="pink" />
                <Spacer size={10} horizontal />
                <ColorBtn backgroundColor="gray" />
                <Spacer size={10} horizontal />
                <ColorBtn backgroundColor="purple" />
                <Spacer size={10} horizontal />
              </ScrollView>
            </View>
          </View>
          <View style={styles.quantitySect}>
            <Text style={styles.subtitle}>Quantity</Text>
            <Spacer size={20} horizontal />
            <QuantityBtn maxQuantity={5} />
          </View>

          <Divider size={1} horizontal />
          <View style={styles.cartSect}>
            <View>
              <Text
                style={{
                  color: COLORS.black[1],
                  fontSize: 12,
                  fontWeight: '400',
                  opacity: 0.6,
                }}>
                Total price
              </Text>
              <Text
                style={{
                  color: COLORS.black[1],
                  fontSize: 20,
                  fontWeight: '500',
                }}>
                ${productPrice}
              </Text>
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

const SizeBtn = ({
  active = false,
  value,
}: {
  active?: boolean;
  value: number;
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.circularButton,
        {
          borderColor: active ? COLORS.black[1] : COLORS.gray[3],
          borderWidth: 1,
          backgroundColor: active ? COLORS.black[1] : 'transparent',
        },
      ]}>
      <Text
        style={{
          color: active ? COLORS.white : COLORS.gray[1],
          fontSize: 16,
        }}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const ColorBtn = ({
  backgroundColor,
  active = false,
}: {
  backgroundColor: ColorValue;
  active?: boolean;
}) => {
  return (
    <TouchableOpacity style={[styles.circularButton, {backgroundColor}]}>
      {active && <Icon name="tick" size="extraLarge" color="white" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: '300',
  },
  subtitle: {
    color: COLORS.black[1],
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 5,
  },
  specContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  colorContainer: {
    flex: 0.55,
  },
  sizeContainer: {
    flex: 0.4,
  },
  cartSect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  circularButton: {
    width: 38,
    height: 38,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantitySect: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  cartBtn: {
    width: Dimensions.get('window').width * 0.6,
  },
});
