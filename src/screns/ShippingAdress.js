import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {Item, Input, Button} from 'native-base';
import AdressCard from '../components/AdressCard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ModalLoading from '../components/ModalLoading2';

import {useSelector, useDispatch} from 'react-redux';
import adressAction from '../redux/actions/adresss';

const data = [
  {id: '1', name: 'PPP', isPrimary: true},
  {id: '2', name: 'PPP', isPrimary: false},
  {id: '3', name: 'PPP', isPrimary: false},
];

export default function ShippingAdress({navigation, route}) {
  const dispatch = useDispatch();
  const adress = useSelector((state) => state.adress);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(adressAction.getAdress(token));
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      {adress.isLoading && <ModalLoading modal={adress.isLoading} />}
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
        <View>
          <FlatList
            data={adress.data}
            renderItem={({item}) => (
              <AdressCard data={item} navigation={navigation} route={route} />
            )}
          />
        </View>
        {adress.data.length === 0 && <Text>You dont have adress</Text>}
        <View style={styles.btnWrapper}>
          <Button
            onPress={() => navigation.navigate('AddShippingAdress')}
            style={styles.btnAdd}
            full
            bordered
            rounded>
            <Text style={styles.btnText}>ADD NEW ADDRESS</Text>
          </Button>
        </View>
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
  btnAdd: {
    borderColor: '#222222',
    borderWidth: 1.5,
  },
  btnWrapper: {
    marginTop: 5,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#222222',
    textTransform: 'uppercase',
  },
});
