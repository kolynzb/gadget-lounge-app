import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
} from 'react-native';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import brands from '../data/brands';

const { width, height } = Dimensions.get("window");
const MIN_HEIGHT = 128;
export const MAX_HEIGHT = height / 2;
const itemStyles = StyleSheet.create({
  container: {
    width,
    height: MIN_HEIGHT,
    justifyContent: "flex-end",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 32,
    fontWeight: "500",
  },
  titleContainer: {
    maxHeight: MAX_HEIGHT * 0.61,
    justifyContent: "center",
    flex: 1,
  },
  mainTitle: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    padding: 32,
    transform: [{ translateY: 64 }],
  },
  subtitle: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

interface Item {
    title: string;
    subtitle: string;
    picture: number;
    top: number;
  }
  
  interface ItemProps {
    index: number;
    y: Animated.SharedValue<number>;
    item: Item;
  }

const Item = ({
    y,
    index,
    item: { title, subtitle, picture, top },
  }: ItemProps) => {
    const style = useAnimatedStyle(() => {
      return {
        height: interpolate(
          y.value,
          [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
          [MIN_HEIGHT, MAX_HEIGHT],
          Extrapolate.CLAMP
        ),
      };
    });
    const titleStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        y.value,
        [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
        [0, 1],
        Extrapolate.CLAMP
      );
      return {
        opacity,
      };
    });
    const pictureStyle = useAnimatedStyle(() => ({
      height: MAX_HEIGHT,
      top: interpolate(
        y.value,
        [(index - 1) * MAX_HEIGHT, index * MAX_HEIGHT],
        [-top, 0]
      ),
    }));
    return (
      <TouchableWithoutFeedback onPress={() => Alert.alert("Pressed!")}>
        <Animated.View style={[itemStyles.container, style]}>
          <Animated.Image
            source={picture}
            style={[itemStyles.picture, pictureStyle]}
          />
          <View style={itemStyles.titleContainer}>
            <Text style={itemStyles.subtitle}>{subtitle.toUpperCase()}</Text>
            <View style={itemStyles.mainTitle}>
              <Animated.View style={titleStyle}>
                <Text style={itemStyles.title}>{title.toUpperCase()}</Text>
              </Animated.View>
            </View>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    height: (brands.length + 1) * MAX_HEIGHT,
    backgroundColor: 'black',
  },
});

const BrandScreen = () => {
  const y = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {y: value}}) => {
      y.value = value;
    },
  });

  return (
    <>
      <StatusBar hidden />
      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        snapToInterval={MAX_HEIGHT}>
        <Animated.View style={styles.container}>
          {brands.map((item: any, index: any) => (
            <Item item={item} key={index} y={y} index={index} />
          ))}
        </Animated.View>
      </Animated.ScrollView>
    </>
  );
};

export default BrandScreen;
