import { useEffect, useState } from "react";

function UseEffectCom() {
  const [count, setCount] = useState(0);
  const [data, setDataToLocal] = useState("");
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    let updateData = localStorage.getItem("data");
    console.log("🚀 ~ useEffect ~ updateData:", updateData);
    if (updateData) {
      setDataToLocal(updateData);
    }
    return () => {
      console.log("remove");
      localStorage.removeItem("data");
    };
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    localStorage.setItem("data", data);

    return () => {
      console.log("clear timeout");
      return clearTimeout(timeOut);
    };
  }, [count, data]);

  const dataSave = () => {
    console.log("🚀 ~ dataSave ~ inputData:", inputData);
    setDataToLocal(inputData);
  };

  return (
    <div>
      <div>
        <h2>{count}</h2>
        <input onChange={(e) => setInputData(e.target.value)}></input>
        <button onClick={() => dataSave()}>add Data</button>
        <h3>{data}</h3>
      </div>
    </div>
  );
}

export default UseEffectCom;
