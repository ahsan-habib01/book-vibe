import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const numId = parseInt(id);
  const booksData = useLoaderData();
  const singleBook = booksData.find(book => book.bookId === numId);
  console.log(singleBook);
  const { bookName, author, image, category, rating, tags, publisher, review } =
    singleBook;

  const handleMarkAsRead = (id) => {
    
MySwal.fire({
  title: 'Good job!',
  text: 'You clicked the button!',
  icon: 'success',
});

    addToStoredDB(id)
  }
  
  
  return (
    <div className="w-11/12 mx-auto my-5">
      <div className="flex justify-evenly items-center">
        <div className="w-1/2">
          <img className="h-120 w-96" src={image} alt="" />
        </div>
        <div className="w-1/2 space-y-2">
          <h2 className="text-2xl font-semibold">{bookName}</h2>
          <p>
            By: <span className="font-semibold">{author}</span>
          </p>
          <p className="font-semibold">
            Review: <span className="font-normal">{review}</span>
          </p>
          <div>
            <button onClick={()=> handleMarkAsRead(id)} className="btn btn-outline mr-2">Mark as Read</button>
            <button className="btn btn-active btn-info mr-2">
              Add to WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
