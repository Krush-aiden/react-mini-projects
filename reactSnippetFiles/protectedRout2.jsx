const userDetails = {
  authUser: false,
};

const AuthProtectedRout = ({ children }) => {
  if (userDetails.authUser === false) {
    return <Navigate to="/Login" replace />;
  }

  return children;
};

const UserProtectedRout = ({ children }) => {
  if (userDetails.authUser) {
    return <Navigate to="/Home" replace />;
  }
  return children;
};

<Route>
  <Route
    path="/Home"
    element={
      <AuthProtectedRout>
        <Home />
      </AuthProtectedRout>
    }
  />
  <Route
    path="/Login"
    element={
      <UserProtectedRout>
        <Login />
      </UserProtectedRout>
    }
  />
</Route>;
