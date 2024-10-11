import React from 'react';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { GoPlus } from 'react-icons/go';
import '../styles/Scraps.css';

const Scraps = () => {
  return (
    <div className="app-scraps">
      <div className="app-scrap-header">Sample</div>
      <div className="app-scrap-content">
        This is a sample scrapaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
      <div className="app-scrap-input">
        <div className="input-header">
          <div className="user-input-icon"></div>
        </div>
        <textarea placeholder="Memo"></textarea>
        <div className="input-footer">
          <div className="icons">
            <MdOutlineAddPhotoAlternate className="add-photo" />
            <GoPlus className="add-plus" />
          </div>
          <button>追加</button>
        </div>
      </div>
    </div>
  );
};

export default Scraps;
