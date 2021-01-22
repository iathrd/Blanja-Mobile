import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import HomeBanner from '../../components/HomeBanner';
import ProductCard from '../../components/ProductCard';
import ModalLoading from '../../components/ModalLoading2';

import {useSelector, useDispatch} from 'react-redux';
import userAction from '../../redux/actions/user';
import productAction from '../../redux/actions/product';
import adressAction from '../../redux/actions/adresss';

const data = [
  {id: '1', rating: 5},
  {id: '2', rating: 4},
  {id: '3', rating: 3},
  {id: '4', rating: 2},
  {id: '5', rating: 1},
];

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user);
  const product = useSelector((state) => state.product);
  const adress = useSelector((state) => state.adress);
  useEffect(() => {
    dispatch(userAction.getUser(token));
    dispatch(productAction.newProduct(token));
    dispatch(productAction.popularProduct(token));
    dispatch(adressAction.getAdress(token));
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {user.isLoading || product.isLoading || adress.isLoading ? (
        <ModalLoading modal={user.isLoading} />
      ) : null}
      <View style={styles.parent}>
        <View>
          <HomeBanner />
        </View>
        <View style={styles.content}>
          <View style={styles.contentBody}>
            <View style={styles.headerContent}>
              <View>
                <View>
                  <Text style={styles.headerInfo}>New</Text>
                </View>
                <View>
                  <Text style={styles.headerDes}>
                    You’ve never seen it before!
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.headerAction}>View all</Text>
              </View>
            </View>
            <View>
              <FlatList
                horizontal
                data={product.newProduct}
                renderItem={({item}) => (
                  <ProductCard data={item} navigation={navigation} />
                )}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </View>
          <View style={styles.contentBody}>
            <View style={styles.headerContent}>
              <View>
                <View>
                  <Text style={styles.headerInfo}>Popular</Text>
                </View>
                <View>
                  <Text style={styles.headerDes}>
                    You’ve never seen it before!
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styles.headerAction}>View all</Text>
              </View>
            </View>
            <View>
              <FlatList
                horizontal
                data={product.popularProduct}
                renderItem={({item}) => (
                  <ProductCard data={item} navigation={navigation} />
                )}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingLeft: 16,
    paddingTop: 30,
  },
  parent: {
    flex: 1,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 14,
    marginBottom: 22,
  },
  headerInfo: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#222222',
  },
  headerDes: {
    fontSize: 11,
    lineHeight: 11,
    color: '#9B9B9B',
  },
  headerAction: {
    fontSize: 11,
    lineHeight: 11,
    color: '#222222',
  },
  contentBody: {
    marginBottom: 35,
  },
});
