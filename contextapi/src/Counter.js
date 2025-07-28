import { useContext } from "react";
import counterContext from "./Context";

function Counter() {
  const value = useContext(counterContext);
  console.log("🚀 ~ Counter ~ value:", value);
  return <></>;
}

export default Counter;
