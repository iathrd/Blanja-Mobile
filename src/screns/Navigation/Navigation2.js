import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import MyOrder from '../MyProfile/MyOrders';

export function ProfileStack2() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyOrders" component={MyOrder} />
    </Stack.Navigator>
  );
}
