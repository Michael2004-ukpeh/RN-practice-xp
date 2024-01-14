import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import React, { useContext } from 'react';
import MapViewStyle from '../../utils/MapViewStyle.json';
import { UserLocationContext } from '../../context/UserLocationContext';
import carMarker from '../../../assets/images/car-marker.png';

export default function AppMapView() {
  const { location, setLocation } = useContext(UserLocationContext);
  return (
    location?.latitude && (
      <View>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={MapViewStyle}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0422,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location?.latitude,
              longitude: location?.longitude,
            }}
          >
            <Image
              source={carMarker}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </Marker>
        </MapView>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
