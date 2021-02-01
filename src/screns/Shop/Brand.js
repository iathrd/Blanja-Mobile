import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Item, Input} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';

const data = [{id: '1', name: 'Adidas'}];

const ItemData = ({data}) => {
  return (
    <View style={styles.contentWrapper}>
      <View>
        <Text style={styles.brandText}>{data.name}</Text>
      </View>
      <View>
        <CheckBox
          value={true}
          tintColors={{true: '#DB3022', false: '#9b9b9b'}}
          onFillColor="#DB3022"
        />
      </View>
    </View>
  );
};

export default function Brand() {
  return (
    <View style={styles.parent}>
      <View style={styles.content}>
        <View>
          <Item style={styles.item} placeholderLabel rounded>
            <Icon name="search" size={25} color="#9b9b9b" />
            <Input
              style={styles.input}
              placeholder="Search"
              placeholderTextColor="#9b9b9b"
            />
          </Item>
        </View>
        <View>
          <FlatList
            data={data}
            renderItem={({item}) => <ItemData data={item} />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  content: {
    paddingTop: 21,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 21,
  },
  input: {},
  item: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white',
    borderColor: 'white',
    elevation: 1,
  },
  contentWrapper: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandText: {
    fontSize: 16,
    lineHeight: 16,
    color: '#222222',
  },
});
