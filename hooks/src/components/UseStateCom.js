import { useMemo, useState } from "react";

function UseStateCom() {
  const [count, setCount] = useState(0);
  const [nestedArray, setNestedArr] = useState([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
  const [userValue, setUserValue] = useState({
    name: "krushna",
    age: 27,
    address: {
      firstName: "jagamara",
      secondName: "khandigiri",
    },
  });

  console.log("🚀 ~ finalNestedArray ~ nestedArray:", nestedArray);

  const finalNestedArray = useMemo(() => {
    return [...nestedArray].flatMap((val) => val);
  }, [nestedArray]);
  console.log("🚀 ~ finalNestedArray ~ finalNestedArray:", finalNestedArray);

  const userDataChange = () => {
    setUserValue({
      ...userValue,
      address: { ...userValue.address, secondName: "Bhubaneswar" },
    });
  };

  const updateNestedArr = () => {
    setNestedArr([...nestedArray, [...nestedArray[2], 11, 12]]);
  };

  const updateCOunt = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>
        <h2>{count}</h2>
        <button onClick={() => updateCOunt()}>increase Count</button>
      </div>
      <div>
        <h2>user Details</h2>
        <h4>{userValue.name}</h4>
        <h4>{userValue.age}</h4>
        <h4>{userValue.address.firstName}</h4>
        <h4>{userValue.address.secondName}</h4>
        <button onClick={() => userDataChange()}> use address change</button>
      </div>
      <div>
        {finalNestedArray.map((val, i) => {
          console.log("🚀 ~ {nestedArray.flatMap ~ val:", val);

          return (
            <ul key={i}>
              <li>{val}</li>
            </ul>
          );
        })}
        <button onClick={() => updateNestedArr()}>Update nested Array</button>
      </div>
    </div>
  );
}

export default UseStateCom;
