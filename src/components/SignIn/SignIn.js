/* eslint react/prop-types: 0 */
import React from 'react';
import { View, Button } from 'react-native';

import styles from './styles';

export default function SignIn(props) {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => props.navigation.navigate('App')}
        title="Sign in"
        style={styles.button}
      />
    </View>
  );
}
