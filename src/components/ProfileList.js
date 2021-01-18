import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileList({data, navigation}) {
  return (
    <View>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={styles.touch}
        onPress={() => navigation.navigate(data.path)}>
        <View style={styles.contentWrapper}>
          <View>
            <View>
              <Text style={styles.name}>{data.name}</Text>
            </View>
            <View>
              <Text style={styles.status}>{data.status}</Text>
            </View>
          </View>
          <View>
            <Icon name="keyboard-arrow-right" size={25} color="#9B9B9B" />
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    color: '#222222',
  },
  status: {
    fontSize: 11,
    lineHeight: 11,
    color: '#9B9B9B',
  },
  touch: {
    marginBottom: 26,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
  },
});
