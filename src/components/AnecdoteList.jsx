import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {voteFor} from '../reducers/anecdoteReducer'

const Anecdote = ({anecdote, onClick}) => {
  return (
    <div>
      {anecdote.content} has {anecdote.votes}
      <button onClick={onClick}> vote</button>
    </div>
  );
}





const Anecdotes = () => {

  const anecdotes = useSelector(state => state.anecdotes)
  const anecdotesForSort = [...anecdotes]
  console.log(anecdotesForSort)
  // dont mutate state directly
  const anecdotesSorted = anecdotesForSort.sort((a, b) => b.votes-a.votes)
  console.log(anecdotesSorted);
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
