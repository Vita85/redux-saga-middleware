// import axios from "axios";
// import { call, put, takeLatest } from "redux-saga/effects";
// import {
//   fetchJokesFulfilled,
//   fetchJokesRejected,
// } from "./jokeSlice";

// const url = "https://official-joke-api.appspot.com/random_joke";

// function* fetchJokesSaga() {
//   try {
//     const response = yield call(axios.get, url);
//     yield put(fetchJokesFulfilled(response.data));
//   } catch (error) {
//     yield put(fetchJokesRejected(error.message));
//   }
// }

// function* watchJokes() {
// yield takeLatest("jokes/fetchJokes", fetchJokesSaga)
// }

// export default watchJokes;