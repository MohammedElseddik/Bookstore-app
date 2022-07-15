import React from 'react';
import { useDispatch } from 'react-redux';
import { removBookAction } from '../../redux/books/books';

const Book = (props) => {
  const {
    title, author, category, id,
  } = props;

  const dispatch = useDispatch();

  const removeBookHandler = () => {
    dispatch(removBookAction(id));
  };

  return (
    <div className="book">
      <span>{category}</span>
      <h3>{title}</h3>
      <span>{author}</span>
      <div className="buttons">
        <div className="btn">
          <button type="button">Comments</button>
        </div>
        <div className="btn">
          <button type="button" onClick={removeBookHandler}>
            Remove
          </button>
        </div>
        <div className="btn">
          <button type="button">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
