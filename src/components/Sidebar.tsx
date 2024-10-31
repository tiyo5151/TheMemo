import React, { useEffect, useRef } from 'react';
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const handleShowDialog = () => dialogRef.current?.showModal();
  const handleCloseDialog = () => dialogRef.current?.close();
  console.log(dialogRef);
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

  useEffect(() => {
    const limit = document.querySelectorAll('.app-sidebar-item-content');
    const limitLength = 20;

    // console.log('Elements found:', limit.length);

    limit.forEach((element, index) => {
      const str = element.textContent;
      // console.log(`Element ${index}:`, str);
      if (str && str.length > limitLength) {
        element.textContent = str.substring(0, limitLength) + '…';
        // console.log(`Element ${index} truncated:`, element.textContent);
      }
    });
  }, [scrap]);

  return (
    <div className="w-1/4 h-screen flex flex-col justify-center items-center border-r-2 border-gray-400 m-0 bg-indigo-300 overflow-y-scroll scroll-smooth">
      <div className="w-full h-6 flex justify-center items-center text-5xl font-bold m-0 p-0 border-b-2 border-gray-400">
        <button
          onClick={() => {
            onAddScrap();
            handleShowDialog();
          }}
          className="flex items-center justify-center border-none bg-transparent ml-6 cursor-pointer font-bold text-base font-arial text-[#0a1afa] transition-all duration-300 hover:text-blue-950 hover:size-2"
        >
          New scrap
        </button>
      </div>
      <dialog ref={dialogRef} className="flex items-center justify-center">
        <h1>title</h1>
        <input
          type="text"
          onChange={() => {
            handleTitle(e.target.value);
            handleCloseDialog();
          }}
        />
        <button onClick={handleCloseDialog}>Cancel</button>
        <button onClick={() => handleCloseDialog()}>Save</button>
      </dialog>
      <div className="app-sidebar-items">
        {scrap?.map((item) => (
          <div key={item.id} className="app-sidebar-item">
            <div className="app-sidebar-items-row">
              <div className="app-sidebar-title">{item.title}</div>
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
