import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

export default function CategoryCard() {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.categoryName}>New</Text>
      </View>
      <View>
        <ImageBackground
          source={require('../../assets/New.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 23,
    elevation:2
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22,
  },
  image: {
    width: 171,
    height: 100,
    resizeMode: 'cover',
  },
});
