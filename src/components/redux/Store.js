import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import postReducer from "./postSlice";

export const myStore = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});

export default myStore;
