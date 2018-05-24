/* eslint react/prop-types: 0 */
import React, { Component } from 'react';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import googlePlacesAutocompleteStyle from './styles';

export default class LocationSearch extends Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder={this.props.identifier}
        minLength={1}
        autoFocus={false}
        returnKeyType="search"
        listViewDisplayed="auto"
        fetchDetails
        styles={googlePlacesAutocompleteStyle}
        query={
          {
            key: process.env.API_KEY,
            language: 'pt-BR',
            location: '-19.9245, -43.9352',
            radius: '30000',
            strictbounds: 'true',
          }
        }
        onPress={this.props.onPress}
        ref={(ref) => { this.googlePlacesAutocompleteRef = ref; }}
      />
    );
  }
}
