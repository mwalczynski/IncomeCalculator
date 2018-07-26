import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';

import { NumberInput } from '../utils/NumberInput'

export default class Brutto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hourlyValue: null,
      dailyValue: null,
      monthlyValue: null,
    }
  }

  static getDerivedStateFromProps(props) {
    return {
      hourlyValue: props.incomeValue,
      dailyValue: props.incomeValue * 8,
      monthlyValue: props.incomeValue * 168,
    };
  }

  hourlyValueChanged = (input) => {
    this.setState({ hourlyValue: input })
  }

  dailyValueChanged = (input) => {
    this.setState({ dailyValue: input })
  }

  monthlyValueChanged = (input) => {
    this.setState({ monthlyValue: input })
  }

  submitEdit = (newValue) => {
    this.props.onSubmit(newValue);
  }

  render() {
    return (
      <View style={this.props.style}>
        <Text>Netto</Text>
        <NumberInput onChangeText={this.hourlyValueChanged} value={this.state.hourlyValue} onSubmitEditing={() => this.submitEdit(this.state.hourlyValue)} />
        <NumberInput onChangeText={this.dailyValueChanged} value={this.state.dailyValue} onSubmitEditing={() => this.submitEdit(this.state.dailyValue / 8)} />
        <NumberInput onChangeText={this.monthlyValueChanged} value={this.state.monthlyValue} onSubmitEditing={() => this.submitEdit(this.state.monthlyValue / 168)} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('IncomeCalculator', () => Brutto);
