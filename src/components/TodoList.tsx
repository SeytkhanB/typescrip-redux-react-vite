import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Loading from "./Loading";
import { useEffect } from "react";

const TodoList: React.FC = () => {
  const todoState = useTypedSelector((state) => state.todoReducer);
  const { fetchTodos, setTodoPage } = useActions();

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(todoState.page, todoState.limit);
  }, [todoState.page]);

  if (todoState.loading) {
    return <Loading />;
  }

  if (todoState.error) {
    return (
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "red",
        }}
      >
        {todoState.error}
      </h2>
    );
  }

  return (
    <div>
      {todoState.todos.map((todo) => (
        <h4 key={todo.id} style={{ color: "teal" }}>
          {todo.id} - {todo.title}
        </h4>
      ))}

      <div style={{ display: "flex" }}>
        {pages.map((page) => (
          <div
            onClick={() => setTodoPage(page)}
            key={page}
            style={{
              border:
                page === todoState.page ? "2px solid aqua" : "1px solid gray",
              padding: "10px 18px",
              marginLeft: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
