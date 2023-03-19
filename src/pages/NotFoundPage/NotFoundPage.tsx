import React, { Component } from 'react';
import './NotFoundPage.scss';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="not-found-page-wrapper" data-testid="not-found-page">
        <span>404</span>
      </div>
    );
  }
}

export default NotFoundPage;
