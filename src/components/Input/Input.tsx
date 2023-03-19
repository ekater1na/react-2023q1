import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
  render() {
    return (
      <div className="input-wrapper" data-testid="input">
        <label>Name:</label>
        <input type="text" name="name" />
      </div>
    );
  }
}

export default Input;
