import React, { Component } from 'react';
import CarsContext from './CarsContext';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';



class TrafficSignal extends Component {
  constructor() {
    super();
    this.renderSignal = this.renderSignal.bind(this);
  }
  
  renderSignal(signalColor) {
    switch (signalColor) {
      case 'red': return redSignal;
      case 'yellow': return yellowSignal;
      case 'green': return greenSignal;
      default: return null
    }
  }

  render() {
    const { signal: { color }, changeSignal } = this.context;
    return (
      <div>
        <div className="button-container">
          <button onClick={() => changeSignal('red')} type="button">
            Red
          </button>
          <button onClick={() => changeSignal('yellow')} type="button">
            Yellow
          </button>
          <button onClick={() => changeSignal('green')} type="button">
            Green
          </button>
        </div>
        <img className="signal" src={this.renderSignal(color)} alt="" />
      </div>
    );
  }
};

TrafficSignal.contextType = CarsContext;

export default TrafficSignal;
