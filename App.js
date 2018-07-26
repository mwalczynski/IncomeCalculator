import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'react-native';

import Incomes from './components/Incomes'

export default class App extends React.Component {

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Income Calculator</Text>
        <Incomes style={{ flex: 19 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  header: {
    flex: 1,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 25,
    backgroundColor: '#171713',
    color: '#eee9bf',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
