import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

const Menu = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        horizontal={false}
        indicatorStyle={'white'}>
        <Text style={styles.itemList}> My Menu </Text>
        <Text style={styles.itemList}>text 1</Text>
        <Text style={styles.itemList}>text 2</Text>
        <Text style={styles.itemList}>text 3</Text>
        <Text style={styles.itemList}>text 4</Text>
        <Text style={styles.itemList}>text 5</Text>
        <Text style={styles.itemList}>text 6</Text>
        <Text style={styles.itemList}>text 1</Text>
        <Text style={styles.itemList}>text 2</Text>
        <Text style={styles.itemList}>text 3</Text>
        <Text style={styles.itemList}>text 4</Text>
        <Text style={styles.itemList}>text 5</Text>
        <Text style={styles.itemList}>text 6</Text>
        <Text style={styles.itemList}>text 1</Text>
        <Text style={styles.itemList}>text 2</Text>
        <Text style={styles.itemList}>text 3</Text>
        <Text style={styles.itemList}>text 4</Text>
        <Text style={styles.itemList}>text 5</Text>
        <Text style={styles.itemList}>text 6</Text>
        <Text style={styles.itemList}>text 1</Text>
        <Text style={styles.itemList}>text 2</Text>
        <Text style={styles.itemList}>text 3</Text>
        <Text style={styles.itemList}>text 4</Text>
        <Text style={styles.itemList}>text 5</Text>
        <Text style={styles.itemList}>text 6</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    padding: 40,
    backgroundColor: 'blue',
  },
  itemList: {
    fontSize: 40,
    flexWrap: 'wrap',
    color: 'white',
  },
});

export default Menu;
