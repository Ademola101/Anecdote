import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';



export default function NewAnecdote() {
  const dispatch = useDispatch();
  const add = async (e) => {
    e.preventDefault();

    const content = e.target.anecdote.value;

    e.target.anecdote.value ='';
    dispatch(createAnecdote(content));


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
