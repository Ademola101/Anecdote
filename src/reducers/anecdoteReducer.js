import { createSlice } from '@reduxjs/toolkit';
import anecdoteServices from '../services/anecdote';


// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ];

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   };
// };

// const initialState = anecdotesAtStart.map(asObject);



// export const voteFor = (id) => {

//   return (
//     {
//       type: 'VOTE',
//       data: {id}
//     }
//   )

// }

// export const createAnecdote = (anecdote) => {

//   return ({
//     type: 'NEW',
//     data: {
//       content: anecdote,
//       votes:0,
//       id:getId()
//     }

//   })
// }


const anecdoteSlice = createSlice({
  initialState: [],
  name: 'anecdote',
  reducers: {
    createAnecdote(state, action) {

      return  [...state, action.payload];
    },

    // voteFor(state,action) {
    //   const id = action.payload;
    //   const anecdote = state.find(a => a.id === id);
    //   const changedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };

    //   return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote);
    // },

    setAnecdotes(state, action) {
      return action.payload;
    },

    addVote(state, action) {

      const voteAnecdote = action.payload;
      const { id } = voteAnecdote;


      return state.map(anecdote => anecdote.id !== id ? anecdote : voteAnecdote);
    },

    appendAnecdotes(state, action) {
      return [...state, action.payload];
    }
  }
});

export const {  setAnecdotes, appendAnecdotes, addVote } = anecdoteSlice.actions;


export const initializeAnecdote = () => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {

  return async dispatch => {
    const anecdote = await anecdoteServices.createNew(content);
    dispatch(appendAnecdotes(anecdote));
  };
};

export const voteFor =  (anecdote) => {

  return async dispatch => {
    const NewAnecdote = await anecdoteServices.update(anecdote);
    dispatch(addVote(NewAnecdote));
  };

};

export default anecdoteSlice.reducer;

