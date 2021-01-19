import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Right, Body} from 'native-base';

export default function AdressCard({data, navigation, route}) {
  return (
    <View style={styles.cardWrapper}>
      {console.log(route)}
      <Card style={styles.card}>
        <View style={data.isPrimary ? styles.primaryAdress : styles.adressB}>
          <CardItem style={styles.headerCard}>
            <Left>
              <Text style={styles.name}>Jane Doe</Text>
            </Left>
            <Right>
              <TouchableOpacity
                onPress={
                  route.name !== 'Checkout'
                    ? () => navigation.navigate('ChangeShippingAdress')
                    : () => navigation.navigate('ShippingAdress')
                }>
                <Text style={styles.changeText}>Change</Text>
              </TouchableOpacity>
            </Right>
          </CardItem>
          <CardItem style={styles.adressContent}>
            <Body style={styles.bodyWrapper}>
              <View>
                <Text style={styles.adress}>
                  3 Newbridge Court Chino Hills, CA 91709, United States
                </Text>
              </View>
            </Body>
          </CardItem>
        </View>
      </Card>
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
    elevation: 2,
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
});
