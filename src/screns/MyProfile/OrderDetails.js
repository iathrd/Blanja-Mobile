import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import {Button} from 'native-base';
import OrderProductCard from '../../components/OrderProductCard';

const data = [
  {id: '1', name: 'PPP', isPrimary: true},
  {id: '2', name: 'PPP', isPrimary: false},
  {id: '3', name: 'PPP', isPrimary: false},
];

export default function OrderDetails() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View>
            <View style={styles.infoWrapper}>
              <View>
                <Text style={styles.trackingNumber}>Order №1947034</Text>
              </View>
              <View>
                <Text style={styles.date}>05-12-2019</Text>
              </View>
            </View>
            <View style={styles.infoWrapper}>
              <View style={styles.trackingWrapper}>
                <View style={styles.labelWrapper}>
                  <Text style={styles.date}>Tracking number:</Text>
                </View>
                <View>
                  <Text style={styles.labelValue}>IW3475453455</Text>
                </View>
              </View>
              <View>
                <Text style={styles.status}>Delivered</Text>
              </View>
            </View>
            <View style={styles.productValueWrapper}>
              <Text style={styles.labelValue}>3 items</Text>
            </View>
          </View>
          <View>
            <FlatList
              data={data}
              renderItem={({item}) => <OrderProductCard data={item} />}
            />
          </View>
          <View style={styles.orderInformationWrapper}>
            <View style={styles.labelInfoWrapper}>
              <Text style={styles.orderInfoText}>Order information</Text>
            </View>
            <View>
              <View style={styles.contentWrapper}>
                <View style={styles.labelWr}>
                  <Text style={styles.labelInfo}>Shipping Address:</Text>
                </View>
                <View style={{width: '60%'}}>
                  <Text style={styles.infoValue}>
                    3 Newbridge Court ,Chino Hills, CA 91709, United States
                  </Text>
                </View>
              </View>
              <View style={styles.contentWrapper}>
                <View style={styles.labelWr}>
                  <Text style={styles.labelInfo}>Payment method:</Text>
                </View>
                <View>
                  <Text style={styles.infoValue}>Gopay</Text>
                </View>
              </View>
              <View style={styles.contentWrapper}>
                <View style={styles.labelWr}>
                  <Text style={styles.labelInfo}>Delivery method:</Text>
                </View>
                <View>
                  <Text style={styles.infoValue}>FedEx, 3 days, 15$</Text>
                </View>
              </View>
              <View style={styles.contentWrapper}>
                <View style={styles.labelWr}>
                  <Text style={styles.labelInfo}>Discount:</Text>
                </View>
                <View>
                  <Text style={styles.infoValue}>10%, Personal promo code</Text>
                </View>
              </View>
              <View style={styles.contentWrapper}>
                <View style={styles.labelWr}>
                  <Text style={styles.labelInfo}>Total Amount:</Text>
                </View>
                <View>
                  <Text style={styles.infoValue}>133$</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.btnWrapper}>
            <View style={styles.btn2Wrapper}>
              <Button style={styles.btnReorder} full bordered rounded>
                <Text style={styles.textReorder}>Reorder</Text>
              </Button>
            </View>
            <View style={styles.btn22Wrapper}>
              <Button style={styles.btnLeave} full rounded>
                <Text style={styles.btnText}>Leave feedback</Text>
              </Button>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
  },
  infoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  trackingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackingNumber: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: 'bold',
    color: '#222222',
  },
  date: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9B9B9B',
  },
  labelWrapper: {
    marginRight: 8,
  },
  labelValue: {
    fontSize: 14,
    lineHeight: 20,
    color: '#222222',
  },
  status: {
    fontSize: 14,
    lineHeight: 20,
    color: '#2AA952',
  },
  productValueWrapper: {
    marginBottom: 13,
  },
  orderInformationWrapper: {
    marginTop: 24,
  },
  orderInfoText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#222222',
  },
  labelInfoWrapper: {
    marginBottom: 15,
  },
  contentWrapper: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  labelWr: {
    marginRight: 10,
  },
  labelInfo: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9B9B9B',
  },
  infoValue: {
    fontSize: 14,
    lineHeight: 20,
    color: '#222222',
  },
  btnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
  },
  btn2Wrapper: {
    flex: 1,
    marginRight: 24,
  },
  btn22Wrapper: {
    flex: 1,
  },
  btnReorder: {
    borderColor: '#222222',
  },
  textReorder: {
    fontSize: 14,
    lineHeight: 20,
    color: '#222222',
  },
  btnLeave: {
    backgroundColor: '#DB3022',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
  },
});
