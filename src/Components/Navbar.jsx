import { NavLink } from "react-router-dom";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const navLinks = (
    <>
      <NavLink
        className="px-5 py-2 border border-transparent hover:border-green-600 rounded-lg hover:text-green-600"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="px-5 py-2 border border-transparent hover:border-green-600 rounded-lg hover:text-green-600"
        to="/listedBooks"
      >
        Listed Books
      </NavLink>
      <NavLink
        className="px-5 py-2 border border-transparent hover:border-green-600 rounded-lg hover:text-green-600"
        to="/pagesToRead"
      >
        Pages to Read
      </NavLink>
    </>
  );
  return (
    <nav className="relative font-WorkSans flex justify-between items-center pt-5">
      <IoMenuSharp
        onClick={handleMenu}
        className={`text-2xl md:hidden transition delay-150 duration-300  ${
          open === true ? "inline" : "hidden"
        } `}
      />
      <IoCloseSharp
        onClick={handleMenu}
        className={`text-2xl md:hidden transition delay-150 duration-300  text-green-600  ${
          open === true ? "hidden" : "inline"
        } `}
      />
      <div
        className={`absolute -bottom-40 duration-1000 z-50 ${
          open === true ? "-left-44" : "-left-5"
        }`}
      >
        <ul className="md:text-lg flex flex-col py-4 md:hidden bg-green-600 text-white rounded-r-lg">
          {navLinks}
        </ul>
      </div>
      <h3 className=" font-bold text-2xl">Book Vibe</h3>
      <ul className="text-lg md:flex items-center gap-10 hidden ">
        {navLinks}
      </ul>
      <div className="font-semibold flex gap-5">
        <button className="btn px-5 py-2 bg-green-600 text-white md:text-lg rounded-lg">
          Sign In
        </button>
        <button className="btn px-5 py-2 bg-blue-400 text-white md:text-lg rounded-lg hidden md:inline-flex">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
