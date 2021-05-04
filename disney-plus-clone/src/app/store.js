import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import movieReducer from "../movie/MovieSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
