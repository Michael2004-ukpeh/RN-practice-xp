import { View, Text } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function Searchbar() {
  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="Search Chargspots"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: '',
          language: 'en',
        }}
      />
    </View>
  );
}
