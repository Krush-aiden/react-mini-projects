import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      isCompleted: false,
    },
  ],
  addTodo: (todos) => {},
  updateTodo: (todos, id) => {},
  deleteTodo: (id) => {},
  isCompletedTodo: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
