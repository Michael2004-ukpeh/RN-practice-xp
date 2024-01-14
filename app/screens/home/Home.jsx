import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppMapView from './AppMapView';
import Header from './Header';
import colors from '../../utils/colors';
import Searchbar from './Searchbar';

export default function Home() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <Searchbar />
      </View>
      <AppMapView />
    </View>
  );
}

let styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 10,
    width: '100%',
    paddingHorizontal: 17,
    backgroundColor: colors.WHITE_TRANSP,
    borderBottomColor: '#555555',
    borderBottomWidth: 1,
  },
});
