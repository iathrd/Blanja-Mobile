import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import Rating from '../components/Rating';
import {API_URL} from '@env';

export default function ProdukCardFlex({navigation, data}) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const image = data.images.map((item) => `${API_URL}${item.image}`);
    setImages(image);
  }, []);
  return (
    <View style={styles.cardView}>
      <View style={styles.card}>
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          style={styles.touch}
          onPress={() => navigation.navigate('ProductDetails', {data, images})}>
          <View style={styles.cardBody}>
            <View>
              <ImageBackground
                imageStyle={styles.imagest}
                source={
                  data.images !== undefined
                    ? {uri: `${API_URL}${data.images[0].image}`}
                    : require('../../assets/model.jpg')
                }
                style={styles.image}
              />
            </View>
            <View style={styles.body}>
              <View style={styles.productWrapper}>
                <View>
                  <Text style={styles.name}>{data.name}</Text>
                </View>
                <View>
                  <Text style={styles.brand}>{data.brand}</Text>
                </View>
              </View>
              <View style={styles.ratingWrapper}>
                <View style={styles.rating}>
                  <Rating value={0} />
                </View>
                <View>
                  <Text style={styles.ratingCount}>(0)</Text>
                </View>
              </View>
              <View>
                <Text style={styles.price}>100$</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
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
  touch: {
    borderRadius: 8,
  },
});
