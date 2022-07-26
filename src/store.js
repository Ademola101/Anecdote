import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer from './reducers/anecdoteReducer';
import NotificationRducer from './reducers/NotificationReducer';
import filterReducer from './reducers/filterReducer';

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification : NotificationRducer,
    filter: filterReducer
  }
});

export default store;