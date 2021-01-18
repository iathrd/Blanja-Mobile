import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Card, CardItem, Left, Right, Body} from 'native-base';

export default function AdressCard({data, navigation}) {
  return (
    <View style={styles.cardWrapper}>
      <Card style={styles.card}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          style={styles.touch}
          onPress={() => navigation.navigation('ShippingAdress')}>
          <View style={data.isPrimary ? styles.primaryAdress : ''}>
            <CardItem style={styles.headerCard}>
              <Left>
                <Text style={styles.name}>Jane Doe</Text>
              </Left>
              <Right>
                <Text style={styles.changeText}>Change</Text>
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
        </TouchableHighlight>
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
  },
  cardWrapper: {
    marginBottom: 5,
  },
});
