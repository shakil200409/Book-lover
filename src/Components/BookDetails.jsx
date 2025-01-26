import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === parseInt(bookId));
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

  console.log(book);

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
          <p className="font-semibold">
            <span className="font-normal text-gray-500">Number of Pages: </span>
            {totalPages}{" "}
          </p>
          <p className="font-semibold">
            <span className="font-normal text-gray-500">Publisher: </span>
            {publisher}{" "}
          </p>
          <p className="font-semibold">
            <span className="font-normal text-gray-500">
              Year of Publishing::{" "}
            </span>
            {yearOfPublishing}{" "}
          </p>
          <p className="font-semibold">
            <span className="font-normal text-gray-500">Rating: </span>
            {rating}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
