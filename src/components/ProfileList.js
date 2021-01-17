import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ProfileList({data}) {
  return (
    <View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 36,
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
});
