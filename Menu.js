import React from 'react';
import { StyleSheet, Text, View, ListView, Button } from 'react-native';

const menu = [
  'Meat',
  'Fish',
  'Vegetable',
  'Fruit'
];

export default class Menu extends React.Component {
  render() {

  	const { storeName } = this.props;

  	return (
	    <View>
	    	<Text>{storeName}</Text>
	    </View>
	);
  }
}
