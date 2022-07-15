import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from '../Book/Book';
import AddBookForm from '../AddBookForm/AddBookForm';

const Books = () => {
  const addedBooks = useSelector((state) => state.book);

  console.log('addedbook', addedBooks);

  return (
    <div className="Books">
      {addedBooks.map((book) => {
        console.log(book);
        return <Book key={uuidv4} {...book} />;
      })}

      <AddBookForm />
    </div>
  );
};

export default Books;
