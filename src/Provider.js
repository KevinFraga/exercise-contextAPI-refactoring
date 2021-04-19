import React, { Component } from 'react';
import App from './App';
import CarsContext from './CarsContext';

class Provider extends Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      },
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  }

  changeSignal(color) {
    this.setState({
      signal: {
        color,
      },
    });
  }

  render() {
    const contextValue = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    };
    return (
      <CarsContext.Provider value={ contextValue }>
        <App />
      </CarsContext.Provider>
    );
  }
}

export default Provider;
