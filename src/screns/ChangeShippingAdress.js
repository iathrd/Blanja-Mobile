import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Item, Input, Label, Button} from 'native-base';
import {Formik} from 'formik';
import ModalSucces from '../components/ModalSuccess';
import CheckBox from '@react-native-community/checkbox';

import {adressSchema} from '../helpers/formValidation';
import {useSelector, useDispatch} from 'react-redux';
import adressAction from '../redux/actions/adresss';

export default function ChangeShippingAdress({route, navigation}) {
  const {data} = route.params;
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const adress = useSelector((state) => state.adress);

  const changeAdress = (values) => {
    dispatch(adressAction.changeAdress(token, values, data.id));
  };

  const closeModal = () => {
    dispatch(adressAction.clearMessage());
    navigation.goBack();
  };

  return (
    <View style={styles.content}>
      {adress.adressSuccess && (
        <ModalSucces
          modal={adress.adressSuccess}
          handleClose={closeModal}
          message={adress.alertMessage}
        />
      )}
      <Formik
        initialValues={{
          saveAs: data.saveAs,
          recipient: data.recipient,
          adress: data.adress,
          city: data.city,
          postalCode: data.postalCode,
          phoneNumber: data.phoneNumber,
          isPrimary: data.isPrimary,
        }}
        validationSchema={adressSchema}
        onSubmit={(values) => changeAdress(values)}>
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
            <View style={styles.InputWrapper}>
              <View style={styles.inputDisplay}>
                <Item
                  style={
                    errors.saveAs && touched.saveAs
                      ? styles.itemError
                      : styles.item
                  }
                  stackedLabel>
                  <Label style={styles.labelInput}>
                    Save address as (ex : home address, office address)
                  </Label>
                  <Input
                    placeholder="Input home"
                    placeholderTextColor="#9b9b9b"
                    style={styles.input}
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
              <View style={styles.inputDisplay}>
                <Item
                  style={
                    errors.recipient && touched.recipient
                      ? styles.itemError
                      : styles.item
                  }
                  stackedLabel>
                  <Label style={styles.labelInput}>Recipient’s name</Label>
                  <Input
                    placeholder="Input recepient's"
                    placeholderTextColor="#9b9b9b"
                    style={styles.input}
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
            </View>
            <View style={styles.InputWrapper}>
              <View style={styles.inputDisplay}>
                <Item
                  style={
                    errors.adress && touched.adress
                      ? styles.itemError
                      : styles.item
                  }
                  stackedLabel>
                  <Label style={styles.labelInput}>Address</Label>
                  <Input
                    placeholder="Input adress"
                    placeholderTextColor="#9b9b9b"
                    style={styles.input}
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
              <View style={styles.inputDisplay}>
                <Item
                  style={
                    errors.city && touched.city ? styles.itemError : styles.item
                  }
                  stackedLabel>
                  <Label style={styles.labelInput}>City or Subdistrict</Label>
                  <Input
                    placeholder="Input City or Subdistrict"
                    placeholderTextColor="#9b9b9b"
                    style={styles.input}
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
              <View style={styles.inputDisplay}>
                <Item
                  style={
                    errors.postalCode && touched.postalCode
                      ? styles.itemError
                      : styles.item
                  }
                  stackedLabel>
                  <Label style={styles.labelInput}>Postal code</Label>
                  <Input
                    placeholder="Input code"
                    placeholderTextColor="#9b9b9b"
                    style={styles.input}
                    name="postalCode"
                    keyboardType="number-pad"
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
            </View>
            <View style={styles.InputWrapper}>
              <View style={styles.inputDisplay}>
                <Item
                  style={
                    errors.phoneNumber && touched.phoneNumber
                      ? styles.itemError
                      : styles.item
                  }
                  stackedLabel>
                  <Label style={styles.labelInput}>
                    recipient's telephone number
                  </Label>
                  <Input
                    placeholder="Input number"
                    placeholderTextColor="#9b9b9b"
                    style={styles.input}
                    name="phoneNumber"
                    keyboardType="phone-pad"
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
            </View>
            <View>
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
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 16,
    paddingRight: 16,
  },
  labelInput: {
    fontSize: 10,
    lineHeight: 20,
    flex: 1,
    width: '100%',
    paddingTop: 14,
    color: '#9b9b9b',
  },
  InputWrapper: {
    backgroundColor: '#FFFFFF',
    elevation: 2,
    paddingRight: 14,
    paddingBottom: 18,
    paddingLeft: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    paddingBottom: 0,
    paddingLeft: 0,
    fontSize: 12,
    lineHeight: 20,
  },
  inputDisplay: {
    width: '100%',
  },
  item: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1.3,
  },
  itemError: {
    borderBottomColor: 'red',
    borderBottomWidth: 1.3,
  },
  btnSave: {
    backgroundColor: '#DB3022',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  textError: {
    fontSize: 10,
    marginLeft: 5,
    color: 'red',
  },
  errorWrapper: {
    height: 3,
  },
  checkBoxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  cekText: {
    color: '#9b9b9b',
  },
});
