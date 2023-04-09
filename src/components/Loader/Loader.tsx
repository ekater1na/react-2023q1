import React from 'react';
import './Loader.scss';
export const Loader = () => {
  return (
    <div className="loader-container" data-testid="loader">
      <div id="img1" className="img"></div>
      <div id="img2" className="img"></div>
      <div id="img3" className="img"></div>
      <div id="img4" className="img"></div>
      <div id="img5" className="img"></div>
    </div>
  );
};
