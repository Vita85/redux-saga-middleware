import "./App.css";
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import GetJoke from "./components/GetJokeComponent";

function App() {
  
  const [jokeId, setJokeId] = useState(1);

  return (
    <Provider store={store}>
      <div className="jokes-container">
        <h2 className="jokes-title">JOKES</h2>

        <button
          onClick={() => setJokeId((prevId) => prevId + 1)}
          className="next-btn"
        >
          Next joke
        </button>
        <GetJoke jokeId={jokeId} />
      </div>
    </Provider>
  );
}

export default App;
