import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

export default function Men() {
  return (
    <View style={styles.parent}>
      <View style={styles.content}>
        <ImageBackground
          source={require('../../../assets/coming.jpg')}
          style={styles.image}>
          <View style={styles.body}>
            <Text style={styles.label}>Coming Soon</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  parent: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    height: '100%',
    resizeMode: 'cover',
  },
  body: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    color: 'white',
  },
});
