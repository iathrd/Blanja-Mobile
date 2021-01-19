import {Button} from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import OrderProductCard from '../../components/OrderProductCard';

const data = [
  {id: '1', name: 'PPP', isPrimary: true},
  {id: '2', name: 'PPP', isPrimary: false},
];

export default function MyBag({route, navigation}) {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.content}>
        <View style={styles.labelWrapper}>
          <Text style={styles.labelText}>My Bag</Text>
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <OrderProductCard
                data={item}
                route={route}
                navigation={navigation}
              />
            )}
          />
        </View>
      </View>
      <View style={styles.footerWrapper}>
        <View style={styles.totalWrapper}>
          <View>
            <Text style={styles.textTotal}>Total amount:</Text>
          </View>
          <View>
            <Text style={styles.textPrice}>112$</Text>
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <Button style={styles.btnCheck} full rounded>
            <Text style={styles.btnText}>CHECK OUT</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 14,
    paddingRight: 16,
  },
  labelText: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#222222',
  },
  labelWrapper: {
    marginBottom: 24,
  },
  footerWrapper: {
    paddingLeft: 15,
    paddingRight: 16,
    paddingTop: 18,
    paddingBottom: 22,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  totalWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnWrapper: {
    marginTop: 18,
  },
  textTotal: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9b9b9b',
  },
  textPrice: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#222222',
  },
  btnCheck: {
    backgroundColor: '#DB3022',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
  },
});
