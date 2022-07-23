import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {voteFor} from '../reducers/anecdoteReducer'

const Anecdote = ({anecdote, onClick}) => {
  return (
    <div>
      {anecdote.content} has {anecdote.votes}<br />
      <button onClick={onClick}> vote</button>
    </div>
  );
}





const Anecdotes = () => {

  const anecdotes = useSelector(state => state)
  const anecdotesSorted = anecdotes.sort((a, b) => b.votes-a.votes)
  
  const dispatch = useDispatch()
  return (
    <div>
      {anecdotesSorted.map(anecdote => {
        return(<Anecdote key={anecdote.id} anecdote={anecdote} onClick={() => dispatch(voteFor(anecdote.id))}/>)
      })}
      
    </div>
  );
}

export default Anecdotes;
