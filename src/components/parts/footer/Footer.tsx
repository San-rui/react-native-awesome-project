import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Footer(): JSX.Element {
  return (
    <View style={styles.highlight}>
      <Text style={styles.text}>Footer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  highlight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '5%',
    backgroundColor: 'blue',
    padding: '3%',
  },
  text: {
    fontSize: 20,
    color: '#FFFFF',
  },
});

export default Footer;
