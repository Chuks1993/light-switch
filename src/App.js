import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isSwitchOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isSwitchOn: !state.isSwitchOn
    }));
  }

  render() {
    return (
      <div className={this.state.isSwitchOn ? 'lights-On' : 'lights-Off'}>
        <div className="switch">
          <button className="switch-Btn" onClick={this.handleClick}>
            {this.state.isSwitchOn ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
