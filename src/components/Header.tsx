import React from 'react';
import { FaBars } from 'react-icons/fa6';

const Header = () => {
  return (
    <div className="h-1/4 flex bg-white border-b border-gray-300 border-solid z-inherit ">
      <div className="flex flex-8">
        <h1 className="flex items-center text-5xl  text-black font-FugasOne cursor-pointer">
          THE MEMO
        </h1>
      </div>
      <div className="flex flex-1 h-full items-center justify-end m-0 p-0">
        <input
          type="text"
          placeholder="Search"
          className="flex  w-1/5 h-8 b-1 border-solid border-gray-300 rounded-[10px] duration-2000 focus:border-blue-500"
        />
        <div className="flex bg-black rounded-full h-11 w-11 mx-4 my-1 cursor-pointer mt-1"></div>
        <FaBars className="flex text-2xl cursor-pointer mr-4" />
      </div>
    </div>
  );
};

export default Header;
