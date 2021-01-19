import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigation from './Navigation/TabNavigation';
import ShippingAdress from './ShippingAdress';
import Settings from './MyProfile/Settings';

import {MyOrderStack, MyBagStack} from './Navigation/Navigation';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={TabNavigation}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MyBags"
          component={MyBagStack}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MyOrders"
          component={MyOrderStack}
        />
        <Stack.Screen name="ShippingAdress" component={ShippingAdress} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
