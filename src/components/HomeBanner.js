import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

export default function HomeBanner() {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/banner.png')}
        style={styles.image}>
        <View style={styles.textDisplay}>
          <Text style={styles.bannerText}>Street clothes</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 196,
    resizeMode: 'cover',
  },
  textDisplay: {
    paddingLeft: 21,
    paddingBottom: 26,
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.1)',
    height: '100%',
  },
  bannerText: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
