import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../Book/Book';
import AddBookForm from '../AddBookForm/AddBookForm';
import { fetchBookApiAction } from '../../redux/books/books';

import './books.css';

const Books = () => {
  const addedBooks = useSelector((state) => state.book);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookApiAction());
  }, []);

  return (
    <div className="books">
      {addedBooks.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}

      <AddBookForm />
    </div>
  );
};

export default Books;
