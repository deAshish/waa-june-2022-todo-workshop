import React, { useEffect, useState, axios } from "react";
import Todo from "./Todo";
const Todos = () => {
  const [todosState, setTodosState] = useState({});
  const fetchTodos = async () => {
    const result = await axios.get("https://localhost/8000/todos");
    setTodosState(result.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {todosState.map((td) => {
        return <Todo title={td.title} key={td.key} />;
      })}
    </div>
  );
};

export default Todos;
