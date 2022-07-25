import {configureStore} from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import NotificationRducer from './reducers/NotificationRducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification : NotificationRducer
  }
})

export default store