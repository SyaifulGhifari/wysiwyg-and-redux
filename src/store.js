import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './redux/content';

export default configureStore({
  reducer: {
    content: contentReducer,
  },
});
