import { Link } from "react-router-dom";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };
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
        className={`absolute -bottom-32 duration-1000 z-50 ${
          open === true ? "-left-44" : "-left-5"
        }`}
      >
        <ul className="md:text-lg flex flex-col space-y-3.5 py-3.5 md:hidden bg-green-600 text-white rounded-r-lg">
          <Link className="px-5" to="/home">
            Home
          </Link>
          <Link className="px-5" to="/listedBooks">
            Listed Books
          </Link>
          <Link className="px-5" to="/pagesToRead">
            Pages to Read
          </Link>
        </ul>
      </div>
      <h3 className=" font-bold text-2xl">Book Vibe</h3>
      <ul className="text-lg md:flex items-center gap-10 hidden">
        <Link
          className="border border-transparent px-5 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:font-semibold hover:border hover:border-green-600 "
          to="/home"
        >
          Home
        </Link>
        <Link
          className="border border-transparent px-5 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:font-semibold hover:border hover:border-green-600 "
          to="/listedBooks"
        >
          Listed Books
        </Link>
        <Link
          className="border border-transparent px-5 py-2 rounded-lg text-gray-700 hover:text-green-600 hover:font-semibold hover:border hover:border-green-600 "
          to="/pagesToRead"
        >
          Pages to Read
        </Link>
      </ul>
      <div className="font-semibold md:text-lg flex gap-5">
        <button className="px-5 py-2 bg-green-600 text-white rounded-lg">
          Sign In
        </button>
        <button className="px-5 py-2 bg-blue-400 text-white rounded-lg hidden md:inline">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
