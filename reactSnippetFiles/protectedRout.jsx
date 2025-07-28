import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Simulated authentication object.
// Change isAuthenticated to true to simulate a logged-in user.
const fakeAuth = {
  isAuthenticated: false,
};

// ProtectedRoute component: renders the children if authenticated,
// otherwise redirects to the login page.
const ProtectedRoute = ({ children }) => {
  if (!fakeAuth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// Main App component setting up the routes.
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <ProtectedRoute>
          <Route path="/dashboard" element={<Dashboard />} />
        </ProtectedRoute>
      </Routes>
    </Router>
  );
};

export default App;
