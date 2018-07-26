import React, { Component } from 'react';
import { StyleSheet, AppRegistry, TextInput } from 'react-native';

export class NumberInput extends Component {

  onSubmit = (text) => {
    if (/^([0-9]+(\.[0-9]+)?)$/.test(text)) {
      this.props.onSubmitEditing(text);
    } else {
      alert("Insert numeric value");
    }
  }

  render() {
    return (
      <TextInput
        style={[styles.numberInput, (this.props.editable ? {} : styles.disabledNumberInput)]}
        multiline={false}
        maxLength={10}
        keyboardType='numeric'
        {...this.props}
        onSubmitEditing={() => this.onSubmit(this.props.value)}
        value={`${this.props.value}`}
        autoCorrect={false}
        underlineColorAndroid={(this.props.editable ? 'gray' : 'transparent')}
      />
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('IncomeCalculator', () => NumberInput);

const styles = StyleSheet.create({
  numberInput: {
    height: 30,
    width: 100,
    marginBottom: 5,
    fontSize: 15,
    backgroundColor: 'lightgray',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 2
  },
  disabledNumberInput: {
    backgroundColor: 'gray',
  }
});