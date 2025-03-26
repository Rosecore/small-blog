import React from "react";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header className="bg-[#02101D] p-4 sticky top-0 z-10">
      <nav className="flex justify-between items-center">
        <div className="text-white text-xl font-bold">Small Blog</div>
        <div className="w-1/3">
          <Search />
        </div>
      </nav>
    </header>
  );
};

export default Header;
