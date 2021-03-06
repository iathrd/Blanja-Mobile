import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import AdressCard from '../../components/AdressCard';
import PaymentMethod from '../../components/PaymentMethod';

import {useSelector, useDispatch} from 'react-redux';
import adressAction from '../../redux/actions/adresss';

export default function Checkout({navigation, route}) {
  const adress = useSelector((state) => state.adress.data);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(adressAction.getAdress(token));
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.parent}>
      <View style={styles.content}>
        <View style={styles.labelShipping}>
          <Text style={styles.labelText}>Shipping address</Text>
        </View>
        <View style={styles.cardAdressWrapper}>
          {adress[0] !== undefined ? (
            <AdressCard
              data={adress[0]}
              navigation={navigation}
              route={route}
            />
          ) : (
            <View>
              <View>
                <Text>
                  You don't have shipping adress please add adress to continue
                </Text>
              </View>
            </View>
          )}
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
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'Success'}],
              })
            }
            style={styles.btnSubmit}
            disabled={adress[0] !== undefined ? false : true}
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
