import React from 'react';
import './Input.scss';

export const Input = () => {
  return (
    <div className="input-wrapper" data-testid="input">
      <label>Name:</label>
      <input type="text" name="name" />
    </div>
  );
};
