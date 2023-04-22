import React, {useCallback} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Extrapolate,
  interpolate,
} from 'react-native-reanimated';
import {IOnboardingScreen} from '../interfaces/onboarding.interface';
import COLORS from '../constants/colors';
import {Icon, Text, View} from '../components/layout';
import {ONBOARDINGPAGES} from '../data/onboarding';

// https://youtu.be/OT-73hpwxXQ

const OnBoardingScreen = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translateX.value = event.contentOffset.x;
    },
  });

  const activeIndex = useDerivedValue(() => {
    return Math.round(translateX.value / PAGE_WIDTH);
  });

  const scrollRef = useAnimatedRef<ScrollView>();

  const onIconPress = useCallback(() => {
    if (activeIndex.value === ONBOARDINGPAGES.length - 1) return;
    scrollRef.current?.scrollTo({x: PAGE_WIDTH * (activeIndex.value + 1)});
  }, []);

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Animated.ScrollView
        ref={scrollRef as any}
        style={{flex: 1}}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        {ONBOARDINGPAGES.map((page, index) => (
          <OnBoardingPage
            key={index.toString()}
            page={page}
            translateX={translateX}
            index={index}
          />
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
        {/* Paginator */}
        <View style={[styles.fillCenter, {flexDirection: 'row'}]}>
          {ONBOARDINGPAGES.map((_, index) => {
            return (
              <Dot
                key={index.toString()}
                index={index}
                activeDotIndex={activeIndex}
              />
            );
          })}
        </View>
        {/* Text Container */}
        <View style={styles.fillCenter}>
          <Text style={styles.text}>View Board</Text>
        </View>
        {/* iconContainer */}
        <View style={styles.fillCenter}>
          <TouchableOpacity onPress={onIconPress}>
            <Icon name="arrowright" size="medium" color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white[1],
  },
  footer: {
    height: 50,
    marginBottom: 50,
    flexDirection: 'row',
  },
  fillCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1.7,
    fontWeight: '500',
  },
});

export default OnBoardingScreen;

// Page
interface OnBoardingPageProps {
  page: IOnboardingScreen;
  translateX: Animated.SharedValue<number>;
  index: number;
}

const {width: PAGE_WIDTH, height: PAGE_HEIGHT} = Dimensions.get('window');

const OnBoardingPage: React.FC<OnBoardingPageProps> = ({
  page,
  translateX,
  index,
}) => {
  const inputRange = [
    (index - 1) * PAGE_WIDTH,
    index * PAGE_WIDTH,
    (index + 1) * PAGE_WIDTH,
  ];

  const rCircleStyle = useAnimatedStyle(() => {
    // if index === 0
    // [ -PAGE_WIDTH, 0, PAGE_WIDTH]
    // [ 0, 1, 0]

    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale}],
    };
  });

  const rImageStyle = useAnimatedStyle(() => {
    const progress = interpolate(
      translateX.value,
      inputRange,
      [0, 0, 1],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      translateX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
      transform: [
        {
          rotate: `${progress * Math.PI}rad`,
        },
      ],
    };
  });

  return (
    <View style={pageStyles.container}>
      <View style={pageStyles.circleContainer}>
        <Animated.View style={[pageStyles.circle, rCircleStyle]} />
        <Animated.Image
          source={page.source}
          style={[pageStyles.image, rImageStyle]}
          resizeMode={'contain'}
        />
      </View>
      <Text style={pageStyles.title}>{page.title}</Text>
      <Text style={pageStyles.description}>{page.description}</Text>
    </View>
  );
};

const CIRCLE_WIDTH = PAGE_WIDTH * 0.7;

const pageStyles = StyleSheet.create({
  container: {
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  circleContainer: {
    width: CIRCLE_WIDTH,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 120,
  },
  image: {
    height: PAGE_HEIGHT * 0.5,
    aspectRatio: 1,
    position: 'absolute',
  },
  circle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: CIRCLE_WIDTH / 2,
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '700',
    marginBottom: 15,
  },
  description: {textAlign: 'center', fontSize: 14, color: 'grey'},
});

//  dot component
interface DotProps {
  index: number;
  activeDotIndex: Animated.SharedValue<number>;
}

const Dot: React.FC<DotProps> = ({activeDotIndex, index}) => {
  const rDotStyle = useAnimatedStyle(() => {
    const isActive = activeDotIndex.value === index;
    return {
      backgroundColor: withTiming(isActive ? 'black' : 'white', {
        duration: 150,
      }),
    };
  });

  return <Animated.View style={[dotStyles.dot, rDotStyle]} />;
};

const dotStyles = StyleSheet.create({
  dot: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
});
