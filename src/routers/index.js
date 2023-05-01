import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn, SignUp, SplashScreen, Home, CashOnBank, CashOnHand} from '../pages';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
     <Stack.Screen
        name="CashOnHand"
        component={CashOnHand}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CashOnBank"
        component={CashOnBank}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
