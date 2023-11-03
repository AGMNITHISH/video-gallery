import React from "react";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="h-16 bg-slate-300 px-6 flex items-center justify-between">
      <div>
        <Link to="/">
          <div className="flex items-center justify-center text-xl font-medium text-neutral-700 font-sans">
            {" "}
            <RiMovie2Fill className=" pr-2 text-neutral-700 text-3xl" /> Video
            Gallery
          </div>
        </Link>
      </div>
      <div>
        <Link to="/fav">
          {" "}
          <MdFavorite className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
