/* eslint react/prop-types: 0 */
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { setOrigin, setDestination } from '../../actions/locations';

import googlePlacesAutocompleteStyle from './styles';

const mapDispatchToProps = dispatch => ({
  setOrigin: origin => dispatch(setOrigin(origin)),
  setDestination: destination => dispatch(setDestination(destination)),
});

class LocationSearch extends Component {
  setLocation = (data, details = null) => {
    this.props[`set${this.props.identifier.charAt(0).toUpperCase()}${this.props.identifier.slice(1)}`]({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    });
  }

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
        onPress={this.setLocation}
        ref={(ref) => { this.googlePlacesAutocompleteRef = ref; }}
      />
    );
  }
}

export default connect(null, mapDispatchToProps, null, { withRef: true })(LocationSearch);
