import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addBookAction } from '../../redux/books/books';

const AddBookForm = () => {
  const [book, setBook] = useState('');

  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const titleInputHandler = (event) => {
    setBook(event.target.value.trim());
  };

  const authorInputHandler = (event) => {
    setAuthor(event.target.value.trim());
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const dataInputs = {
      title: book,
      author,
      category: 'Default',
    };

    console.log('titie,author inputs', dataInputs);

    dispatch(addBookAction(dataInputs));

    setBook('');
    setAuthor('');
  };

  return (
    <form className="add-book" onSubmit={formSubmitHandler}>
      <div className="add-book__header">
        <h3> ADD NEW BOOK</h3>
      </div>
      <div className="add-book__controls">
        <input
          value={book}
          type="text"
          placeholder="Book title"
          onChange={titleInputHandler}
        />
        <input
          value={author}
          type="text"
          placeholder="Author"
          onChange={authorInputHandler}
        />
      </div>
      <div className="add-book__actions">
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default AddBookForm;
