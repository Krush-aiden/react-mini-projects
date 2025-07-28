import React from "react";
import Navbar from "./components/Navbar";
import RoutingParams from "./components/RoutingParams";
import { BrowserRouter } from "react-router-dom";

// App Component (Parent)
function AppComponent() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <RoutingParams />
      </BrowserRouter>
    </div>
  );
}

export default AppComponent;
