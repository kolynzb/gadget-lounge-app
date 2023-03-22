import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Loginscreen from '../screens/auth/Loginscreen';
import Registerscreen from '../screens/auth/Registerscreen';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthScreenStack = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Loginscreen} />
      <AuthStack.Screen name="Register" component={Registerscreen} />
    </AuthStack.Navigator>
  );
};

export default AuthScreenStack;
