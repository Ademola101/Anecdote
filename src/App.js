
import NewAnecdote from './components/NewAnecdote';
import Anecdotes from './components/AnecdoteList';
import Notification from './components/Notification';
import SearchFilter from './components/SearchFilter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeAnecdote } from './reducers/anecdoteReducer';
const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAnecdote());

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