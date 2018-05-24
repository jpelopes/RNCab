/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { View } from 'react-native';

import { connect } from 'react-redux';

import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoder';

import { setOrigin, setDestination } from '../../actions/locations';

import LocationSearch from '../LocationSearch';

import styles from './styles';

const mapStateToProps = state => ({
  locations: state.locations,
});

const mapDispatchToProps = dispatch => ({
  setOrigin: origin => dispatch(setOrigin(origin)),
  setDestination: destination => dispatch(setDestination(destination)),
});

class MapScreen extends Component {
  onMarkerDrag = (identifier, coordinates) => {
    Geocoder.geocodePosition({
      lat: coordinates.latitude,
      lng: coordinates.longitude,
    }).then((response) => {
      this[`${identifier}LocationSearchRef`].getWrappedInstance().googlePlacesAutocompleteRef.setAddressText(`${response[0].streetName}, ${response[0].streetNumber}`);
      this.props[`set${identifier.charAt(0).toUpperCase()}${identifier.slice(1)}`]({
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      });
    });
  }

  marker = (identifier) => {
    if (this.props.locations[identifier] &&
      this.props.locations[identifier].latitude &&
      this.props.locations[identifier].longitude) {
      return (
        <Marker
          coordinate={this.props.locations[identifier]}
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
            Object.keys(this.props.locations).map(identifier => this.marker(identifier))
          }
        </MapView>
        <View style={styles.locationSearchContainer}>
          {
            Object.keys(this.props.locations).map(identifier => (
              <LocationSearch
                identifier={identifier}
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

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
