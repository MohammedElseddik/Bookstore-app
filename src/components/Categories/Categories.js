import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesStatusAction } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const categoriesStatus = useSelector((state) => state.categories);

  const checkStatusHandler = () => {
    dispatch(categoriesStatusAction());
  };

  return (
    <div className="Categories">
      <button type="button" onClick={checkStatusHandler}>
        Check status
      </button>
      <p>{categoriesStatus}</p>
    </div>
  );
};

export default Categories;
