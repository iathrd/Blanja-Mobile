import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Rating from '../components/Rating';

export default function ProdukCardFlex() {
  return (
    <View style={styles.cardView}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <View>
            <ImageBackground
              imageStyle={styles.imagest}
              source={require('../../assets/model.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.body}>
            <View style={styles.productWrapper}>
              <View>
                <Text style={styles.name}>Pullover</Text>
              </View>
              <View>
                <Text style={styles.brand}>Mango</Text>
              </View>
            </View>
            <View style={styles.ratingWrapper}>
              <View style={styles.rating}>
                <Rating value={3} />
              </View>
              <View>
                <Text style={styles.ratingCount}>(3)</Text>
              </View>
            </View>
            <View>
              <Text style={styles.price}>51$</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderRadius: 8,
  },
  cardBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 104,
    height: 104,
  },
  imagest: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  name: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    color: '#222222',
  },
  brand: {
    fontSize: 11,
    lineHeight: 11,
    color: '#9b9b9b',
  },
  productWrapper: {
    marginBottom: 8,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9,
  },
  ratingCount: {
    fontSize: 12,
    color: '#9b9b9b',
  },
  rating: {
    marginRight: 5,
  },
  price: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#222222',
  },
  body: {
    marginLeft: 4,
  },
  cardView: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
});
