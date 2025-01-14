import { createSlice } from '@reduxjs/toolkit'
type Action = {
  payload: number
}

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
    },
    dynamicsPlus: (state, action: Action) => {
      state.count += action.payload || 0
    }
  }
})

// 导出 actions
export const { increment, decrement, dynamicsPlus } = counterSlice.actions;

// 导出 reducer
export default counterSlice.reducer;