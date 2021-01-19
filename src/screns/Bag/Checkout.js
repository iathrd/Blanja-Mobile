import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import AdressCard from '../../components/AdressCard';
import PaymentMethod from '../../components/PaymentMethod';

const data = [{name: 'PPP', isPrimary: false}];

export default function Checkout({navigation, route}) {
  return (
    <View style={styles.parent}>
      {console.log(route)}
      <View style={styles.content}>
        <View style={styles.labelShipping}>
          <Text style={styles.labelText}>Shipping address</Text>
        </View>
        <View style={styles.cardAdressWrapper}>
          <AdressCard data={data} navigation={navigation} route={route} />
        </View>
        <View>
          <View style={styles.labelPayment}>
            <Text style={styles.labelText}>Payment</Text>
          </View>
          <View>
            <PaymentMethod />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <View style={styles.listOrder}>
            <View>
              <Text style={styles.labelOrder}>Order:</Text>
            </View>
            <View>
              <Text style={styles.price}>112$</Text>
            </View>
          </View>
          <View style={styles.listOrder}>
            <View>
              <Text style={styles.labelOrder}>Delivery:</Text>
            </View>
            <View>
              <Text style={styles.price}>15$</Text>
            </View>
          </View>
          <View style={styles.listOrder}>
            <View>
              <Text style={styles.labelOrderSummary}>Summary:</Text>
            </View>
            <View>
              <Text style={styles.summaryPrice}>127$</Text>
            </View>
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <Button
            onPress={() => navigation.navigate('Success')}
            style={styles.btnSubmit}
            full
            rounded>
            <Text style={styles.btnText}>SUBMIT ORDER</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 16,
    paddingRight: 16,
  },
  parent: {
    flex: 1,
  },
  labelText: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    color: '#222222',
  },
  labelShipping: {
    marginBottom: 21,
  },
  cardAdressWrapper: {
    marginBottom: 57,
  },
  labelPayment: {
    marginBottom: 14,
  },
  footer: {
    backgroundColor: '#FFFFFF',
    paddingTop: 25,
    paddingLeft: 16,
    paddingRight: 19,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  listOrder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  labelOrder: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9b9b9b',
  },
  price: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    color: '#222222',
  },
  labelOrderSummary: {
    fontSize: 16,
    lineHeight: 16,
    color: '#9b9b9b',
  },
  summaryPrice: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#222222',
  },
  btnWrapper: {
    marginBottom: 20,
  },
  btnSubmit: {
    backgroundColor: '#DB3022',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
  },
});
