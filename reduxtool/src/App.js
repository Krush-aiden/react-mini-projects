import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter";
import { useEffect } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {});
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
