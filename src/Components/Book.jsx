import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card border border-gray-300 rounded-3xl p-6">
        <figure className="bg-gray-100 p-8 rounded-2xl">
          <img className="h-[166px] rounded-md" src={image} alt={bookName} />
        </figure>
        <div className="my-5">
          <div className="flex gap-5 mb-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs rounded-full border-none bg-green-50 text-green-500 font-medium"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title font-PlayFair text-2xl font-bold">
            {bookName}
          </h2>
          <p className="font-medium py-4 text-gray-600">By: {author}</p>
          <div className="border-t-2 border-dashed border-gray-300 pt-5 text-gray-600 font-medium flex items-center justify-between">
            <p className="">{category}</p>
            <div className="flex items-center gap-2">
              <span>{rating}</span> <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
