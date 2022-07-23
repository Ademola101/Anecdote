import React from 'react'
import {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'


export default function NewAnecdote() {
  const dispatch = useDispatch()
  const add = (e) => {
    e.preventDefault()

    const anecdote = e.target.anecdote.value;
    
    e.target.anecdote.value =''
    dispatch(createAnecdote(anecdote))
  }
  

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
  )
}
