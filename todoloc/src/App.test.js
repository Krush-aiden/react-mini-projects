// App.test.js
//
// This integration test file checks the behavior of the App component.
// It uses React Testing Library and Jest-DOM to verify:
// 1. The "Testing" component renders correctly.
// 2. Todos are loaded from localStorage if present.
// 3. Adding a new todo updates localStorage.

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

// Clear localStorage before each test run.
beforeEach(() => {
  localStorage.clear();
});

describe("App Component", () => {
  test("renders the Testing component", () => {
    render(<App />);
    // The Testing component renders a div with data-testid="testing-1"
    const testingElement = screen.getByTestId("testing-21");
    expect(testingElement).toBeInTheDocument();
    expect(testingElement).toHaveTextContent("hello");
  });

  test("loads todos from localStorage", async () => {
    // Create and add dummy todo data to localStorage
    const dummyTodos = [{ id: 1, todo: "Test Todo", isCompleted: false }];
    localStorage.setItem("todoVal", JSON.stringify(dummyTodos));

    render(<App />);
    // The AddTodoList component provides an input; TodoItems renders the todo value.
    // Here we check that the todo from localStorage shows up in an input field.
    const todoInput = await screen.findByDisplayValue("Test Todo");
    expect(todoInput).toBeInTheDocument();
  });

  test("adds a new todo and updates localStorage", async () => {
    render(<App />);

    // There are multiple text inputs in App.
    // The AddTodoList component is expected to be the first.
    const textInputs = screen.getAllByRole("textbox");
    // The first textbox from AddTodoList is used for new todo entry.
    const addTodoInput = textInputs[0];
    const addButton = screen.getByRole("button", { name: /add/i });

    // Simulate user adding a new todo.
    fireEvent.change(addTodoInput, { target: { value: "New Todo Item" } });
    fireEvent.click(addButton);

    // Wait for localStorage to update.
    await waitFor(() => {
      const storedTodos = localStorage.getItem("todoVal");
      expect(storedTodos).toContain("New Todo Item");
    });
  });
});
