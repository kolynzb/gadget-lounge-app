import React from 'react';
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import TicketScreen from '../screens/TicketScreen';

import {Pressable, StyleSheet, View} from 'react-native';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './RootTabNavigator';
import Icon from '../components/layout/Icon';
import BrandScreen from '../screens/BrandScreen';

export type RootTabParamList = {
  Home: undefined;
  Brands: undefined;
  Location: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 60,
          backgroundColor: '#fff',
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={({navigation}: RootTabScreenProps<'Home'>) => ({
          title: 'Home',

          tabBarIcon: ({color}) => (
            <TabBarIcon name="home-variant-outline" color={color} />
            // TODO: Addd a line at the bottom and add focused prop
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Home')}
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Icon
                name="info"
                size="small"
                color={'color goes here'}
                //   style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <Tab.Screen
        name="Brands"
        component={BrandScreen}
        options={{
          title: 'Brands',
          tabBarIcon: ({color}) => (
            <TabBarIcon name="ticket-confirmation-outline" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={TicketScreen}
        options={{
          title: 'Location',
          tabBarIcon: ({color}) => (
            <TabBarIcon name="location-pin" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TicketScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Icon>['name'];
  color: string;
  style?: any;
}) {
  return (
    <Icon
      size="large"
      name={props.name}
      color={props.color}
      style={props.style}
    />
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabBarIcon: {},
});
