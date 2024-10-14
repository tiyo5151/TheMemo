import React from 'react';
import '../styles/Sidebar.css';
import { SidebarProps } from '../types/Sidebar';
import { v4 as uuid } from 'uuid';
import { FaTrash } from 'react-icons/fa';

const Sidebar: React.FC<SidebarProps> = ({
  scrap,
  setScrap,
  onAddScrap,
  onDeleteScrap,
}) => {
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScrap([
      ...(scrap || []),
      {
        ...(scrap
          ? scrap[0]
          : { id: uuid(), content: 'aaaaaaa', modDate: Date.now() }),
        title: e.target.value,
      },
    ]);
  };
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        Memo
        <button onClick={onAddScrap}>New scrap</button>
      </div>
      <div className="app-sidebar-items">
        {scrap?.map((item) => (
          <div key={item.id} className="app-sidebar-item">
            <div className="app-sidebar-items-row">
              <input
                className="app-sidebar-item-title"
                value={item.title}
                onChange={handleTitle}
              />
              <FaTrash
                className="app-sidebar-item-delete"
                onClick={() => onDeleteScrap(item.id)}
              />
            </div>
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
