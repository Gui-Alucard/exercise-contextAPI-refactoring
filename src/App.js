import React, { useState } from 'react';
import './App.css';
import Cars from './Cars';
import Context from './contexts/Context';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      red: false,
      blue: false,
      yellow: false,
    };

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(target) {
    this.setState({ [target]: true })
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, moveCar: this.moveCar }}>
        <Cars />
      </Context.Provider>
    );
  }
}

export default App;
