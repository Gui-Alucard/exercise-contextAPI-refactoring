import React from 'react';
import Context from './Context';
import redSignal from '../images/redSignal.jpeg';
import yellowSignal from '../images/yellowSignal.jpeg';
import greenSignal from '../images/greenSignal.jpeg';

class Provider extends React.Component {
  constructor() {
    super();

    this.state = {
      red: false,
      blue: false,
      yellow: false,
      color: 'red',
    };

    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
    this.renderSignal = this.renderSignal.bind(this);
  }

  moveCar(target) {
    const { color } = this.state;
    if (color === 'green') this.setState({ [target]: true });
  };

  changeSignal(target) {
    this.setState({ color: target }, () => {
      const { color } = this.state;
      if (color === 'red' || color === 'yellow') this.setState({
          red: false,
          blue: false,
          yellow: false,
      });
    });
  };

  renderSignal(signalColor) {
    if (signalColor === 'red') return redSignal;
    if (signalColor === 'yellow') return yellowSignal;
    if (signalColor === 'green') return greenSignal;
    return null;
  };

  render() {
    const { children } = this.props;
    return (
      <Context.Provider 
        value={{
          ...this.state,
          moveCar: this.moveCar,
          changeSignal: this.changeSignal,
          renderSignal: this.renderSignal
          }}
        >
        {children}
      </Context.Provider>
    );
  }
}

export default Provider;
