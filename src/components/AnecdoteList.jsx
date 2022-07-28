import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteFor } from '../reducers/anecdoteReducer';

const Anecdote = ({ anecdote, onClick }) => {
  return (
    <div>
      {anecdote.content} has {anecdote.votes}
      <button onClick={onClick}> vote</button>
    </div>
  );
};





const Anecdotes = () => {

  const anecdotes = useSelector(({ filter, anecdotes }) => {


    return filter ? anecdotes.filter(anecdote => anecdote.content.toLowerCase().startsWith(filter.toLowerCase())) :
      anecdotes;


  });
  const anecdotesForSort = [...anecdotes];

  // dont mutate state directly
  const anecdotesSorted = anecdotesForSort.sort((a, b) => b.votes-a.votes);

  const dispatch = useDispatch();
  return (
    <div>
      {anecdotesSorted.map(anecdote => {
        return(<Anecdote key={anecdote.id} anecdote={anecdote} onClick={() => dispatch(voteFor(anecdote))}/>);
      })}

    </div>
  );
};

export default Anecdotes;
