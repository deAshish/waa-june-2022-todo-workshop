import React from "react";
import { useNavigate } from "react-router-dom";
const Todo = (props) => {
  const navigate = useNavigate();
  const onClicked = (id) => {
    navigate("/todo/" + id);
  };
  return <div onClick={onClicked.props.id}></div>;
};

export default Todo;
