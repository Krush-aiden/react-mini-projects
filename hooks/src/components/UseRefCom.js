import { useEffect, useRef, useState } from "react";

function UseRefCom() {
  const changeWidth = useRef();

  const changeWidthFun = () => {
    console.log("🚀 ~ changeWidth ~ changeWidth:", changeWidth);
    changeWidth.current.style.fontSize = "50px";
    changeWidth.current.style.color = "green";
  };
  const previousCount = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div>
      <div>
        <h2 ref={changeWidth}>use Ref</h2>
        <button onClick={() => changeWidthFun()}>change Width</button>
        <h3>current: {count}</h3>
        <h3>prevous: {previousCount.current}</h3>
        <button onClick={() => setCount((prev) => prev + 1)}>Increasae</button>
      </div>
    </div>
  );
}

export default UseRefCom;
