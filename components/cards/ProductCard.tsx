import { StyleSheet, ImageURISource, Image } from "react-native";
import React from "react";
import { Text, View } from "../layout";
import colors from "../../constants/colors";
import truncateString from "../../utils/truncateString";
import BrandBadge from "../badges/BrandBadge";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  product: {
    id: number;
    name: string;
    image: ImageURISource["uri"];
    price: number;
    rating: number;
    brand: string;
  };
};

const ProductCard = (props: Props) => {
  const { product } = props;

  return (
    <Link href={`/products/${product.id}`}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={{ uri: product.image }} />
          <View style={styles.icon}>
            <Ionicons name="heart-outline" size={30} color="white" />
          </View>
        </View>
        <View style={styles.bottomHalf}>
          <Text style={styles.name}>{truncateString(product.name, 18)}</Text>
          <View style={styles.middleSection}>
            <Ionicons name="heart-outline" size={30} color="black" />
            <Text style={styles.rating}>{product.rating}</Text>
            <Text style={styles.divider}>|</Text>
            <BrandBadge brandName={product.brand} />
          </View>
          <Text style={styles.price}>UGX{product.price}</Text>
        </View>
      </View>
    </Link>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    height: 320,
    // backgroundColor: 'red',
    // justifyContent: 'space-between',
    alignItems: "flex-start",
    width: 180,
    marginBottom: 20,
  },
  bottomHalf: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: 3,
  },
  middleSection: {
    flexDirection: "row",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  imgContainer: {
    backgroundColor: colors.gray[2],
    height: 175,
    width: "100%",
    borderRadius: 15,
    marginBottom: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  icon: {
    position: "absolute",
    top: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black[1],
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  name: {
    fontWeight: "700",
    fontSize: 18,
    color: colors.black[1],
    marginVertical: 2,
    opacity: 0.8,
  },
  divider: {
    fontWeight: "300",
    fontSize: 20,
    color: colors.gray[3],
  },
  rating: {
    fontWeight: "300",
    fontSize: 18,
    color: colors.gray[3],
  },
  price: {
    fontWeight: "600",
    fontSize: 20,
    color: colors.black[1],
    opacity: 0.7,
  },
});
