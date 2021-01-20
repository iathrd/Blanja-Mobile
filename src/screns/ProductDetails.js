import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import FastImage from 'react-native-fast-image';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Rating from '../components/Rating';

export default function ProductDetails() {
  const [images, setImage] = useState([
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree', // Network image
  ]);
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <SliderBox
            ImageComponent={FastImage}
            images={images}
            sliderBoxHeight={200}
            dotColor="#DB3022"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={styles.pagination}
            dotStyle={styles.dot}
            ImageComponentStyle={styles.image}
            imageLoadingColor="#2196F3"
          />
          <View style={styles.body}>
            <View style={styles.sizeWrapper}>
              <View style={styles.sizeWr}>
                <View>
                  <Text style={styles.size}>Size</Text>
                </View>
                <View>
                  <Icon name="keyboard-arrow-down" size={20} />
                </View>
              </View>
              <View style={styles.sizeWr}>
                <View>
                  <Text style={styles.size}>Black</Text>
                </View>
                <View>
                  <Icon name="keyboard-arrow-down" size={20} />
                </View>
              </View>
              <View style={styles.likeWrapper}>
                <View>
                  <Icon2 name="heart-outline" size={20} color="#9b9b9b" />
                </View>
              </View>
            </View>
            <View>
              <View style={styles.brandWrapper}>
                <View>
                  <View>
                    <Text style={styles.name}>H&M</Text>
                  </View>
                  <View>
                    <Text style={styles.brand}>Short black dress</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.name}>$19.99</Text>
                </View>
              </View>
              <View style={styles.ratingWrapper}>
                <View>
                  <Rating value={3} />
                </View>
                <View>
                  <Text style={styles.ratingCount}>(10)</Text>
                </View>
              </View>
              <View>
                <Text style={styles.description}>
                  Short dress in soft cotton jersey with decorative buttons down
                  the front and a wide, frill-trimmed square neckline with
                  concealed elastication. Elasticated seam under the bust and
                  short puff sleeves with a small frill trim.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Button style={styles.btnAdd} full rounded>
            <Text style={styles.btnText}>ADD TO CART</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    position: 'absolute',
    bottom: 0,
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
  },
  image: {
    height: 413,
  },
  content: {
    flex: 1,
  },
  sizeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  body: {
    paddingLeft: 16,
    paddingTop: 12,
    paddingRight: 16,
    flex: 1,
  },
  sizeWr: {
    borderColor: '#9b9b9b',
    borderWidth: 1,
    paddingTop: 10,
    paddingLeft: 12,
    paddingBottom: 10,
    paddingRight: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    marginRight: 18,
    backgroundColor: 'white',
    flex: 1,
  },
  size: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#222222',
  },
  likeWrapper: {
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 13,
    borderRadius: 30,
    elevation: 2,
  },
  footer: {
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 40,
  },
  btnAdd: {
    backgroundColor: '#DB3022',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  brandWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222222',
  },
  brand: {
    fontSize: 11,
    lineHeight: 11,
    color: '#9b9b9b',
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },
  ratingCount: {
    fontSize: 12,
    color: '#9b9b9b',
  },
  description: {
    fontSize: 14,
    color: '#222222',
    marginBottom: 50,
  },
});
