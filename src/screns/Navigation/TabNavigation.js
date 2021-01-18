import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//stackScreens
import {ProfileStack} from './Navigation';

//screens
import Home from '../Home/Home';
import MyProfile from '../MyProfile/MyProfile';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#DB3022',
        inactiveTintColor: '#DADADA',
        labelStyle: {fontSize: 12, fontWeight: 'bold'},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="cart" size={size} color={color} />
          ),
        }}
        name="Shop"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon2 name="shopping-bag" size={size} color={color} />
          ),
        }}
        name="Bag"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
        name="Favorites"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon name="account" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
}
