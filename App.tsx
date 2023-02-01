/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Footer from './src/components/parts/footer/Footer';
import Header from './src/components/parts/Header/Header';
import Menu from './src/components/parts/Menu/Menu';

function App(): JSX.Element {
  return (
    <View style={styles.body}>
      <Header />
      <Menu />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    fontWeight: '700',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
  },
});

export default App;
