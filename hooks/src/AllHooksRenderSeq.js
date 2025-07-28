import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";

function AllHooksRenderSeq() {
  console.log("1. Component rendering starts");

  // useState
  const [count, setCount] = useState(() => {
    console.log("2. useState initialization");
    return 0;
  });

  // useRef
  const renderCount = useRef(0);
  console.log("3. useRef value:", renderCount.current);

  // useMemo
  const expensiveValue = useMemo(() => {
    console.log("4. useMemo calculation");
    return count * 2;
  }, [count]);

  // useCallback
  const handleClick = useCallback(() => {
    console.log("5. useCallback function created");
    setCount((c) => c + 1);
  }, []);

  // useLayoutEffect
  useLayoutEffect(() => {
    console.log("6. useLayoutEffect runs");
    return () => {
      console.log("7. useLayoutEffect cleanup");
    };
  }, [count]);

  // useEffect
  useEffect(() => {
    console.log("8. useEffect runs");
    renderCount.current += 1;
    return () => {
      console.log("9. useEffect cleanup");
    };
  }, [count]);

  console.log("10. Render completed");

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <p>Render Count: {renderCount.current}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default AllHooksRenderSeq;
