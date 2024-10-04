import React from 'react';
import '../styles/Sidebar.css';
import { SidebarProps } from '../types/Sidebar';

const Sidebar: React.FC<SidebarProps> = ({ scrap }) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        Memo
        <button>New scrap</button>
      </div>
      <div className="app-sidebar-items">
        {scrap?.map((item) => (
          <div key={item.id} className="app-sidebar-item">
            <div className="app-sidebar-item-title">{item.title}</div>
            <div className="app-sidebar-item-content">{item.content}</div>
            <small>
              {new Date(item.modDate).toLocaleDateString('ja-JP', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
