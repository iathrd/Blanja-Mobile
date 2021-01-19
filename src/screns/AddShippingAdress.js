import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Item, Input, Label, Button} from 'native-base';
import {Formik} from 'formik';

import {createAdressSchema} from '../helpers/formValidation';

export default function AddShippingAdress() {
  return (
    <ScrollView>
      <View style={styles.content}>
        <Formik
          initialValues={{
            recipient: '',
            adress: '',
            city: '',
            state: '',
            postalCode: '',
            phoneNumber: '',
          }}
          validationSchema={createAdressSchema}
          onSubmit={(values) => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <View style={styles.inputWrapper}>
                <Item
                  style={
                    errors.recipient && touched.recipient
                      ? styles.itemInputError
                      : styles.itemInput
                  }
                  placeholderLabel
                  regular
                  floatingLabel>
                  <Input
                    style={styles.input}
                    placeholder="Full name"
                    placeholderTextColor="#9b9b9b"
                    name="recipient"
                    value={values.recipient}
                    onChangeText={handleChange('recipient')}
                    onBlur={handleBlur('recipient')}
                  />
                </Item>
                <View style={styles.errorWrapper}>
                  {errors.recipient && touched.recipient && (
                    <Text style={styles.textError}>{errors.recipient}</Text>
                  )}
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Item
                  style={
                    errors.adress && touched.adress
                      ? styles.itemInputError
                      : styles.itemInput
                  }
                  placeholderLabel
                  regular
                  floatingLabel>
                  <Input
                    style={styles.input}
                    placeholder="Address"
                    placeholderTextColor="#9b9b9b"
                    name="adress"
                    value={values.adress}
                    onChangeText={handleChange('adress')}
                    onBlur={handleBlur('adress')}
                  />
                </Item>
                <View style={styles.errorWrapper}>
                  {errors.adress && touched.adress && (
                    <Text style={styles.textError}>{errors.adress}</Text>
                  )}
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Item
                  style={
                    errors.city && touched.city
                      ? styles.itemInputError
                      : styles.itemInput
                  }
                  placeholderLabel
                  regular
                  floatingLabel>
                  <Input
                    style={styles.input}
                    placeholder="City"
                    placeholderTextColor="#9b9b9b"
                    name="city"
                    value={values.city}
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                  />
                </Item>
                <View style={styles.errorWrapper}>
                  {errors.city && touched.city && (
                    <Text style={styles.textError}>{errors.city}</Text>
                  )}
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Item
                  style={
                    errors.state && touched.state
                      ? styles.itemInputError
                      : styles.itemInput
                  }
                  placeholderLabel
                  regular
                  floatingLabel>
                  <Input
                    style={styles.input}
                    placeholder="State/Province/Region"
                    placeholderTextColor="#9b9b9b"
                    name="state"
                    value={values.state}
                    onChangeText={handleChange('state')}
                    onBlur={handleBlur('state')}
                  />
                </Item>
                <View style={styles.errorWrapper}>
                  {errors.state && touched.state && (
                    <Text style={styles.textError}>{errors.state}</Text>
                  )}
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Item
                  style={
                    errors.postalCode && touched.postalCode
                      ? styles.itemInputError
                      : styles.itemInput
                  }
                  placeholderLabel
                  regular
                  floatingLabel>
                  <Input
                    style={styles.input}
                    placeholder="Zip Code (Postal Code)"
                    placeholderTextColor="#9b9b9b"
                    name="postalCode"
                    value={values.postalCode}
                    onChangeText={handleChange('postalCode')}
                    onBlur={handleBlur('postalCode')}
                  />
                </Item>
                <View style={styles.errorWrapper}>
                  {errors.postalCode && touched.postalCode && (
                    <Text style={styles.textError}>{errors.postalCode}</Text>
                  )}
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Item
                  style={
                    errors.phoneNumber && touched.phoneNumber
                      ? styles.itemInputError
                      : styles.itemInput
                  }
                  placeholderLabel
                  regular
                  floatingLabel>
                  <Input
                    style={styles.input}
                    placeholder="Phone number"
                    placeholderTextColor="#9b9b9b"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                  />
                </Item>
                <View style={styles.errorWrapper}>
                  {errors.phoneNumber && touched.phoneNumber && (
                    <Text style={styles.textError}>{errors.phoneNumber}</Text>
                  )}
                </View>
              </View>
              <View style={styles.btnWrapper}>
                <Button
                  onPress={handleSubmit}
                  style={styles.btnSave}
                  full
                  rounded>
                  <Text style={styles.btnText}>SAVE ADDRESS</Text>
                </Button>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 17,
    paddingRight: 15,
  },
  itemInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderColor: 'white',
  },
  itemInputError: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderColor: 'red',
  },
  inputWrapper: {
    marginBottom: 20,
  },
  input: {
    fontSize: 14,
    color: '#222222',
  },
  btnWrapper: {
    marginTop: 30,
  },
  btnSave: {
    backgroundColor: '#DB3022',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  textError: {
    fontSize: 12,
    marginLeft: 10,
    color: 'red',
  },
  errorWrapper: {
    height: 5,
  },
});
