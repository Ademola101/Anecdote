import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';

import anecdoteServices from '../services/anecdote';

export default function NewAnecdote() {
  const dispatch = useDispatch();
  const add = async (e) => {
    e.preventDefault();

    const anecdote = e.target.anecdote.value;

    e.target.anecdote.value ='';

    const newAnecdote = await anecdoteServices.createNew(anecdote);
    dispatch(createAnecdote(newAnecdote));


  };


  return (


    <>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div>
          <input name='anecdote' type= 'text'/>

        </div>
        <button>create</button>
      </form>
    </>
  );
}
