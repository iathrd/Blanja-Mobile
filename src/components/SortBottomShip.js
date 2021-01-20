import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

const renderInner = () => {
  return (
    <View style={styles.shipContent}>
      <View style={styles.sortWrapper}>
        <View>
          <Text style={styles.sortValue}>Popular</Text>
        </View>
      </View>
      <View style={styles.sortWrapper}>
        <View>
          <Text style={styles.sortValue}>Customer review</Text>
        </View>
      </View>
      <View style={styles.sortWrapperActive}>
        <View>
          <Text style={styles.sortValueActive}>Price: lowest to high</Text>
        </View>
      </View>
    </View>
  );
};

const renderHeader = () => (
  <View style={styles.headerWrapper}>
    <View style={styles.tab}></View>
    <View style={styles.labelShipWrapper}>
      <Text style={styles.labelShip}>Sort by</Text>
    </View>
  </View>
);

export default function SortBottomShip({fall, bs}) {
  return (
    <BottomSheet
      ref={bs}
      snapPoints={[400, 0]}
      initialSnap={1}
      renderContent={renderInner}
      renderHeader={renderHeader}
      callbackNode={fall}
      enabledBottomInitialAnimation={true}
    />
  );
}

const styles = StyleSheet.create({
  shipContent: {
    backgroundColor: '#F9F9F9',
    height: 450,
  },
  headerWrapper: {
    backgroundColor: '#F9F9F9',
    paddingTop: 14,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
  },
  tab: {
    width: 60,
    height: 6,
    backgroundColor: '#9B9B9B',
    borderRadius: 3,
  },
  labelShipWrapper: {
    marginTop: 16,
    marginBottom: 18,
  },
  labelShip: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#222222',
  },
  sortWrapperActive: {
    padding: 16,
    backgroundColor: '#DB3022',
  },
  sortWrapper: {
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  sortValueActive: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 16,
    color: '#FFFFFF',
  },
  sortValue: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 16,
    color: 'black',
  },
});
