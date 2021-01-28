import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Item, Button} from 'native-base';
import {Formik} from 'formik';
import {inputEmail} from '../../helpers/formValidation';

export default function ForgotPassword({navigation}) {
  return (
    <View style={styles.parent}>
      <View style={styles.content}>
        <View style={styles.labelWrapper}>
          <Text style={styles.labelText}> Forgot Password</Text>
        </View>
        <View style={styles.desWrapper}>
          <Text style={styles.des}>
            Please, enter your email address. You will receive a link to create
            a new password via email.
          </Text>
        </View>
        <Formik
          initialValues={{email: ''}}
          validationSchema={inputEmail}
          onSubmit={(values) => navigation.navigate('ResetPassword')}>
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
                <Item style={styles.item} placeholderLabel regular>
                  <Input
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#9b9b9b"
                    name="email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                </Item>
                <View style={styles.errorWrapper}>
                  {errors.email && touched.email && (
                    <Text style={styles.textError}>{errors.email}</Text>
                  )}
                </View>
              </View>
              <View>
                <Button
                  onPress={handleSubmit}
                  style={styles.btnSend}
                  full
                  rounded>
                  <Text style={styles.btnText}>Send</Text>
                </Button>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 16,
    paddingTop: 30,
  },
  labelText: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#222222',
  },
  labelWrapper: {
    marginBottom: 87,
  },
  des: {
    fontSize: 14,
    lineHeight: 20,
    color: '#222222',
  },
  desWrapper: {
    marginBottom: 16,
  },
  item: {
    borderRadius: 4,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  input: {
    fontSize: 14,
    lineHeight: 20,
    color: '#2D2D2D',
    paddingLeft: 10,
  },
  inputWrapper: {
    marginBottom: 70,
  },
  btnSend: {
    backgroundColor: '#DB3022',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  errorWrapper: {
    height: 4,
    marginLeft: 15,
    marginTop: 4,
  },
  textError: {
    fontSize: 11,
    lineHeight: 11,
    color: '#F01F0E',
  },
  
});
