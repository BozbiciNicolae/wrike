import { useCallback, useEffect, useReducer } from "react";
import { appReducer } from "./store/reducer";
import { CommentsContext } from "./store/context";

import Comment from "./interfaces/Comment";
import List from "./components/List/List";
import Form from "./components/Form/Form";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(appReducer, {
    comments: [],
  });

  const contextValues = {
    state,
    dispatch,
  };

  const getData = useCallback(async () => {
    const response = await fetch("data.json");
    const data = await response.json();

    dispatch({
      type: "set",
      payload: data.sort((a: Comment, b: Comment) => a.id > b.id),
    });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <CommentsContext.Provider value={contextValues}>
      <h1>Comments App</h1>
      <List />
      <Form />
    </CommentsContext.Provider>
  );
}

export default App;
