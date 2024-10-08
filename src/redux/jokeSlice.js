import { createSlice } from "@reduxjs/toolkit";


const jokeSlice = createSlice({
  name: "jokes",
  initialState: {
    data: null,
    loading: false,
    error: null,
    status: "",
  },
  reducers: {
    fetchJokes: (state) => {
      state.loading = true;
      state.error = null;
      state.status = "pending";
    },
    fetchJokesFulfilled: (state, action) => {
      state.loading = false;
      state.error = null;
      state.status = "succeeded";
      state.data = action.payload;
    },
    fetchJokesRejected: (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? "Unknown Error";
      state.status = "failed";
    }
  }
})

export const {fetchJokes, fetchJokesFulfilled, fetchJokesRejected} = jokeSlice.actions;
export default jokeSlice.reducer;