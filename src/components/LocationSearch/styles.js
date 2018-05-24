import { StyleSheet } from 'react-native';

const googlePlacesAutocompleteStyle = StyleSheet.create({
  container: {
    flex: 0,
    width: '100%',
  },
  description: {
    color: 'rgba(0, 0, 0, 0.9)',
  },
  textInputContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    borderRadius: 0,
    color: 'rgba(0, 0, 0, 0.7)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  listView: {
    backgroundColor: '#fff',
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});

export default googlePlacesAutocompleteStyle;
