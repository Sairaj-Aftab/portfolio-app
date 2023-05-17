import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const [mMenu, setMenu] = useState(false);
  return (
    <div className="p-5 md:p-2 bg_card">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl md:text-2xl font-semibold italic">
            Sairaj Aftab
          </h1>
        </div>
        {/* Laptop and desktop menu */}
        <div className="menu hidden sm:flex flex-row gap-5 font-semibold text-lg">
          <a href="#">
            <span>Home</span>
          </a>
          <a href="#">
            <span>About</span>
          </a>
          <a href="#">
            <span>Project</span>
          </a>
          <a href="#">
            <span>Contact</span>
          </a>
        </div>
        {/* Mobile and Tab Menu */}
        <div className="sm:hidden relative">
          <div className="text-6xl" onClick={() => setMenu(!mMenu)}>
            <BiMenu />
          </div>
          {mMenu && (
            <div className="flex flex-col gap-3 border rounded-md absolute top-12 right-16 bg-[#011627] text-4xl md:text-2xl font-semibold">
              <a href="#">
                <span className="border-b block py-2 px-40">Home</span>
              </a>
              <a href="#">
                <span className="border-b block py-2 px-40">About</span>
              </a>
              <a href="#">
                <span className="border-b block py-2 px-40">Project</span>
              </a>
              <a href="#">
                <span className="block py-2 px-40">Contact</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
