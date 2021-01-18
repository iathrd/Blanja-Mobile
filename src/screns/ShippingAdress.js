import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {Item, Input} from 'native-base';
import AdressCard from '../components/AdressCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  {id: '1', name: 'PPP', isPrimary: true},
  {id: '2', name: 'PPP', isPrimary: false},
];

export default function ShippingAdress({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.searchWrapper}>
          <Item style={styles.item} rounded>
            <Icon name="search" size={25} />
            <Input
              style={styles.input}
              placeholder="Search"
              placeholderTextColor="#9B9B9B"
            />
          </Item>
        </View>
        <View style={styles.labelWrapper}>
          <Text style={styles.labelText}>Shipping address</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <AdressCard data={item} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 16,
    paddingRight: 16,
  },
  item: {
    paddingLeft: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    elevation: 2,
  },
  input: {
    fontSize: 16,
    lineHeight: 16,
  },
  searchWrapper: {
    marginBottom: 30,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelWrapper: {
    marginBottom: 21,
  },
});
