import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Right, Body} from 'native-base';

export default function AdressCard({data, navigation, route}) {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.name}>{data.recipient}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={
                route.name !== 'Checkout'
                  ? () => navigation.navigate('ChangeShippingAdress', {data})
                  : () => navigation.navigate('ShippingAdress')
              }>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.adress}>
            {`${data.adress}, ${data.postalCode}, ${data.city}`}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#222222',
  },
  changeText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#DB3022',
  },
  bodyWrapper: {
    paddingRight: 50,
    paddingBottom: 15,
  },
  headerCard: {
    paddingBottom: 0,
    borderRadius: 8,
  },
  adress: {
    fontSize: 14,
    color: '#222222',
  },
  card: {
    borderRadius: 8,
    paddingLeft: 28,
    paddingTop: 18,
    paddingBottom: 21,
    paddingRight: 23,
    backgroundColor: 'white',
    elevation: 2,
    marginBottom: 15,
  },
  adressContent: {
    borderRadius: 8,
  },
  touch: {
    borderRadius: 8,
  },
  primaryAdress: {
    borderRadius: 8,
    borderColor: '#DB3022',
    borderWidth: 1,
    paddingLeft: 10,
    paddingTop: 8,
    paddingRight: 10,
  },
  cardWrapper: {
    marginBottom: 5,
  },
  adressB: {
    paddingLeft: 10,
    paddingTop: 8,
    paddingRight: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardBody: {
    marginTop: 7,
  },
});
