import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJokes } from "../redux/jokeSlice";

const GetJoke = ({ jokeId }) => {
  const dispatch = useDispatch();
  const { data, loading, error, status } = useSelector((state) => state.jokes);

  useEffect(() => {
    dispatch(fetchJokes());
  }, [jokeId, dispatch]);

  if (loading) {
    return <div className="download"> Status: {status}</div>;
  }

  if (error) {
    return ( <div className="error"> Status: {status}: {error.message} </div>
    );
  }

  if (!data) {
    return <div className="error">"Joke not found"</div>;
  }

  return (
    <div className="joke">
      <p>
        Setup: <span>{data.setup}</span>
      </p>
      <p>
        Punchline: <span>{data.punchline}</span>
      </p>
      <span>Id: {data.id}</span>
    </div>
  );
};

export default GetJoke;
