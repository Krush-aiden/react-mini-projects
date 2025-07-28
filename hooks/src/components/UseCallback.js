import { useCallback, useState } from "react";
import Counter from "./Counter";
import CounterCallback from "./CounterCallback";

function UseCallBack() {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <Counter value={count} />
      <CounterCallback increase={increase} />
    </>
  );
}

export default UseCallBack;
