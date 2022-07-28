import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { createNotification } from '../reducers/NotificationReducer';



export default function NewAnecdote() {
  const dispatch = useDispatch();
  const add = async (e) => {
    e.preventDefault();

    const content = e.target.anecdote.value;

    e.target.anecdote.value ='';
    dispatch(createAnecdote(content));
    dispatch(createNotification(`${content} anecdote added`, 5));


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
