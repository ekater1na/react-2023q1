import React from 'react';
import './Error.scss';

interface ErrorProps {
  error: string;
}

export const Error = ({ error }: ErrorProps) => {
  return (
    <div className="error-wrapper" data-testid="error">
      Error: {error}
    </div>
  );
};
