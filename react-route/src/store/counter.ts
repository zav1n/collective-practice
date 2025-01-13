import { createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    }
  }
})

// 导出 actions
export const { increment, decrement } = counterSlice.actions;

// 导出 reducer
export default counterSlice.reducer;