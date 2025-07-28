import React, { Suspense, useState } from "react";
// import Home from "./Home";

const LazyComp = React.lazy(() => import("./Home"));

console.log("🚀 ~ LazyComp:", LazyComp);

function App() {
  const [lazyTrue, setLazyTrue] = useState(false);

  const trigger = () => {
    setLazyTrue(true);
  };

  return (
    <div>
      <div>
        <h1>home</h1>
        <button onClick={() => trigger()}>show lazy comp</button>
      </div>
      {lazyTrue && (
        <Suspense fallback={<div>Loading....</div>}>
          <LazyComp />
        </Suspense>
      )}
    </div>
  );
}

export default App;
