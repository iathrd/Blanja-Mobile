import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CategoryCard from '../../components/CategoryCard';

const data = [
  {id: '1', name: 'pppp'},
  {id: '2', name: 'pppp'},
  {id: '3', name: 'pppp'},
];

export default function Women() {
  return (
    <View style={styles.parent}>
      <View style={styles.content}>
        <View style={styles.promoWrapper}>
          <View style={styles.promoContent}>
            <View>
              <Text style={styles.promoTitle}>SUMMER SALES</Text>
            </View>
            <View>
              <Text style={styles.promoValue}>Up to 50% off</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => <CategoryCard data={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
  },
  parent: {
    flex: 1,
  },
  promoWrapper: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  promoContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DB3022',
    borderRadius: 8,
    paddingTop: 28,
    paddingBottom: 23,
    elevation: 2,
  },
  promoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  promoValue: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
  },
});
