import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import CategoryCard from '../../components/CategoryCard';

const data = [{id: '1', name: 'New'}];

export default function Women({navigation}) {
  return (
    <ScrollView>
      <View style={styles.parent}>
        <View style={styles.content}>
          <TouchableHighlight
            style={styles.touch}
            onPress={() => navigation.navigate('Catalog')}>
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
          </TouchableHighlight>
          <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({item}) => (
              <CategoryCard data={item} navigation={navigation} />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  parent: {
    flex: 1,
  },
  promoWrapper: {
    flexDirection: 'row',
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
  touch: {
    marginBottom: 16,
    borderRadius: 8,
  },
});
