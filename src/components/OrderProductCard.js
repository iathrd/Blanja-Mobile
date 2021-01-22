import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Body, Right, Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useSelector, useDispatch} from 'react-redux';
import cartAction from '../redux/actions/cart';

import {API_URL} from '@env';

export default function OrderProductCard({data, route}) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const deleteCart = (id) => {
    dispatch(cartAction.deleteCart(token, id));
  };

  return (
    <View style={styles.cardWrapper}>
      <Card style={styles.card}>
        <CardItem style={styles.CardItem}>
          <Body>
            <View style={styles.contentWrapper}>
              <View style={styles.imageWrapper}>
                <Image
                  style={styles.image}
                  source={
                    data.product.images === undefined
                      ? require('../../assets/model.jpg')
                      : {uri: `${API_URL}${data.product.images[0].image}`}
                  }
                />
              </View>
              <Body>
                <View style={styles.infoWrapper}>
                  <View style={styles.headerWrapper}>
                    <View>
                      <View>
                        <Text style={styles.name}>{data.product.name}</Text>
                      </View>
                      {route.name !== 'MyBag' && (
                        <View style={styles.brandWrapper}>
                          <Text style={styles.labelText}>Mango</Text>
                        </View>
                      )}
                    </View>
                    {route.name === 'MyBag' && (
                      <TouchableOpacity onPress={() => deleteCart(data.id)}>
                        <View>
                          <Icon name="bookmark-remove" size={25} color="red" />
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                  <View style={styles.productInfoWrapper}>
                    <View style={styles.labelWrapper}>
                      <View style={styles.lbWrapper}>
                        <Text style={styles.labelText}>Color:</Text>
                      </View>
                      <View>
                        <Text style={styles.labelValue}>
                          {data.product.color}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.labelWrapper}>
                      <View style={styles.lbWrapper}>
                        <Text style={styles.labelText}>Size:</Text>
                      </View>
                      <View>
                        <Text style={styles.labelValue}>
                          {data.product.size}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.priceWrapper}>
                    {route.name !== 'MyBag' ? (
                      <View style={styles.labelWrapper}>
                        <View style={styles.lbWrapper}>
                          <Text style={styles.labelText}>Units:</Text>
                        </View>
                        <View>
                          <Text style={styles.labelValue}>1</Text>
                        </View>
                      </View>
                    ) : (
                      <View style={styles.labelWrapper}>
                        <View>
                          <Button rounded style={styles.btnCounter}>
                            <Icon name="minus" size={23} color="#9b9b9b" />
                          </Button>
                        </View>
                        <View style={styles.numberWrapper}>
                          <View>
                            <Text>1</Text>
                          </View>
                        </View>
                        <View>
                          <Button rounded style={styles.btnCounter}>
                            <Icon name="plus" size={23} color="#9b9b9b" />
                          </Button>
                        </View>
                      </View>
                    )}

                    <View>
                      <Text style={styles.price}>100$</Text>
                    </View>
                  </View>
                </View>
              </Body>
            </View>
          </Body>
        </CardItem>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  imageWrapper: {
    height: 120,
    width: 120,
  },
  contentWrapper: {
    flexDirection: 'row',
  },
  cardWrapper: {
    marginBottom: 10,
  },
  CardItem: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 8,
    height: 120,
  },
  card: {
    borderRadius: 8,
    height: 120,
    elevation: 2,
  },
  infoWrapper: {
    paddingTop: 11,
    paddingBottom: 18,
    paddingLeft: 11,
    width: '100%',
  },
  productInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandWrapper: {
    marginBottom: 9,
  },
  lbWrapper: {
    marginRight: 5,
  },
  name: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    color: '#222222',
  },
  labelText: {
    fontSize: 11,
    lineHeight: 11,
    color: '#9B9B9B',
  },
  labelValue: {
    fontSize: 11,
    lineHeight: 11,
    color: '#222222',
  },
  price: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#222222',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnCounter: {
    paddingTop: 14,
    paddingLeft: 11,
    paddingRight: 11,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  numberWrapper: {
    width: 30,
    textAlign: 'center',
    position: 'relative',
    paddingLeft: 10,
  },
});
