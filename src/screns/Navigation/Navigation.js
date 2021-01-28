import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

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
import Home from '../Home/Home';
import Catalog from '../Shop/Catalog';

//tab navigation
import {MainTab} from '../Navigation/TopNavigation';

export function Homes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  );
}

export function Shops() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerStyle: {elevation: 0}}}
        name="Shop"
        component={MainTab}
      />
      <Stack.Screen
        options={{headerStyle: {elevation: 0}, title: null}}
        name="Catalog"
        component={Catalog}
      />
    </Stack.Navigator>
  );
}

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
      <Stack.Screen
        options={{headerShown: false}}
        name="Success"
        component={Success}
      />
    </Stack.Navigator>
  );
}

export function MyProfiles() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'transparent', elevation: 0},
        title: null,
        headerRight: () => (
          <View style={styles.iconWrapper}>
            <Icon name="search" size={27} />
          </View>
        ),
      }}>
      <Stack.Screen name="MyProfile" component={MyProfile} />
    </Stack.Navigator>
  );
}

export function MyOrderStack() {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTitleAlign: 'center',
        headerStyle: {elevation: 0},
        headerRight: () => (
          <View style={styles.iconWrapper}>
            <Icon name="search" size={25} />
          </View>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.iconLeft}>
              <Icon name="arrow-back-ios" size={23} />
            </View>
          </TouchableOpacity>
        ),
      })}>
      <Stack.Screen
        options={{title: null}}
        name="MyOrders"
        component={MyOrders}
      />
      <Stack.Screen
        name="OrderDetails"
        options={{title: 'Order Details'}}
        component={OrderDetails}
      />
    </Stack.Navigator>
  );
}

export function adressStack() {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTitleStyle: styles.headerText,
        headerTitleAlign: 'center',
        headerStyle: {elevation: 1},
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.iconLeft}>
              <Icon name="arrow-back-ios" size={23} />
            </View>
          </TouchableOpacity>
        ),
      })}>
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

const styles = StyleSheet.create({
  iconWrapper: {
    marginRight: 16,
  },
  iconLeft: {
    marginLeft: 16,
  },
  headerText: {
    fontSize: 18,
    lineHeight: 22,
    color: '#222222',
  },
});
