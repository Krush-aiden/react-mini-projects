/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Profile from "./components/profile";
import withAuth from "./hoc/withAuth";
import React, { useState } from "react";

function App({ name }) {
  console.log("🚀 ~ App ~ name:", name);
  const AuthDashboard = withAuth(Dashboard);
  const AuthProfile = withAuth(Profile);

  const [state, setState] = React.useState({
    name: "John",
    age: 30,
  });

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/Dashboard"
            element={<AuthDashboard name={"krushna"} />}
          />
          <Route path="/Profile" element={<AuthProfile />} />
          <Route
            path="/"
            element={
              <div>
                <h1>Higher Order Component</h1>
                <h2>Login Page unAuthenticated users</h2>
                <div>
                  <p>
                    My name is {state.name} and I am {state.age} years old
                  </p>
                  <button
                    onClick={() => setState({ ...state, age: state.age + 1 })}
                  >
                    Increment age
                  </button>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
