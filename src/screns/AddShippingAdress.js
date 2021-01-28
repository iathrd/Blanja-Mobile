import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Item, Input, Button} from 'native-base';
import {Formik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import ModalSucces from '../components/ModalSuccess';
import ModalError from '../components/ModalError';
import CheckBox from '@react-native-community/checkbox';

import {createAdressSchema} from '../helpers/formValidation';
import adressAction from '../redux/actions/adresss';

export default function AddShippingAdress({navigation}) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const adress = useSelector((state) => state.adress);

  const createAdress = (values) => {
    dispatch(adressAction.createAdress(token, values));
  };

  const closeSuccess = () => {
    dispatch(adressAction.clearMessage());
    navigation.goBack();
  };

  const closeError = () => {
    dispatch(adressAction.clearMessage());
  };
  return (
    <ScrollView>
      {adress.adressSuccess && (
        <ModalSucces
          modal={adress.adressSuccess}
          handleClose={closeSuccess}
          message={adress.alertMsg}
        />
      )}
      {adress.isError && (
        <ModalError
          modal={adress.isError}
          handleClose={closeError}
          message={adress.alertMsg}
        />
      )}
      <View style={styles.content}>
        <Formik
          initialValues={{
            recipient: '',
            adress: '',
            city: '',
            saveAs: '',
            postalCode: '',
            phoneNumber: '',
            isPrimary: false,
          }}
          validationSchema={createAdressSchema}
          onSubmit={(values) => createAdress(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
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
                    errors.saveAs && touched.saveAs
                      ? styles.itemInputError
                      : styles.itemInput
                  }
                  placeholderLabel
                  regular
                  floatingLabel>
                  <Input
                    style={styles.input}
                    placeholder="Save as (ex:Home adress,Office)"
                    placeholderTextColor="#9b9b9b"
                    name="saveAs"
                    value={values.saveAs}
                    onChangeText={handleChange('saveAs')}
                    onBlur={handleBlur('saveAs')}
                  />
                </Item>
                <View style={styles.errorWrapper}>
                  {errors.saveAs && touched.saveAs && (
                    <Text style={styles.textError}>{errors.saveAs}</Text>
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
              <View style={styles.checkBoxWrapper}>
                <CheckBox
                  value={values.isPrimary}
                  name="isPrimary"
                  onValueChange={() =>
                    setFieldValue('isPrimary', !values.isPrimary)
                  }
                  tintColors={{true: '#DB3022', false: '#9b9b9b'}}
                  onFillColor="#DB3022"
                />
                <View>
                  <Text style={styles.cekText}>Save as primary adress</Text>
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
  checkBoxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cekText: {
    color: '#9b9b9b',
  },
});
