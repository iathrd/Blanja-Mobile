import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Rating({value}) {
  return (
    <View style={styles.ratingWrapper}>
      {[...Array(5)].map((i, o) => {
        if (value === null) {
          return <Icon name="staro" size={15} color="#9b9b9b" />;
        }
        if (o + 1 <= Math.round(value)) {
          return <Icon name="star" size={15} color="#FFBA49" />;
        }
        return <Icon name="staro" size={15} color="#9b9b9b" />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
