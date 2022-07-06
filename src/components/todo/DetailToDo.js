import React from "react";

export default DetailTodo;

const DetailTodo = () => {
  const params = useParams();
  const [todoState, setTodoState] = useState({});

  const fetchTodo = async () => {
    const result = await axios.get("http://localhost:8000/todos/" + params.id);
    setTodoState(result);
  };

  useEffect(() => {
    fetchTodo();
  }, [params.id]);

  return (
    <div>
      <h3>{todoState.title}</h3>
      <h3>{todoState.description}</h3>
    </div>
  );
};

export default DetailTodo;
