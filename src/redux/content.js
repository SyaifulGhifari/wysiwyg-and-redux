import { createSlice } from '@reduxjs/toolkit';

export const contentSlice = createSlice({
  name: 'content',
  initialState: { content: '' },
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },
    clearContent: (state) => {
      state.content = '';
    },
  },
});

export const { setContent, clearContent } = contentSlice.actions;

export default contentSlice.reducer;
