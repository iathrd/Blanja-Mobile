import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function PaymentMethod() {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.paymentWrapper}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require('../../assets/gopay.png')}
        />
      </View>
      <View style={styles.paymentNameWrapper}>
        <Text style={styles.paymentName}>Gopay</Text>
      </View>
      <View>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          tintColors={{true: '#DB3022', false: '#9b9b9b'}}
          onFillColor="#DB3022"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paymentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  image: {
    width: 64,
    height: 38,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  imageWrapper: {
    marginRight: 17,
  },
  paymentName: {
    fontSize: 14,
    color: '#222222',
  },
  paymentNameWrapper: {
    flex: 1,
  },
  
});
