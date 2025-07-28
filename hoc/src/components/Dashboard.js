import React from "react";

function Dashboard({ name }) {
  // console.log("🚀 ~ Dashboard ~ name:", name);
  return (
    <div>
      <h1>Welcome to Dashboard : {name}</h1>
      <p>Only Authenticated see this</p>
    </div>
  );
}

export default Dashboard;
