import React, { useState } from "react";
import counterContext from "./Context";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={count}>
      <Counter />
      <button onClick={() => setCount((prev) => prev + 1)}>increase</button>
    </counterContext.Provider>
  );
}

export default App;
