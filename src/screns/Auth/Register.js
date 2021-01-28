import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Item, Input, Button, Spinner} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Formik} from 'formik';
import ModalError from '../../components/ModalError';
import ModalSucces from '../../components/ModalSuccess';

import {registerSchema} from '../../helpers/formValidation';

import {useSelector, useDispatch} from 'react-redux';
import authAction from '../../redux/actions/auth';

export default function Register({navigation}) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const closeSuccess = () => {
    dispatch(authAction.clearMessage());
    navigation.navigate('Login');
  };

  const closeError = () => {
    dispatch(authAction.clearMessage());
  };

  const registerUser = (data) => {
    dispatch(authAction.register(data));
  };

  return (
    <View style={styles.content}>
      {auth.isError && (
        <ModalError
          modal={auth.isError}
          handleClose={closeError}
          message={auth.alertMsg}
        />
      )}
      {auth.isSuccess && (
        <ModalSucces
          modal={true}
          handleClose={closeSuccess}
          message={auth.alertMsg}
        />
      )}
      <Formik
        initialValues={{name: '', email: '', password: ''}}
        validationSchema={registerSchema}
        onSubmit={(values) => registerUser(values)}>
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
                    errors.name && touched.name ? styles.itemError : styles.item
                  }
                  placeholderLabel
                  regular>
                  <Input
                    style={styles.input}
                    placeholder="Name"
                    placeholderTextColor="#9b9b9b"
                    name="name"
                    value={values.name}
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
                <Button
                  disabled={auth.isLoading ? true : false}
                  onPress={handleSubmit}
                  style={styles.btn}
                  full
                  rounded>
                  {auth.isLoading ? (
                    <Spinner color="white" size={30} />
                  ) : (
                    <Text style={styles.btnText}>SIGN UP</Text>
                  )}
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
