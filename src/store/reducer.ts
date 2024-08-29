import Comment from "../interfaces/Comment";

export type AppState = {
  comments: Comment[];
  selectedComment?: Comment;
};

type Add = { type: "add"; payload: Comment };
type Remove = { type: "remove"; payload: number };
type Update = { type: "update"; payload: Comment };
type Set = { type: "set"; payload: Comment[] };
type Select = { type: "select"; payload: Comment };

export type AppActions = Add | Remove | Update | Set | Select;

function appReducer(state: AppState, action: AppActions) {
  switch (action.type) {
    case "select":
      return {
        ...state,
        selectedComment: action.payload,
      };
    case "set":
      return {
        ...state,
        comments: action.payload,
      };
    case "add":
      return {
        ...state,
        comments: [...state.comments, { ...action.payload }],
      };
    case "update":
      return {
        comments: state.comments.map((item: Comment) =>
          item.id !== action.payload.id
            ? item
            : {
                ...action.payload,
              },
        ),
      };
    case "remove":
      return {
        comments: [
          ...state.comments.filter(
            (item: Comment) => item.id !== action.payload,
          ),
        ],
      };
    default:
      return state;
  }
}

export { appReducer };
