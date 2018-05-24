import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -19.9245,
            longitude: -43.9352,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421, 
          }}
        >
          <Marker
            coordinate={{
              latitude: -19.9245,
              longitude: -43.9352,
            }}
          />
        </MapView>
      </View>
    );
  }
}
