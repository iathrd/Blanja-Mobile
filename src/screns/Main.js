import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigation from './Navigation/TabNavigation';
import Settings from './MyProfile/Settings';
import ProductDetails from './ProductDetails';
import Login from './Login';
import Register from './Register';
import Landing from './Landing';
import Favorites from './Favorites/Favorites';

import {MyOrderStack, MyBagStack, adressStack} from './Navigation/Navigation';
const Stack = createStackNavigator();

//redux
import {useSelector} from 'react-redux';

export default function Main() {
  const token = useSelector((state) => state.auth.token);
  return (
    <NavigationContainer>
      {!token.length ? (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Landing"
            component={Landing}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            options={{title: null}}
            name="Register"
            component={Register}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Main"
            component={TabNavigation}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Checkout"
            component={MyBagStack}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="MyOrders"
            component={MyOrderStack}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ShippingAdress"
            component={adressStack}
          />
          <Stack.Screen name="Favorites" component={Favorites} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
