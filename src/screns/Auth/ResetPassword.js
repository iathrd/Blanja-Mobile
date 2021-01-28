import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Item, Button} from 'native-base';

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
        <View style={styles.formWrapper}>
          <View style={styles.inputWrapper}>
            <Item style={styles.item} placeholderLabel regular>
              <Input
                style={styles.input}
                placeholder="New Password"
                placeholderTextColor="#9b9b9b"
                secureTextEntry
              />
            </Item>
          </View>
          <View>
            <Item style={styles.item} placeholderLabel regular>
              <Input
                style={styles.input}
                placeholder="Confirmation New Password"
                placeholderTextColor="#9b9b9b"
                secureTextEntry
              />
            </Item>
          </View>
        </View>
        <View>
          <Button style={styles.btnReset} full rounded>
            <Text style={styles.btnText}>Reset Password</Text>
          </Button>
        </View>
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
});
