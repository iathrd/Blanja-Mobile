import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Card, CardItem, Left, Body, Right} from 'native-base';

export default function OrderProductCard() {
  return (
    <View style={styles.cardWrapper}>
      <Card style={styles.card}>
        <CardItem style={styles.CardItem}>
          <Body>
            <View style={styles.contentWrapper}>
              <View style={styles.imageWrapper}>
                <Image
                  style={styles.image}
                  source={require('../../assets/model.jpg')}
                />
              </View>
              <Body>
                <View style={styles.infoWrapper}>
                  <View>
                    <Text style={styles.name}>Pullover</Text>
                  </View>
                  <View style={styles.brandWrapper}>
                    <Text style={styles.labelText}>Mango</Text>
                  </View>
                  <View style={styles.productInfoWrapper}>
                    <View style={styles.labelWrapper}>
                      <View style={styles.lbWrapper}>
                        <Text style={styles.labelText}>Color:</Text>
                      </View>
                      <View>
                        <Text style={styles.labelValue}>Gray</Text>
                      </View>
                    </View>
                    <View style={styles.labelWrapper}>
                      <View style={styles.lbWrapper}>
                        <Text style={styles.labelText}>Size:</Text>
                      </View>
                      <View>
                        <Text style={styles.labelValue}>L</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.priceWrapper}>
                    <View style={styles.labelWrapper}>
                      <View style={styles.lbWrapper}>
                        <Text style={styles.labelText}>Units:</Text>
                      </View>
                      <View>
                        <Text style={styles.labelValue}>1</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.price}>51$</Text>
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
});
