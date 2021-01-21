import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Item, Input, Button} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';

import {registerSchema} from '../helpers/formValidation';

export default function Register({navigation}) {
  return (
    <View style={styles.content}>
      <Formik
        initialValues={{username: '', email: '', password: ''}}
        validationSchema={registerSchema}
        onSubmit={(values) => console.log(values)}>
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <View style={styles.labelWrapper}>
              <Text style={styles.loginText}>Sign up</Text>
            </View>
            <View>
              <View style={styles.inputWrapper}>
                <Item
                  style={
                    errors.username && touched.username
                      ? styles.itemError
                      : styles.item
                  }
                  placeholderLabel
                  regular>
                  <Input
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#9b9b9b"
                    name="username"
                    value={values.username}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                  />
                </Item>
                <View>
                  {errors.username && touched.username && (
                    <Text style={styles.textError}>{errors.username}</Text>
                  )}
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Item
                  style={
                    errors.email && touched.email
                      ? styles.itemError
                      : styles.item
                  }
                  placeholderLabel
                  regular>
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
                <View>
                  {errors.email && touched.email && (
                    <Text style={styles.textError}>{errors.email}</Text>
                  )}
                </View>
              </View>
              <View style={styles.inputWrapper}>
                <Item
                  style={
                    errors.password && touched.password
                      ? styles.itemError
                      : styles.item
                  }
                  placeholderLabel
                  regular>
                  <Input
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#9b9b9b"
                    name="password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry
                  />
                </Item>
                <View>
                  {errors.password && touched.password && (
                    <Text style={styles.textError}>{errors.password}</Text>
                  )}
                </View>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View style={styles.haveWrapper}>
                  <View style={styles.have}>
                    <Text style={styles.alreadyText}>
                      Already have an account?
                    </Text>
                  </View>
                  <View>
                    <Icon name="arrow-right-alt" size={25} color="#DB3022" />
                  </View>
                </View>
              </TouchableOpacity>
              <View>
                <Button onPress={handleSubmit} style={styles.btn} full rounded>
                  <Text style={styles.btnText}>SIGN UP</Text>
                </Button>
              </View>
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
    paddingLeft: 14,
    paddingRight: 16,
    paddingTop: 30,
  },
  loginText: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#222222',
  },
  labelWrapper: {
    marginBottom: 73,
  },
  inputWrapper: {
    marginBottom: 8,
  },
  item: {
    borderRadius: 4,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  itemError: {
    borderRadius: 4,
    borderColor: 'red',
    backgroundColor: 'white',
  },
  input: {
    fontSize: 14,
    lineHeight: 20,
    color: '#2D2D2D',
    paddingLeft: 10,
  },
  haveWrapper: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 28,
  },
  alreadyText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#2D2D2D',
  },
  have: {
    marginRight: 8,
  },
  btn: {
    backgroundColor: '#DB3022',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  textError: {
    fontSize: 12,
    color: 'red',
    marginLeft: 10,
  },
});
