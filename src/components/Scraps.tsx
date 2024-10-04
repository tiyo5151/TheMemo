import React from 'react';
import '../styles/Scraps.css';

const Scraps = () => {
  return (
    <div className="app-scraps">
      <div className="app-scrap-header">
        Sample
        <div className="google-icon"></div>
      </div>
      <div className="app-scrap-content">
        This is a sample scrapaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div className="app-scrap-input">
        <div className="input-header">
          sadsadsads
          <div className="google-icon-input"></div>
        </div>
        <textarea placeholder="Enter your memo"></textarea>
        <div className="input-footer">
          <button>追加</button>
        </div>
      </div>
    </div>
  );
};

export default Scraps;
