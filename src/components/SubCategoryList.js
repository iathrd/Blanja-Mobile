import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default function SubCategoryList({data}) {
  return (
    <View style={styles.content}>
      <TouchableHighlight
        style={styles.touch}
        onPress={() => console.log('p')}
        activeOpacity={0.6}
        underlayColor="#DDDDDD">
        <Text style={styles.category}>{data.name}</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 12,
  },
  touch: {
    paddingLeft: 24,
    paddingTop: 10,
    paddingBottom: 10,
  },
  category: {
    fontSize: 16,
    lineHeight: 16,
    color: '#222222',
  },
});
