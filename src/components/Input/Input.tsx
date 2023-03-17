import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
  render() {
    return (
      <div className="input-wrapper">
        <label>Name:</label>
        <input type="text" name="name" />
      </div>
    );
  }
}

export default Input;
