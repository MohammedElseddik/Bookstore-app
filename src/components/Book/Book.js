import React from 'react';

const Book = (props) => {
  const { title, author, category } = props;
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
