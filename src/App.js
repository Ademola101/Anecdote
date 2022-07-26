
import NewAnecdote from './components/NewAnecdote'
import Anecdotes from './components/AnecdoteList'
import Notification from './components/Notification'
import SearchFilter from './components/SearchFilter'
const App = () => {
  


  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <SearchFilter/>
      <Anecdotes/>
      
      <NewAnecdote/>
       </div>
  )
}

export default App