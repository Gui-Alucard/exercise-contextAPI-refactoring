import React from 'react';
import './App.css';
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TrafficSignal />
        <Cars />
      </div>
    );
  }
}

export default App;
