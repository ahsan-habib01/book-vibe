import React from 'react';
import Book from '../Book/Book';

const Books = ({ booksData }) => {
  return (
    <div>
      <h1 className="text-4xl text-center my-10 font-bold">Books</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between items-center my-6'>
        {
          booksData.map(bookData => <Book key={bookData.bookId} bookData={bookData}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;