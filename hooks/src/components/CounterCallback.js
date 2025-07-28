import React from "react";

function CounterCallback({ increase }) {
  console.log("🚀 ~ CounterCallback ~ increase:", increase);
  return (
    <>
      <button onClick={() => increase()}>increase</button>
    </>
  );
}

export default React.memo(CounterCallback);
