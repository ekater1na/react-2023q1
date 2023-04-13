import React from 'react';
import './Error.scss';

export interface ErrorMessageProps {
  error: {
    data: {
      errors: string[];
    };
    status: number;
  };
}

export const Error = ({ error }: ErrorMessageProps) => {
  return (
    <div className="error-wrapper" data-testid="error">
      <div>An error has occurred: {error.status}</div>
      {error.data.errors && <div>{error.data.errors}</div>}
    </div>
  );
};
