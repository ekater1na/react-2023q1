import React from 'react';
import './Error.scss';

interface ErrorProps {
  error: string;
}

export const Error = ({ error }: ErrorProps) => {
  return <div data-testid="error">Error: {error}</div>;
};
