import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Rating from '../components/Rating';

export default function ProductCard({display = 'flex'}) {
  return (
    <View style={display === 'grid' && styles.grid}>
      <View style={styles.cardWrapper}>
        <View>
          <ImageBackground
            style={styles.image}
            imageStyle={styles.imgStyles}
            source={require('../../assets/model.jpg')}>
            <View>
              <View style={styles.productInfo}>
                <Text style={styles.textInfo}>NEW</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.ratingWrapper}>
            <Rating />
            <View style={styles.countWrapper}>
              <Text style={styles.ratingCount}>(0)</Text>
            </View>
          </View>
          <View>
            <Text style={styles.brand}>OVS</Text>
          </View>
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>Blouse</Text>
          </View>
          <View>
            <Text style={styles.price}>30$</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 184,
    width: 148,
    resizeMode: 'cover',
    borderRadius: 12,
    paddingTop: 8,
    paddingLeft: 8,
  },
  cardWrapper: {
    marginRight: 17,
    marginBottom: 10,
  },
  imgStyles: {
    borderRadius: 12,
  },
  productInfo: {
    backgroundColor: '#222222',
    width: 40,
    alignItems: 'center',
    paddingTop: 7,
    paddingBottom: 6,
    borderRadius: 29,
  },
  textInfo: {
    fontSize: 11,
    lineHeight: 11,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  cardBody: {
    paddingTop: 8,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  ratingCount: {
    fontSize: 12,
    color: '#9B9B9B',
  },
  countWrapper: {
    marginLeft: 5,
  },
  brand: {
    fontSize: 13,
    lineHeight: 13,
    color: '#9b9b9b',
  },
  name: {
    fontSize: 16,
    lineHeight: 16,
    color: '#222222',
  },
  price: {
    fontSize: 14,
    lineHeight: 20,
    color: '#222222',
  },
  nameWrapper: {
    marginTop: 5,
  },
  grid: {
    paddingTop: 18,
    paddingLeft: 16,
  },
});
