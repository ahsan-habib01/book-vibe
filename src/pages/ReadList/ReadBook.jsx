import React from 'react';

const ReadBook = ({ readBook }) => {
  console.log(readBook);
  const {bookName} = readBook
  return (
    <div>
      <h1 className='font-semibold'>{bookName}</h1>
    </div>
  );
};

export default ReadBook;