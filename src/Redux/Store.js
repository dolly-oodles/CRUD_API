// store.js
import { configureStore } from '@reduxjs/toolkit';
import { CRUD_APIReducer } from './CRUD_API.reducers'; // Adjust the import path as needed

const store = configureStore({
  reducer: {
    CRUD_API: CRUD_APIReducer,
  },
});

export default store;
