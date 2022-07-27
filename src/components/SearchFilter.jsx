import React from 'react';
import { useDispatch } from 'react-redux';

import { setFilter } from '../reducers/filterReducer';
export default function SearchFilter() {


  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>

      <h2>

      Search anecdotes
      </h2>

      <input name='filter' type="text" onChange={onChange }/>

    </>
  );
}
