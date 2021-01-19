import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'native-base';

export default function Success({navigation}) {
  return (
    <View style={styles.parent}>
      <View style={styles.content}>
        <View>
          <Image source={require('../../../assets/bags.png')} />
        </View>
        <View style={styles.successWrapper}>
          <Text style={styles.success}>Success!</Text>
        </View>
        <View style={styles.desWrapper}>
          <Text style={styles.des}>
            Your order will be delivered soon. Thank you for choosing our app!
          </Text>
        </View>
      </View>
      <View style={styles.btnWrapper}>
        <Button
          onPress={() => navigation.reset({index: 0, routes: [{name: 'Main'}]})}
          style={styles.btnCon}
          full
          rounded>
          <Text style={styles.btnText}>CONTINUE SHOPPING</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  parent: {
    flex: 1,
    paddingLeft: 18,
    paddingRight: 14,
  },
  successWrapper: {
    marginTop: 50,
    marginBottom: 12,
  },
  success: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#000000',
  },
  desWrapper: {
    width: '65%',
  },
  des: {
    fontSize: 14,
    color: '#000000',
  },
  btnWrapper: {
    paddingBottom: 20,
  },
  btnCon: {
    backgroundColor: '#DB3022',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
  },
});
