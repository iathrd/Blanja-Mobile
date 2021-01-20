import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import ProductCardFlex from '../../components/ProdukCardFlex';
import ProductCard from '../../components/ProductCard';
import Animated from 'react-native-reanimated';
import SortBottomShip from '../../components/SortBottomShip';

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
  const [filter, setFilter] = useState({display: 'flex'});
  const bs = React.createRef();
  const fall = new Animated.Value(1);

  return (
    <View style={{flex: 1}}>
      <SortBottomShip bs={bs} fall={fall} />
      <View style={styles.parent}>
        <View style={styles.header}>
          {filter.display === 'flex' && (
            <View style={styles.labelWrapper}>
              <Text style={styles.label}>Women’s tops</Text>
            </View>
          )}
          <View style={styles.filterWrapper}>
            <View style={styles.filter}>
              <View style={styles.iconWrapper}>
                <Icon name="filter-variant" size={25} />
              </View>
              <View>
                <Text style={styles.filterLabel}>Filters</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
              <View style={styles.filter}>
                <View style={styles.iconWrapper}>
                  <Icon2 name="arrow-swap" size={20} />
                </View>
                <View>
                  <Text style={styles.filterLabel}>Price: lowest to high</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.filter}>
              {filter.display === 'flex' ? (
                <TouchableOpacity onPress={() => setFilter({display: 'Grid'})}>
                  <View style={styles.iconWrapper}>
                    <Icon name="view-grid" size={20} />
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setFilter({display: 'flex'})}>
                  <View style={styles.iconWrapper}>
                    <Icon name="view-list" size={20} />
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.content}>
            {filter.display === 'flex' ? (
              <FlatList
                data={data}
                renderItem={({item}) => <ProductCardFlex data={item} />}
              />
            ) : (
              <View style={{flexDirection: 'row'}}>
                <FlatList
                  data={data}
                  numColumns={2}
                  renderItem={({item}) => (
                    <ProductCard data={item} display="grid" />
                  )}
                />
              </View>
            )}
          </View>
        </SafeAreaView>
      </View>
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
