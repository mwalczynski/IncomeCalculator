import React, { Component } from 'react';
import { AppRegistry, View, Button } from 'react-native';

import IncomeType from './IncomeType';

export default class Incomes extends Component {

  bruttoToNettoRatio = 2;
  varToBruttoRatio = 1.18;

  constructor() {
    super();
    this.state = {
      incomeValue: 2,
      showTax: false
    };
  }

  onNettoValueSubmit = (newValue) => {
    this.setState({ incomeValue: newValue });
  }

  onBruttoValueSubmit = (newValue) => {
    this.setState({ incomeValue: newValue / this.bruttoToNettoRatio });
  }

  onButtonPress = () => {
    this.setState({ showTax: !this.state.showTax })
  }

  render() {

    const taxIncome = <IncomeType
      name={'+18% TAX'}
      editable={false}
      selectTextOnFocus={false}
      style={{ flex: 1, backgroundColor: '#b0e0e6' }}
      incomeValue={this.state.incomeValue * this.bruttoToNettoRatio * this.varToBruttoRatio}
      onSubmit={this.onBruttoValueSubmit}
    />

    return (
      <View style={this.props.style}>
        <IncomeType
          name={'Netto'}
          style={{ flex: 1, backgroundColor: '#4960a0' }}
          incomeValue={this.state.incomeValue}
          onSubmit={this.onNettoValueSubmit}
        />
        <IncomeType
          name={'Brutto'}
          style={{ flex: 1, backgroundColor: '#5e9cd5' }}
          incomeValue={this.state.incomeValue * this.bruttoToNettoRatio}
          onSubmit={this.onBruttoValueSubmit}
        />
        {this.state.showTax ? taxIncome : <View></View>}
        <Button
          onPress={this.onButtonPress}
          title={(this.state.showTax ? 'Hide +18% TAX' : 'Show +18% TAX')}
          color='#841584'
        />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('IncomeCalculator', () => Incomes);
