import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  {id: '1', name: 'All', isActive: true},
  {id: '2', name: 'Women', isActive: false},
  {id: '3', name: 'Men', isActive: false},
  {id: '4', name: 'Boys', isActive: false},
  {id: '5', name: 'Girls', isActive: false},
];

const Item = ({data}) => {
  return (
    <View>
      <View style={data.isActive ? styles.categoryActive : styles.category}>
        <Text style={data.isActive ? styles.sizeTextActive : styles.sizeText}>
          {data.name}
        </Text>
      </View>
    </View>
  );
};

export default function Filter({navigation}) {
  return (
    <View style={styles.parent}>
      <View>
        <View style={styles.labelWrapper}>
          <View>
            <Text style={styles.labelText}>Sizes</Text>
          </View>
        </View>
        <View>
          <View style={styles.content}>
            <View style={styles.filterContent}>
              <View style={styles.size}>
                <Text style={styles.sizeText}>XS</Text>
              </View>
              <View style={styles.sizeActive}>
                <Text style={styles.sizeTextActive}>S</Text>
              </View>
              <View style={styles.size}>
                <Text style={styles.sizeText}>M</Text>
              </View>
              <View style={styles.size}>
                <Text style={styles.sizeText}>L</Text>
              </View>
              <View style={styles.size}>
                <Text style={styles.sizeText}>XL</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.labelWrapper}>
          <View>
            <Text style={styles.labelText}>Category</Text>
          </View>
        </View>
        <View>
          <View style={styles.content}>
            <FlatList
              data={data}
              renderItem={({item}) => <Item data={item} />}
              numColumns={3}
            />
          </View>
        </View>
        <TouchableHighlight
          style={styles.touch}
          onPress={() => navigation.navigate('Brand')}>
          <View style={styles.brandWrapper}>
            <View style={styles.brandContent}>
              <View>
                <Text style={styles.brandText}>Brand</Text>
              </View>
              <View>
                <Text numberOfLines={1} style={styles.lisText}>
                  adidas Originals, Jack & Jones, s.Oliver
                </Text>
              </View>
            </View>
            <View>
              <Icon name="keyboard-arrow-down" size={20} />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  content: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 1,
  },
  labelWrapper: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  size: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: '#9B9B9B',
    marginRight: 16,
    flex: 1,
    alignItems: 'center',
  },
  sizeText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#222222',
    fontWeight: 'bold',
  },
  sizeTextActive: {
    fontSize: 14,
    lineHeight: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  filterContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
  },
  sizeActive: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: '#DB3022',
    marginRight: 16,
    backgroundColor: '#DB3022',
    flex: 1,
    alignItems: 'center',
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 16,
    color: '#222222',
  },
  category: {
    borderColor: '#9b9b9b',
    borderWidth: 1,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginLeft: 5,
    marginBottom: 12,
    borderRadius: 8,
  },
  categoryActive: {
    borderColor: '#DB3022',
    borderWidth: 1,
    width: 100,
    backgroundColor: '#DB3022',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    marginLeft: 5,
    marginBottom: 12,
    borderRadius: 8,
  },
  brandWrapper: {
    backgroundColor: 'white',

    paddingLeft: 16,
    paddingRight: 23,
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brandText: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  lisText: {
    fontSize: 11,
    lineHeight: 11,
    color: '#9B9B9B',
  },
  touch: {
    marginTop: 20,
  },
});
