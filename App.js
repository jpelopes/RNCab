import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      location: {
        latitude: -19.9245,
        longitude: -43.9352,
      },
    };
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
          <Marker
            coordinate={this.state.location}
          />
        </MapView>
        <GooglePlacesAutocomplete
          placeholder="Busca"
          minLength={1}
          autoFocus={false}
          returnKeyType="search"
          listViewDisplayed="auto"
          fetchDetails
          styles={
            {
              textInputContainer: {
                width: '100%',
              },
              listView: {
                backgroundColor: '#fff',
              },
            }
          }
          query={
            {
              key: process.env.API_KEY,
              language: 'pt-BR',
              location: '-19.9245, -43.9352',
              radius: '30000',
              strictbounds: 'true',
            }
          }
          onPress={
            (data, details) => {
              this.setState(state => ({
                location: {
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                },
              }));
            }
          }
        />
      </View>
    );
  }
}
