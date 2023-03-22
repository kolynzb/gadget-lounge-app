import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootTabNavigator from './RootTabNavigator';

const index = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootTabNavigator />
    </NavigationContainer>
  );
};

export default index;
