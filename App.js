import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import LocationSearch from './src/components/LocationSearch';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  locationSearchContainer: {
    width: '90%',
    elevation: 10,
    backgroundColor: '#fff',
    paddingLeft: 15,
    marginTop: 30,
  },
});

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      locations: {
        origin: {},
        destination: {},
      },
    };
  }

  setLocation = identifier => (data, details) => {
    this.setState(state => ({
      locations: {
        ...state.locations,
        [identifier]: {
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
        },
      },
    }));
  }

  marker = (identifier) => {
    if (this.state.locations[identifier] &&
      this.state.locations[identifier].latitude &&
      this.state.locations[identifier].longitude) {
      return (
        <Marker
          coordinate={this.state.locations[identifier]}
          key={`marker_${identifier}`}
        />
      );
    }

    return null;
  }

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
          {
            Object.keys(this.state.locations).map(identifier => this.marker(identifier))
          }
        </MapView>
        <View style={styles.locationSearchContainer}>
          {
            Object.keys(this.state.locations).map(identifier => (
              <LocationSearch
                identifier={identifier}
                onPress={this.setLocation(identifier)}
                key={`search_${identifier}`}
              />))
          }
        </View>
      </View>
    );
  }
}
