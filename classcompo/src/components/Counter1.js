import { useEffect } from "react";

function Counter1({ number }) {
  useEffect(() => {
    console.log("number updated & Component Mount");

    return () => {
      console.log("compo unMount in counter1");
    };
  }, [number]);

  return (
    <div>
      <div>{number}</div>
    </div>
  );
}

export default Counter1;
