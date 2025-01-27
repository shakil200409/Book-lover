import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToReadList, addToWishList } from "../Utilities/addToDB";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-10">
      <figure className="bg-base-200 w-1/2 flex items-center justify-center py-20 rounded-2xl">
        <img
          className="w-3xs rounded-xl shadow-xl"
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
        <p className="py-6">
          <b>Review: </b> <span className="text-gray-500">{review}</span>
        </p>
        <div className="flex gap-5 pb-5 border-b-2 border-base-300">
          <p className="font-bold">Tag</p>
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
        <div className="flex gap-5">
          <button
            onClick={() => addToReadList(id)}
            className="btn border border-gray-300 hover:border-transparent hover:bg-green-600 hover:text-white text-lg rounded-lg"
          >
            Read
          </button>
          <button
            onClick={() => addToWishList(id)}
            className="btn bg-blue-400 text-white text-lg rounded-lg"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
