import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigation from './Navigation/TabNavigation';
import Settings from './MyProfile/Settings';
import ProductDetails from './ProductDetails';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Landing from './Auth/Landing';
import Favorites from './Favorites/Favorites';
import ForgotPassword from './Auth/ForgotPassword';
import ResetPassword from './Auth/ResetPassword';

import {MyOrderStack, MyBagStack, adressStack} from './Navigation/Navigation';
const Stack = createStackNavigator();

//redux
import {useSelector} from 'react-redux';

export default function Main() {
  const token = useSelector((state) => state.auth.token);
  return (
    <NavigationContainer>
      {!token.length ? (
        <Stack.Navigator
          screenOptions={({navigation}) => ({
            title: null,
            headerStyle: {elevation: 0, backgroundColor: 'transparent'},
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.iconContainer}>
                  <Icon name="arrow-back-ios" size={24} />
                </View>
              </TouchableOpacity>
            ),
          })}>
          <Stack.Screen
            options={{headerShown: false}}
            name="Landing"
            component={Landing}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
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
          <Stack.Screen
            options={({navigation}) => ({
              headerStyle: {backgroundColor: 'transparent', elevation: 0},
              title: null,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={styles.iconContainer}>
                    <Icon name="arrow-back-ios" size={23} />
                  </View>
                </TouchableOpacity>
              ),
              headerRight: () => (
                <View style={styles.headerRight}>
                  <Icon name="search" size={25} />
                </View>
              ),
            })}
            name="Settings"
            component={Settings}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 16,
  },
  headerRight: {
    marginRight: 16,
  },
});
