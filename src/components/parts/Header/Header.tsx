import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Header(): JSX.Element {
  return (
    <View style={styles.highlight}>
      <Text style={styles.text}>Your New App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  highlight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '10%',
    backgroundColor: 'red',
    padding: '3%',
  },
  text: {
    fontSize: 20,
  },
});

export default Header;
