import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logo from './../../../assets/images/logo.png';
import splashScreenImage from '../../../assets/images/splashscreen.png';
const Login = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
      }}
    >
      <Image source={logo} style={styles.logoImage} />
      <Image source={splashScreenImage} style={styles.splashImage} />
      <View style={{ padding: 20 }}></View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoImage: {
    width: 200,
    height: 40,
    objectFit: 'contain',
  },
  splashImage: {
    width: 400,
    height: 400,
    objectFit: 'contain',
  },
});
