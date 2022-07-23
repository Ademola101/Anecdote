import { useSelector, useDispatch } from 'react-redux'
import {voteFor, createAnecdote} from './reducers/anecdoteReducer'
const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
   dispatch(voteFor(id))
  }


  const add = (e) => {
    e.preventDefault()

    const anecdote = e.target.anecdote.value;
    console.log(anecdote);
    e.target.anecdote.value =''
    dispatch(createAnecdote(anecdote))
  }
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={add}>
        <div>
          <input name='anecdote' type= 'text'/>
          
          </div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App