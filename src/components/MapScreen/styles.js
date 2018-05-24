import { StyleSheet } from 'react-native';

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

export default styles;
