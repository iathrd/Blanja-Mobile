import React from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {Thumbnail} from 'native-base';

import ProfileList from '../../components/ProfileList';

export default function MyProfile() {
  const list = [
    {id: '1', name: 'My orders', status: 'Already have 12 orders'},
    {id: '2', name: 'Shipping addresses', status: '3 ddresses'},
    {id: '3', name: '3 ddresses', status: 'Notifications, password'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.labelWrapper}>
          <Text style={styles.labelText}>My profile</Text>
        </View>
        <View style={styles.profileWrapper}>
          <View>
            <Thumbnail
              style={styles.avatar}
              source={require('../../../assets/default-avatar.png')}
            />
          </View>
          <View style={styles.userInfoWrapper}>
            <View>
              <Text style={styles.username}>Matilda Brown</Text>
            </View>
            <View>
              <Text style={styles.email}>matildabrown@mail.com</Text>
            </View>
          </View>
        </View>
      </View>
      <FlatList
        data={list}
        renderItem={({item}) => <ProfileList data={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  labelText: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#222222',
  },
  labelWrapper: {
    marginBottom: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 35,
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 46,
  },
  userInfoWrapper: {
    marginLeft: 16,
  },
  username: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#222222',
  },
  email: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9B9B9B',
  },
});
