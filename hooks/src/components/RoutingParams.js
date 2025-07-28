import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

// Simple data
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

// User Detail Page
const UserDetail = () => {
  const { id } = useParams(); // Get id from URL
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h3>User Details</h3>
      <p>Name: {user.name}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

// Home Page (User List)
const Home = () => {
  return (
    <div>
      <h3>Users List</h3>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} -<Link to={`/user/${user.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

// Main App
const RoutingParams = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
};

export default RoutingParams;
