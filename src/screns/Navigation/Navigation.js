import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import MyProfile from '../MyProfile/MyProfile';
import MyOrders from '../MyProfile/MyOrders';
import OrderDetails from '../MyProfile/OrderDetails';
import MyBag from '../Bag/MyBag';
import Checkout from '../Bag/Checkout';

export function MyBags() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyBag" component={MyBag} />
    </Stack.Navigator>
  );
}

export function MyBagStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}

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
