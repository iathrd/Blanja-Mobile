import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import MyProfile from '../MyProfile/MyProfile';
import MyOrders from '../MyProfile/MyOrders';
import OrderDetails from '../MyProfile/OrderDetails';
import MyBag from '../Bag/MyBag';
import Checkout from '../Bag/Checkout';
import Success from '../Bag/Success';
import ShippingAdress from '../ShippingAdress';
import AddShippingAdress from '../AddShippingAdress';
import ChangeShippingAdress from '../ChangeShippingAdress';

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
      <Stack.Screen name="Success" component={Success} />
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

export function adressStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {fontSize: 18, lineHeight: 22, color: '#222222'},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        options={{title: 'Shipping address'}}
        name="ShippingAdress"
        component={ShippingAdress}
      />
      <Stack.Screen
        options={{title: 'Change adress'}}
        name="ChangeShippingAdress"
        component={ChangeShippingAdress}
      />
      <Stack.Screen
        options={{title: 'Adding Shipping Address'}}
        name="AddShippingAdress"
        component={AddShippingAdress}
      />
    </Stack.Navigator>
  );
}
