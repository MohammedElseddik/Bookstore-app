import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { addBookApi } from '../../redux/books/books';

import './addBookForm.css';

const AddBookForm = () => {
  const [book, setBook] = useState('');

  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const dataInputs = {
      item_id: uuidv4(),
      title: book,
      author,
      category: 'Default',
    };

    dispatch(addBookApi(dataInputs));

    setBook('');
    setAuthor('');
  };

  const titleInputHandler = (event) => {
    setBook(event.target.value.trim());
  };

  const authorInputHandler = (event) => {
    setAuthor(event.target.value.trim());
  };

  return (
    <div className="form">
      <div className="add-book__header">
        <h3> ADD NEW BOOK</h3>
      </div>
      <form className="add-book-form" onSubmit={formSubmitHandler}>
        <div className="add-book__controls">
          <input
            className="title-input"
            value={book}
            type="text"
            placeholder="Book title"
            onChange={titleInputHandler}
            required
          />
          <input
            className="author-input"
            value={author}
            type="text"
            placeholder="Author"
            onChange={authorInputHandler}
            required
          />
          <button className="submit-btn" type="submit">
            ADD BOOK
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
