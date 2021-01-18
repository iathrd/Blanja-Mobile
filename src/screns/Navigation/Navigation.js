import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import MyProfile from '../MyProfile/MyProfile';
import MyOrders from '../MyProfile/MyOrders';
import OrderDetails from '../MyProfile/OrderDetails';

export function MyProfiles() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyProfile" component={MyProfile} />
    </Stack.Navigator>
  );
}

export function MyOrderStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyOrders" component={MyOrders} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
    </Stack.Navigator>
  );
}
