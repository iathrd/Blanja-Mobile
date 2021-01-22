import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Card, CardItem, Left, Right, Body} from 'native-base';

export default function OrderCard({data, navigation}) {
  return (
    <View style={styles.cardWrapper}>
      <Card style={styles.card}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => console.log('PPP')}>
          <View>
            <CardItem style={styles.headerCard}>
              <Left>
                <Text style={styles.orderNo}>Order №1947034</Text>
              </Left>
              <Right>
                <Text style={styles.date}>05-12-2019</Text>
              </Right>
            </CardItem>
            <CardItem style={styles.cardBottom}>
              <Body>
                <View style={styles.infoWrapper}>
                  <View style={styles.trackingWrapper}>
                    <Text style={styles.orderLabel}>Tracking number:</Text>
                  </View>
                  <View>
                    <Text style={styles.orderValue}>IW3475453455</Text>
                  </View>
                </View>
                <View style={styles.infoWrapper}>
                  <View style={styles.trackingWrapper}>
                    <Text style={styles.orderLabel}>Quantity:</Text>
                  </View>
                  <View>
                    <Text style={styles.orderValue}>3</Text>
                  </View>
                </View>
                <View style={styles.infoWrapper}>
                  <View style={styles.trackingWrapper}>
                    <Text style={styles.orderLabel}>Total Amount:</Text>
                  </View>
                  <View>
                    <Text style={styles.orderPrice}>112$</Text>
                  </View>
                </View>
                <View style={styles.statusWrapper}>
                  <View style={styles.statusDisplay}>
                    <Text style={styles.statusValue}>Delivered</Text>
                  </View>
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
  cardWrapper: {
    marginBottom: 20,
    paddingLeft: 2,
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  trackingWrapper: {
    marginRight: 10,
  },
  orderLabel: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9B9B9B',
  },
  orderNo: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    color: '#222222',
  },
  orderValue: {
    fontSize: 14,
    lineHeight: 20,
    color: '#222222',
  },
  orderPrice: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#222222',
  },
  statusWrapper: {
    width: '100%',
  },
  statusDisplay: {
    alignSelf: 'flex-end',
  },
  statusValue: {
    fontSize: 14,
    lineHeight: 20,
    color: '#2AA952',
  },
  card: {
    // paddingBottom: 13,
    borderRadius: 8,
    elevation: 2,
  },
  headerCard: {
    borderRadius: 8,
    paddingBottom: 0,
  },
  date: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9B9B9B',
  },
  cardBottom: {
    paddingBottom: 30,
    borderRadius: 8,
  },
});
