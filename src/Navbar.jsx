import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="font-WorkSans flex justify-between items-center pt-5">
      <IoMenuSharp className="text-2xl md:hidden" />
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
