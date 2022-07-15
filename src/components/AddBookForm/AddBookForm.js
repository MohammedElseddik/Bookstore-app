import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { addBookApi } from '../../redux/books/books';

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
