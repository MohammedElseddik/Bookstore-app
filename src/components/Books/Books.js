import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from '../Book/Book';
import AddBookForm from '../AddBookForm/AddBookForm';

const Books = () => {
  const books = [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
    },

    {
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
    },

    {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
    },
  ];

  return (
    <div className="Books">
      {books.map((book) => (
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
