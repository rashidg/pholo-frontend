import React from 'react';
import { StyleSheet, Text, View, ListView, Button } from 'react-native';

import Menu from './Menu.js';

const menu1 = [
  'Meat',
  'Fish',
  'Vegetable',
  'Fruit'
];

export default class App extends React.Component {
  render() {
    return (<Menu storeName={"Sasha's pelmeni"} />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
