import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View } from 'react-native';
import PropTypes from 'prop-types'

import { NumberInput } from '../utils/NumberInput'

class IncomeType extends Component {

  constructor(props) {
    super(props);
    this.state = {
      originalValue: null,
      hourlyValue: null,
      dailyValue: null,
      monthlyValue: null,
    }
  }

  static toFixedIfNecessary = (value, dp = 2) => {
    return +parseFloat(value).toFixed(dp);
  }

  static getDerivedStateFromProps(props) {
    return {
      originalValue: IncomeType.toFixedIfNecessary(props.incomeValue * 1),
      hourlyValue: IncomeType.toFixedIfNecessary(props.incomeValue * 1),
      dailyValue: IncomeType.toFixedIfNecessary(props.incomeValue * 8),
      monthlyValue: IncomeType.toFixedIfNecessary(props.incomeValue * 168)
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

  onInputBlur = () => {
    this.setState({
      hourlyValue: IncomeType.toFixedIfNecessary(this.state.originalValue * 1),
      dailyValue: IncomeType.toFixedIfNecessary(this.state.originalValue * 8),
      monthlyValue: IncomeType.toFixedIfNecessary(this.state.originalValue * 168)
    })
  }

  render() {
    return (
      <View style={[this.props.style, styles.incomeContainer]}>
        <Text style={styles.header}>{this.props.name}</Text>
        <View>
          <NumberInput
            editable={this.props.editable}
            onChangeText={this.hourlyValueChanged}
            value={this.state.hourlyValue}
            onSubmitEditing={() => this.submitEdit(this.state.hourlyValue)}
            onBlur={this.onInputBlur}
          />
          <NumberInput
            editable={this.props.editable}
            onChangeText={this.dailyValueChanged}
            value={this.state.dailyValue}
            onSubmitEditing={() => this.submitEdit(this.state.dailyValue / 8)}
            onBlur={this.onInputBlur}
          />
          <NumberInput
            editable={this.props.editable}
            onChangeText={this.monthlyValueChanged}
            value={this.state.monthlyValue}
            onSubmitEditing={() => this.submitEdit(this.state.monthlyValue / 168)}
            onBlur={this.onInputBlur}
          />
        </View>
      </View>
    );
  }
}

IncomeType.propTypes = {
  editable: PropTypes.bool,
  selectTextOnFocus: PropTypes.bool
};

IncomeType.defaultProps = {
  editable: true,
  selectTextOnFocus: true
};

export default IncomeType;

// skip this line if using Create React Native App
AppRegistry.registerComponent('IncomeCalculator', () => IncomeType);

const styles = StyleSheet.create({
  incomeContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

