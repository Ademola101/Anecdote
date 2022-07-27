
import NewAnecdote from './components/NewAnecdote';
import Anecdotes from './components/AnecdoteList';
import Notification from './components/Notification';
import SearchFilter from './components/SearchFilter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAnecdotes } from './reducers/anecdoteReducer';
import anecdoteServices from './services/anecdote';
const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteServices.getAll().
      then((anecdote) => dispatch(setAnecdotes(anecdote)));

  }, [dispatch]);


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <SearchFilter/>
      <Anecdotes/>

      <NewAnecdote/>
    </div>
  );
};

export default App;