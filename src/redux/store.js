import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import jokeSlice from "./jokeSlice";
import watchJokes from "./jokeSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    jokes: jokeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(watchJokes);

export default store;
