import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import Home from './Home/Home';
import MyProfile from '../screns/MyProfile/MyProfile';

import {ProfileStack} from './Navigation/Navigation';
import TabNavigation from './Navigation/TabNavigation';
import MyOrders from './MyProfile/MyOrders';

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={TabNavigation}
        />
        <Stack.Screen name="MyOrders" component={MyOrders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
