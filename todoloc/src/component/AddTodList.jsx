import { useState } from "react";
import { useTodo } from "../context/ContextProvider";
function AddTodList() {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState("");

  const addTodoValue = (e) => {
    e.preventDefault();
    if (todo === "") return;
    addTodo({ todo, isCompleted: false });
    setTodo("");
  };

  return (
    <div>
      <input
        placeholder="Add todo here...."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button onClick={(e) => addTodoValue(e)}>Add</button>
    </div>
  );
}

export default AddTodList;
