import React, { Component } from 'react';
import '../stylings/App.css';

import OperationContainer from './operationContainer';
import ActionsContainer from './actionsContainer';
import NumPad from './numberContainer';
import Display from './display';

class App extends Component {

  constructor(){
    super();
    this.state = {
      numbers: ['', ''],
      activeNumber: 0,
      operation: null,
      displayVal: ''
    };
  }

  numberClickHandler = event => {
    const { numbers, activeNumber } = this.state;
    const addValue = event.target.innerHTML;
    numbers[activeNumber] += addValue;
    const displayVal = numbers[activeNumber];
    this.setState({numbers, displayVal});
  }

  operationClickHandler = event => {
    this.setState({operation: event.target.innerHTML, activeNumber: 1});
  }

  clearDisplay = () => {
    this.setState({
      numbers: ['', ''],
      activeNumber: 0,
      displayVal: '',
      operation: null
    });
  }

  equalClickHandler = () => {
    const {numbers, operation} = this.state;
    const n1 = Number(numbers[0]);
    const n2 = Number(numbers[1]);
    let displayVal = '';

    switch (operation) {
      case '+':
        displayVal = n1 + n2;
        break;
      case '-':
        displayVal = n1 - n2;
        break;
      case '*':
        displayVal = n1 * n2;
        break;
      case '/':
        displayVal = n1 / n2;
        break;
      default:
        break;
    }

    this.setState({displayVal});
  }

  render() {

    const {
      displayVal
    } = this.state;

    return (
      <div className="App">
        <Display val={displayVal} />
        <OperationContainer clickHandler={this.operationClickHandler}/>
        <NumPad clickHandler={this.numberClickHandler} />
        <ActionsContainer
          clearClickHandler={this.clearDisplay}
          equalClickHandler={this.equalClickHandler}
        />
      </div>
    );
  }
}

export default App;
