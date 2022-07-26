import {createSlice} from '@reduxjs/toolkit'
const initialState = null
const filterSlice = createSlice({
  initialState,
  name: 'filter',
  reducers: {
    setFilter(state, action) {
      return action.payload
    }
  }
})

export const {setFilter} = filterSlice.actions
export default filterSlice.reducer