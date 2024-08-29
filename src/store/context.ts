import React, { Dispatch } from "react";
import { AppState, AppActions } from "./reducer";

interface IContextProps {
  state: AppState;
  dispatch: Dispatch<AppActions>;
}
const CommentsContext = React.createContext({} as IContextProps);

const useCommentsContext = () => {
  return React.useContext(CommentsContext);
};

export { CommentsContext, useCommentsContext };
