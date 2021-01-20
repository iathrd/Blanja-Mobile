import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';

export default function CategoryCard({data, navigation}) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      style={styles.touch}
      onPress={() => navigation.navigate('Catalog')}>
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
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',

    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 23,
    elevation: 2,
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
  touch: {
    marginBottom: 16,
    borderRadius: 8,
  },
});
