import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Item, Button} from 'native-base';
import {Formik} from 'formik';
import {resetPassword} from '../../helpers/formValidation';

export default function ResetPassword() {
  return (
    <View style={styles.parent}>
      <View style={styles.content}>
        <View style={styles.labelWrapper}>
          <Text style={styles.labelText}>Forgot password</Text>
        </View>
        <View style={styles.desWrapper}>
          <Text style={styles.des}>
            You need to change your password to activate your account
          </Text>
        </View>
        <Formik
          initialValues={{newPassword: '', repeatPassword: ''}}
          validationSchema={resetPassword}
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
              <View style={styles.formWrapper}>
                <View style={styles.inputWrapper}>
                  <Item style={styles.item} placeholderLabel regular>
                    <Input
                      style={styles.input}
                      placeholder="New Password"
                      placeholderTextColor="#9b9b9b"
                      secureTextEntry
                      name="newPassword"
                      value={values.newPassword}
                      onChangeText={handleChange('newPassword')}
                      onBlur={handleBlur('newPassword')}
                    />
                  </Item>
                  <View style={styles.errorWrapper}>
                    {errors.newPassword && touched.newPassword && (
                      <Text style={styles.textError}>{errors.newPassword}</Text>
                    )}
                  </View>
                </View>
                <View>
                  <Item style={styles.item} placeholderLabel regular>
                    <Input
                      style={styles.input}
                      placeholder="Confirmation New Password"
                      placeholderTextColor="#9b9b9b"
                      secureTextEntry
                      name="repeatPassword"
                      value={values.repeatPassword}
                      onChangeText={handleChange('repeatPassword')}
                      onBlur={handleBlur('repeatPassword')}
                    />
                  </Item>
                  <View style={styles.errorWrapper}>
                    {errors.repeatPassword && touched.repeatPassword && (
                      <Text style={styles.textError}>
                        {errors.repeatPassword}
                      </Text>
                    )}
                  </View>
                </View>
              </View>
              <View>
                <Button
                  onPress={handleSubmit}
                  style={styles.btnReset}
                  full
                  rounded>
                  <Text style={styles.btnText}>Reset Password</Text>
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
    marginBottom: 73,
  },
  des: {
    fontSize: 14,
    lineHeight: 20,
    color: '#F01F0E',
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
    marginBottom: 8,
  },
  formWrapper: {
    marginBottom: 32,
  },
  btnReset: {
    backgroundColor: '#DB3022',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
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
