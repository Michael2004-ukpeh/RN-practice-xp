import React, { useCallback } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import logo from './../../../assets/images/logo.png';
import * as WebBrowser from 'expo-web-browser';
import splashScreenImage from '../../../assets/images/splashscreen.png';
import { useWarmUpBrowser } from '../../../hooks/warmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';
import colors from '../../utils/colors';
WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  });
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
      }}
    >
      <View style={styles.logo}>
        <Text style={styles.logoText}>Chargspot</Text>
        <Image source={logo} style={styles.logoImage} />
      </View>

      <Image source={splashScreenImage} style={styles.splashImage} />
      <View style={{ padding: 20, width: '100%' }}>
        <Text style={styles.title}> Your Ultimate Charging Finder App</Text>
        <Text style={styles.paragraph}>
          {' '}
          Plan your trips with on the map reliable site
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonTxt}>Login With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    maxHeight: 'content',
    rowGap: 0,
  },
  logoText: {
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
    textAlign: 'center',
  },
  logoImage: {
    width: 80,
    height: 40,
    objectFit: 'contain',
    marginLeft: -20,
    transform: [
      {
        translateY: -6,
      },
    ],
  },
  splashImage: {
    width: 400,
    height: 400,
    objectFit: 'contain',
    marginTop: -50,
  },
  title: {
    fontFamily: 'Outfit-SemiBold',
    fontSize: 30,
    textAlign: 'center',
    marginTop: -90,
  },
  paragraph: {
    fontFamily: 'Outfit-Regular',
    fontSize: 20,
    textAlign: 'center',
    color: colors.GRAY,
    marginBottom: 50,
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: colors.PRIMARY,
    textAlign: 'center',
    borderRadius: 99,
  },
  buttonTxt: {
    textAlign: 'center',
    color: colors.WHITE,
    fontFamily: 'Outfit-SemiBold',
    fontSize: 20,
  },
});
