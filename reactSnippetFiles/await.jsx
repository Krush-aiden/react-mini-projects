import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      // Fetch data from API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      // Convert response to JSON
      const result = await response.json();
      setData(result.title); // Setting just the title for simplicity
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    console.log("Component Mounted");
    fetchData();

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div>
      <h2>Async/Await Demo</h2>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default App;
