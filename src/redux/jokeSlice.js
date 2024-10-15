import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";


const url = "https://official-joke-api.appspot.com/random_joke";


function* fetchJokesSaga() {
  try {
    const response = yield call(axios.get, url);
    yield put(fetchJokesFulfilled(response.data));
  } catch (error) {
    yield put(fetchJokesRejected(error.message));
  }
}

function* watchJokes() {
  yield takeLatest("jokes/fetchJokes", fetchJokesSaga)
  }

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
export {watchJokes};