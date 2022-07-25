import {configureStore} from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import NotificationRducer from './reducers/NotificationReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification : NotificationRducer
  }
})

export default store