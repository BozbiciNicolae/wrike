import Comment from "../../interfaces/Comment";
import Item from "../Item/Item";
import { useCommentsContext } from "../../store/context";

import "./list.css";

const List = () => {
  const { state } = useCommentsContext();

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
