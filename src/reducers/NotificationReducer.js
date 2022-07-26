
import { createSlice } from '@reduxjs/toolkit'

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },

  
  }
})
let timeoutId = null
export const createNotification = (message, delay) => {
  return async (dispatch) => {
    dispatch(setNotification(message))

    if ( timeoutId ) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      dispatch(setNotification(null))
      
    },  delay * 1000);
  }
}

export const {setNotification, removeNotification} = notificationSlice.actions

export default notificationSlice.reducer