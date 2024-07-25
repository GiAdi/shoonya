import { createSlice } from '@reduxjs/toolkit'

export const retreatsSlice = createSlice({
  name: 'retreatsSlice',
  initialState: {},
  reducers: {
    populateList: (state, action) => {
      state.retreats = action.payload
    },
    addToList: (state, action) => {
      state.retreats[Object.keys(state.retreats).length+1] =  {title:'a'}
    }
  },
})

export const { populateList, addToList } = retreatsSlice.actions

export default retreatsSlice.reducer