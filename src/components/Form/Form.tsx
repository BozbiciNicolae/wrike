import { useState, useEffect } from "react";
import { useCommentsContext } from "../../store/context";

import "./form.css";

type FormFields = "name" | "description";

const Form = () => {
  const {
    state: { selectedComment },
    dispatch,
  } = useCommentsContext();
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (selectedComment) {
      setFormValues({
        name: selectedComment.name,
        description: selectedComment.description,
      });
    }
  }, [selectedComment]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: FormFields,
  ) => {
    setFormValues({
      ...formValues,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!formValues.name) {
      return false;
    }
    // send the data to global store
    if (selectedComment) {
      dispatch({
        type: "update",
        payload: {
          ...selectedComment,
          ...formValues,
        },
      });
    } else {
      dispatch({
        type: "add",
        payload: {
          id: new Date().getTime(),
          date: new Date().toISOString(),
          ...formValues,
        },
      });
    }
    // clear local form state
    setFormValues({ name: "", description: "" });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="name"
        value={formValues.name}
        onChange={(e) => handleChange(e, "name")}
      />
      <textarea
        placeholder="comment"
        value={formValues.description}
        onChange={(e) => handleChange(e, "description")}
      ></textarea>
      <button type="submit">Post message</button>
    </form>
  );
};

export default Form;
