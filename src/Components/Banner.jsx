import React from "react";
import bannerImg from "../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex items-center gap-20 justify-between bg-gray-100 rounded-2xl p-20 my-10">
      <div>
        <h1 className=" font-bold font-PlayFair text-6xl/relaxed mb-10">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn px-5 py-3 bg-green-600 text-white rounded-lg font-bold text-xl">
          View The List
        </button>
      </div>
      <div>
        <img className="rounded-xl" src={bannerImg} alt="Books" />
      </div>
    </div>
  );
};

export default Banner;
