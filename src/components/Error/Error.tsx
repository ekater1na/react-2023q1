import React from 'react';
import './Error.scss';

export const Error = (error: string) => {
  return (
    <div className="error-wrapper" data-testid="error">
      <div>An error has occurred: </div>
      <div>{error}</div>
    </div>
  );
};
