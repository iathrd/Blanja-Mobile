import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import ProductCardFlex from '../../components/ProdukCardFlex';

const data = [
  {id: '1', name: 'PPP', isPrimary: true},
  {id: '2', name: 'PPP', isPrimary: false},
  {id: '3', name: 'PPP', isPrimary: true},
  {id: '4', name: 'PPP', isPrimary: false},
  {id: '5', name: 'PPP', isPrimary: true},
  {id: '6', name: 'PPP', isPrimary: false},
  {id: '7', name: 'PPP', isPrimary: true},
  {id: '8', name: 'PPP', isPrimary: false},
];

export default function Catalog() {
  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>Women’s tops</Text>
        </View>
        <View style={styles.filterWrapper}>
          <View style={styles.filter}>
            <View style={styles.iconWrapper}>
              <Icon name="filter-variant" size={25} />
            </View>
            <View>
              <Text style={styles.filterLabel}>Filters</Text>
            </View>
          </View>
          <View style={styles.filter}>
            <View style={styles.iconWrapper}>
              <Icon2 name="arrow-swap" size={20} />
            </View>
            <View>
              <Text style={styles.filterLabel}>Price: lowest to high</Text>
            </View>
          </View>
          <View style={styles.filter}>
            <View style={styles.iconWrapper}>
              <Icon name="view-grid" size={20} />
            </View>
          </View>
        </View>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.content}>
          <FlatList
            data={data}
            renderItem={({item}) => <ProductCardFlex data={item} />}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 18,
    paddingLeft: 14,
    paddingRight: 16,
    paddingBottom: 17,
  },
  content: {
    flex: 1,
  },
  parent: {
    flex: 1,
  },
  label: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#222222',
  },
  labelWrapper: {
    marginBottom: 17,
  },
  filterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(155,155,155,0.1)',
    marginBottom: 16,
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginRight: 11,
  },
  filterLabel: {
    fontSize: 11,
    lineHeight: 11,
    color: '#222222',
  },
});
