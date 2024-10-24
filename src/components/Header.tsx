import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FaBars } from 'react-icons/fa6';

const Header = () => {
  return (
    <div className="h-62px flex bg-white border-b border-gray-300 border-solid z-inherit ">
      <div className="flex flex-grow-6">
        <h1 className="flex items-center text-5xl ml-4 text-black font-FugasOne cursor-pointer">
          THE MEMO
        </h1>
        <div className="flex w-10 h-10 items-center bg-black ml-1px rounded-full cursor-pointer"></div>
        <FontAwesomeIcon
          icon={faBarsStaggered}
          className="flex w-10 h-10 relative items-center cursor-pointer"
        />
      </div>
      <div className="flex flex-grow-1 h-full items-center justify-center m-0 p-0">
        <input
          type="text"
          placeholder="Search"
          className="flex items-center justify-center w-3/5 h-8 b-1 border-solid border-gray-300 rounded-[10px] duration-2000 focus:border-blue-500"
        />
        <div className="flex items-center justify-center bg-black rounded-full h-12 w-12 mx-4 cursor-pointer"></div>
        <FaBars className="flex items-center justify-center text-2xl cursor-pointer mr-0" />
      </div>
    </div>
  );
};

export default Header;
