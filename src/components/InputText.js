import React from 'react';
import {View, Text} from 'react-native';
import {Item, Input} from 'native-base';

export default function InputText({
  errors,
  touched,
  value,
  name,
  onChangeText,
}) {
  return (
    <View style={styles.inputWrapper}>
      <Item
        style={errors.name && touched.name ? styles.itemError : styles.item}
        placeholderLabel
        regular>
        <Input
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#9b9b9b"
          name={name}
          {...value}
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
        />
      </Item>
      <View>
        {errors.name && touched.name && (
          <Text style={styles.textError}>{errors.name}</Text>
        )}
      </View>
    </View>
  );
}
