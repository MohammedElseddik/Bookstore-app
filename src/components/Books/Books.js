import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Book from '../Book/Book';
import AddBookForm from '../AddBookForm/AddBookForm';

const Books = () => {
  const addedBooks = useSelector((state) => state.book);
  console.log(addedBooks);

  return (
    <div className="Books">
      {addedBooks.map((book) => (
        <Book
          key={uuidv4}
          bookTile={book.title}
          bookAuthor={book.author}
          bookCategory={book.category}
        />
      ))}

      <AddBookForm />
    </div>
  );
};

export default Books;
