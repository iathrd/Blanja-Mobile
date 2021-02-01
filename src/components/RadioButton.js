import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function RadioButtons() {
  const [value, setValue] = useState([{value: 0}, {value: 0}]);
  return (
    <View style={styles.radioWrapper}>
      <View style={styles.radioOutLine}>
        <View style={{...styles.radio, backgroundColor: 'pink'}} />
      </View>
      <View>
        <View style={{...styles.radio, backgroundColor: 'pink'}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    height: 36,
    width: 36,
    borderRadius: 30,
  },
  radioOutLine: {
    backgroundColor: 'black',
    padding: 1.5,
    borderRadius: 30,
  },
});
