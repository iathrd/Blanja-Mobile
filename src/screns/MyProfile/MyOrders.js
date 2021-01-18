import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import OrderCard from '../../components/OrderCard';

const data = [
  {id: '1', name: 'Hallo'},
  {id: '2', name: 'Hallo'},
];

export default function MyOrders({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.labelWrapper}>
          <Text style={styles.labelText}>MyOrders </Text>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <OrderCard data={item} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  content: {
    paddingLeft: 14,
    paddingRight: 15,
  },
  labelText: {
    fontSize: 34,
    lineHeight: 34,
    color: '#222222',
    fontWeight: 'bold',
  },
  labelWrapper: {
    marginBottom: 24,
  },
});
