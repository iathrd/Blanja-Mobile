import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {Button} from 'native-base';
import SubCategoryList from '../../components/SubCategoryList';

const data = [
  {id: '1', name: 'Tops'},
  {id: '2', name: 'Shirts & Blouses'},
  {id: '3', name: 'Cardigans & Sweaters'},
  {id: '4', name: 'Knitwear'},
  {id: '5', name: 'Blazers'},
];

export default function SubCategory({navigation}) {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.content}>
        <View>
          <Button
            onPress={() => navigation.navigate('Catalog')}
            style={styles.btnView}
            full
            rounded>
            <Text style={styles.btnText}>VIEW ALL ITEMS</Text>
          </Button>
        </View>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryText}>Choose category</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => <SubCategoryList data={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  content: {
    padding: 16,
    flex: 1,
  },
  btnView: {
    backgroundColor: '#DB3022',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  categoryWrapper: {
    marginTop: 16,
  },
  categoryText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9B9B9B',
  },
});
