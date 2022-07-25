import React from 'react'
import {useDispatch} from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'
import {setNotification} from '../reducers/NotificationReducer'
export default function NewAnecdote() {
  const dispatch = useDispatch()
  const add = (e) => {
    e.preventDefault()

    const anecdote = e.target.anecdote.value;
    
    e.target.anecdote.value =''
    dispatch(createAnecdote(anecdote))
    dispatch(setNotification(`${anecdote} anecdote created`))
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
