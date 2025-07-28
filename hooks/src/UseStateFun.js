import { useState } from "react";

function UseStateFun() {
  const [count, setCount] = useState("");
  const [user, setuser] = useState({
    name: "krushna",
    age: 27,
    address: {
      firstName: "Jagamara",
      secondName: "Khandigiri",
    },
  });

  return (
    <div>
      <div>
        <h2>count: {count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>
          increase count
        </button>
      </div>
      <div>
        <h2>Name :{user.name}</h2>
        <h2>age :{user.name}</h2>
        <h2>address 1 :{user.address.secondName}</h2>
        <h2>address 2 :{user.address.firstName}</h2>
      </div>
    </div>
  );
}

export default UseStateFun;
