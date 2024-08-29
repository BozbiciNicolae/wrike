import Comment from "../../interfaces/Comment";
import { useCommentsContext } from "../../store/context";
import { useDateParser } from "../../hooks/useDateParser";

import "./item.css";

const Item = ({ data }: { data: Comment }) => {
  const { dispatch } = useCommentsContext();
  const [parseDate] = useDateParser();

  return (
    <div className="item">
      <h3>{data.name}</h3>
      <span>{parseDate(data.date)}</span>
      <p>{data.description}</p>

      <div className="actions">
        <button onClick={() => dispatch({ type: "select", payload: data })}>
          Edit
        </button>
        <button onClick={() => dispatch({ type: "remove", payload: data.id })}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
