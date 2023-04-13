import React from 'react';
import BottomTabNavigator, {RootTabParamList} from './BottomTabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import AuthScreenStack from './AuthStack';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import Homescreen from '../screens/Homescreen';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  AuthStack: undefined;
  Home: undefined;
  ProductDetails: {itemId: number; otherParam: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootTabNavigator = () => {
  const user = true;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {user ? (
        <>
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
          {/* Other screen go here */}
          <Stack.Screen
            name="Home"
            component={Homescreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailScreen}
            options={{headerShown: false}}
          />

          {/* <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{title: 'Oops!'}}
          /> */}
        </>
      ) : (
        <Stack.Screen name="AuthStack" component={AuthScreenStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootTabNavigator;
