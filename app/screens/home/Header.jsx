import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import logo from '../../../assets/images/logo.png';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  const { user } = useUser();
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user.imageUrl }}
        style={{ width: 45, height: 45, borderRadius: 99 }}
      />
      <Image
        source={logo}
        style={{
          width: 200,
          height: 45,
          objectFit: 'contain',
        }}
      />
      <FontAwesome name="filter" size={26} color="black" />
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
