import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import {ProfileStack2} from './Navigation2';

//screens
import MyProfile from '../MyProfile/MyProfile';

export function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyProfile" component={MyProfile} />
    </Stack.Navigator>
  );
}
