import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteFor } from '../reducers/anecdoteReducer';
import { createNotification } from '../reducers/NotificationReducer';

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

  const handleVote = (anecdote) => {
    dispatch(voteFor(anecdote));
    dispatch(createNotification(`${anecdote.content} receives a vote`, 5));
  };
  return (
    <div>
      {anecdotesSorted.map(anecdote => {
        return(<Anecdote key={anecdote.id} anecdote={anecdote} onClick={() => handleVote(anecdote)}/>);
      })}

    </div>
  );
};

export default Anecdotes;
