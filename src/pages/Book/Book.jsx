import React from 'react';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { Link } from 'react-router';

const Book = ({ bookData }) => {
  // console.log(bookData);
  const { bookName, author, image, category, rating, tags, publisher, bookId } =
    bookData;
  
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-300 shadow-sm pt-10">
        <figure className=" h-96 object-contain p-10">
          <img className="" src={image} alt="Books" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-2 ">
            {tags.map((tag, index) => (
              <button key={index} className="badge bg-green-400 py-3">{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{author}</div>
          </h2>
          <p>Published by: {publisher}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating}
              <FaRegStarHalfStroke />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
