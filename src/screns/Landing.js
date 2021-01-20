import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Button} from 'native-base';

export default function Landing({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/Landing2.jpg')}>
        <View style={styles.content}>
          <View style={styles.labelWrapper}>
            <Text style={styles.textLabel}>Welcome to Blanja</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.btnWrapper}>
              <Button
                onPress={() => navigation.navigate('Register')}
                style={styles.btnSign}
                full
                bordered
                rounded>
                <Text style={styles.textSign}>Sign Up</Text>
              </Button>
            </View>
            <View>
              <Button
                onPress={() => navigation.navigate('Login')}
                style={styles.btnLogin}
                full
                rounded>
                <Text style={styles.textLogin}>Login</Text>
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    paddingTop: '30%',
  },
  textLabel: {
    color: 'white',
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
  },
  labelWrapper: {
    flex: 1,
  },
  btnLogin: {
    backgroundColor: '#DB3022',
  },
  textLogin: {
    color: 'white',
    textTransform: 'uppercase',
  },
  btnSign: {
    borderColor: 'black',
  },
  textSign: {
    color: 'white',
    textTransform: 'uppercase',
  },
  footer: {
    width: '100%',
    paddingBottom: '10%',
    paddingLeft: 16,
    paddingRight: 16,
  },
  btnWrapper: {
    marginBottom: 16,
  },
});
