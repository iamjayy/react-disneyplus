import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../movie/MovieSlice";
import userSlice from "../user/userSlice";
import userReducer from "../user/userSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userSlice,
  },
});
