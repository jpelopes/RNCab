import React, { Component } from 'react';
import { View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoder';

import LocationSearch from '../LocationSearch';

import styles from './styles';

export default class MapScreen extends Component {
  constructor() {
    super();

    this.state = {
      locations: {
        origin: {},
        destination: {},
      },
    };
  }

  onMarkerDrag = (identifier, coordinates) => {
    Geocoder.geocodePosition({
      lat: coordinates.latitude,
      lng: coordinates.longitude,
    }).then((response) => {
      this[`${identifier}LocationSearchRef`]
        .googlePlacesAutocompleteRef
        .setAddressText(`${response[0].streetName}, ${response[0].streetNumber}`);

      this.setState(state => ({
        locations: {
          ...state.locations,
          [identifier]: {
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          },
        },
      }));
    });
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
          pinColor={identifier === 'origin' ? 'red' : 'blue'}
          draggable
          onDragEnd={e => this.onMarkerDrag(identifier, e.nativeEvent.coordinate)}
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
                ref={(ref) => {
                  this[`${identifier}LocationSearchRef`] = ref;
                }}
              />))
          }
        </View>
      </View>
    );
  }
}
