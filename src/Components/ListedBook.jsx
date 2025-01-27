import React from "react";
import { Link } from "react-router-dom";

const ListedBook = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <div className="flex gap-10 mt-10 border border-gray-300 p-10 rounded-2xl">
      <figure className="bg-base-200 w-1/2 flex items-center justify-center py-14 rounded-xl">
        <img
          className="w-3xs rounded-lg shadow-xl"
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="w-1/2">
        <h1 className="text-4xl font-bold font-PlayFair">{bookName}</h1>
        <h3 className="text-xl font-medium text-gray-600 py-3 border-b-2 border-base-300">
          By: {author}
        </h3>
        <p className="text-xl font-medium text-gray-600 py-3 border-b-2 border-base-300">
          {category}
        </p>
        <div className="flex gap-5 py-5 border-b-2 border-base-300">
          <p className="font-bold ">Tag</p>
          {tags.map((tag, index) => (
            <button
              key={index}
              className="btn btn-xs rounded-full border-none bg-green-50 text-green-500 font-medium"
            >
              #{tag}
            </button>
          ))}
        </div>
        <div className="my-5">
          <div className="grid grid-cols-2">
            <span className="text-gray-500">Number of Pages: </span>
            <span className="font-semibold">{totalPages}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-gray-500">Publisher: </span>
            <span className="font-semibold">{publisher}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-gray-500">Year of Publishing: </span>
            <span className="font-semibold">{yearOfPublishing}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-gray-500">Rating: </span>
            <span className="font-semibold">{rating} </span>
          </div>
        </div>
        <Link to={`/books/${bookId}`}>
          <button className="btn bg-green-600 text-white text-lg font-semibold rounded-full">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ListedBook;
