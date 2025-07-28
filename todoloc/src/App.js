import { useEffect, useState } from "react";
import AddTodList from "./component/AddTodList";
import { TodoProvider } from "./context/ContextProvider";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (todo, id) => {
    setTodo((prev) =>
      prev.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo))
    );
  };
  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((eachTodo) => eachTodo.id !== id));
  };
  const isCompletedTodo = (id) => {
    setTodo((prev) =>
      prev.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, isCompleted: !eachTodo.isCompleted }
          : eachTodo
      )
    );
  };
  useEffect(() => {
    const todoLoc = JSON.parse(localStorage.getItem("todos"));
    if (todoLoc && todoLoc.length > 0) {
      setTodo(todoLoc);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ addTodo, updateTodo, deleteTodo, isCompletedTodo }}>
      <h1>Todos</h1>
      <AddTodList />
      {todos.map((todo) => {
        // console.log("🚀 ~ {todos.map ~ todo:", todo);
        return (
          <div key={todo.id}>
            <TodoList todos={todo} />
          </div>
        );
      })}
    </TodoProvider>
  );
}

export default App;
