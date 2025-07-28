import { useState } from "react";
import { useTodo } from "../context/ContextProvider";

function TodoList({ todos }) {
  console.log("🚀 ~ TodoList ~ todos:", todos);
  const [todosVal, setTodo] = useState(todos.todo);
  const [isEdit, setIsEdit] = useState(true);
  const { updateTodo, deleteTodo, isCompletedTodo } = useTodo();

  const onUpdate = (e) => {
    e.preventDefault();

    console.log("🚀 ~ onUpdate ~ todos:", todos, todosVal);
    updateTodo({ ...todos, todo: todosVal }, todos.id);
    setIsEdit((prev) => !prev);
  };

  const editTodo = (e) => {
    e.preventDefault();
    setIsEdit((prev) => !prev);
  };

  return (
    <div>
      <input
        onChange={() => isCompletedTodo(todos.id)}
        checked={todos.isCompleted}
        type="checkbox"
      ></input>
      <input
        disabled={isEdit}
        onChange={(e) => setTodo(e.target.value)}
        value={todosVal}
      ></input>
      {isEdit ? (
        <button disabled={todos.isCompleted} onClick={(e) => editTodo(e)}>
          edit
        </button>
      ) : (
        <button disabled={todos.isCompleted} onClick={(e) => onUpdate(e)}>
          update
        </button>
      )}
      <button onClick={() => deleteTodo(todos.id)}>Delete</button>
    </div>
  );
}

export default TodoList;
