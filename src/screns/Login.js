import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Item, Input, Button, Spinner} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ModalError from '../components/ModalError';

import {useDispatch, useSelector} from 'react-redux';
import authAction from '../redux/actions/auth';
import {Formik} from 'formik';

export default function Login() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const closeError = () => {
    dispatch(authAction.clearMessage());
  };

  const login = (values) => {
    dispatch(authAction.doLogin(values));
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
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => login(values)}>
        {({handleBlur, handleChange, handleSubmit, values}) => (
          <View>
            <View style={styles.labelWrapper}>
              <Text style={styles.loginText}>Login</Text>
            </View>
            <View>
              <View style={styles.inputWrapper}>
                <Item style={styles.item} placeholderLabel regular>
                  <Input
                    style={styles.input}
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    placeholderTextColor="#9b9b9b"
                  />
                </Item>
              </View>
              <View style={styles.inputWrapper}>
                <Item style={styles.item} placeholderLabel regular>
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
              </View>
              <View style={styles.haveWrapper}>
                <View style={styles.have}>
                  <Text style={styles.alreadyText}>Forgot your password?</Text>
                </View>
                <View>
                  <Icon name="arrow-right-alt" size={25} color="#DB3022" />
                </View>
              </View>
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
                    <Text style={styles.btnText}>LOGIN</Text>
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
});
