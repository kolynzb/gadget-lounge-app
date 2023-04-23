import ReactNative, {
  Animated,
  StyleSheet,
  FlatList,
  Easing,
  Dimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import { IProduct } from "../interfaces/product.interface";
import { Text, View } from "./layout";
import COLORS from "../constants/colors";

const { width, height } = Dimensions.get("screen");
const containerHeight = height * 0.42;

type Props = {
  product: IProduct;
};

const ProductSlider = ({ product }: Props) => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (
    event: ReactNative.NativeSyntheticEvent<ReactNative.NativeScrollEvent>
  ) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };
  const handleOnViewableItemsChanged = useRef(({ viewableItems }: any) => {
    setIndex(viewableItems.indexOf(viewableItems[0]));
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={SliderStyles.sliderContainer}>
      <FlatList
        data={product?.images}
        renderItem={({ item }) => <SliderItem imgUrl={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        onScroll={handleOnScroll}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <SliderPagination
        data={product?.images}
        scrollX={scrollX}
        index={index}
      />
    </View>
  );
};

const SliderStyles = StyleSheet.create({
  sliderContainer: {
    backgroundColor: COLORS.gray[5],
    height: containerHeight,
    marginBottom: 10,
  },
});

type SliderItemProps = {
  imgUrl: string;
};

const SliderItem = ({ imgUrl }: SliderItemProps) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={SliderItemStyles.sliderContainer}>
      <Animated.Image
        source={{
          uri: imgUrl,
        }}
        resizeMode="contain"
        style={[
          SliderItemStyles.sliderImage,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const SliderItemStyles = StyleSheet.create({
  sliderContainer: {
    alignItems: "center",
    justifyContent: "center",
    width,
    height: containerHeight,
  },
  sliderImage: {
    flex: 1,
    width: 500,
  },
});

type SliderPaginationProps = {
  data: any;
  scrollX: any;
  index: any;
};

const SliderPagination = ({ data, scrollX, index }: SliderPaginationProps) => {
  return (
    <View style={SliderPaginationStyles.container}>
      {data?.map((_: any, idx: number) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.1],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#878787", "#000", "#878787"],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={idx.toString()}
            style={[
              SliderPaginationStyles.dot,
              { width: dotWidth, backgroundColor, opacity },
            ]}
          />
        );
      })}
    </View>
  );
};

const SliderPaginationStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 35,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: "#878787",
  },
  dotActive: {
    backgroundColor: "#000",
  },
});

export default ProductSlider;
