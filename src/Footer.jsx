import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-white mt-10 pt-5 md:pt-10 px-5">
      <div className="flex items-center justify-between md:px-36">
        <h2 className="font-semibold text-lg text-center md:text-xl">
          Book Vibe
        </h2>
        <button className="px-5 py-2 rounded-lg bg-green-600">Subscribe</button>
      </div>
      <div className="mt-5 pb-5 grid md:grid-cols-3 text-center border-b border-gray-300">
        <div>
          <h3 className="md:text-lg font-semibold">Links</h3>
          <ul className="flex flex-col space-y-2 py-2 text-gray-300">
            <Link to="/home">Home</Link>
            <Link to="/listedBooks">Listed Books</Link>
            <Link to="/pagesToRead">Pages to Read</Link>
          </ul>
        </div>
        <div className="hidden md:inline">
          <h3 className="md:text-lg font-semibold">Links</h3>
          <ul className="flex flex-col space-y-2 py-2 text-gray-300">
            <Link to="/home">Home</Link>
            <Link to="/listedBooks">Listed Books</Link>
            <Link to="/pagesToRead">Pages to Read</Link>
          </ul>
        </div>
        <div className="hidden md:inline">
          <h3 className="md:text-lg font-semibold">Links</h3>
          <ul className="flex flex-col space-y-2 py-2 text-gray-300">
            <Link to="/home">Home</Link>
            <Link to="/listedBooks">Listed Books</Link>
            <Link to="/pagesToRead">Pages to Read</Link>
          </ul>
        </div>
      </div>
      <p className="text-center py-5">
        <span>All Rights Reserved to &copy; Book Lover</span>
      </p>
    </div>
  );
};

export default Footer;
