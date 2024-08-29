import { useEffect } from "react";
import Comment from "../../interfaces/Comment";
import Item from "../Item/Item";
import { useCommentsContext } from "../../store/context";

import "./list.css";

const List = () => {
  const { state } = useCommentsContext();

  const simulateLoader = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 4000)
    });
  }

  useEffect(() => {
    simulateLoader()
  }, [simulateLoader]);

  return (
    <div className="list">
      <ul>
        {state.comments.map((item: Comment) => (
          <Item key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
};

export default List;
