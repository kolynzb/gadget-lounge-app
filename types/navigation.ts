import {RootStackParamList} from '../navigation/RootTabNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

// Product Details Screen

import {RouteProp} from '@react-navigation/native';

export type DetailsScreenRouteProps = RouteProp<RootStackParamList, 'ProductDetails'>;

export type DetailsScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;
