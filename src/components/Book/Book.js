import React from 'react';

const Book = (props) => {
  const { bookTitle, bookAuthor, bookCategory } = props;
  return (
    <div className="book">
      <span>{bookCategory}</span>
      <h3>{bookTitle}</h3>
      <span>{bookAuthor}</span>
      <div className="buttons">
        <div className="btn">
          <button type="button">Comments</button>
        </div>
        <div className="btn">
          <button type="button">Remove</button>
        </div>
        <div className="btn">
          <button type="button">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
