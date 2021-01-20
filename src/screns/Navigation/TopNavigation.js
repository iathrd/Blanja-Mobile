import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Women from '../Shop/Women';
import Men from '../Shop/Men';
import Kids from '../Shop/Kids';

export const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Women"
      tabBarOptions={{
        style: {backgroundColor: '#FFFFFF'},
        activeTintColor: '#222222',
        inactiveTintColor: '#9b9b9b',
        indicatorStyle: {
          backgroundColor: '#DB3022',
          borderWidth: 1.3,
          borderColor: '#DB3022',
        },
        labelStyle: {
          textTransform: 'none',
          fontSize: 16,
          lineHeight: 16,
        },
      }}>
      <Tab.Screen options={{title: 'Women'}} name="Women" component={Women} />
      <Tab.Screen name="Men" component={Men} />
      <Tab.Screen name="Kids" component={Kids} />
    </Tab.Navigator>
  );
};
