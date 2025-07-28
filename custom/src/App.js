import useCustomApi from "./Custom";
// import { count, increase, decrease } from "./Custom";

function App() {
  const { fetchData, isLoading } = useCustomApi(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log("🚀 ~ App ~ fetchData:", fetchData);
  return (
    <>
      {isLoading && <div>loading...</div>}
      <ul>
        {fetchData?.map((val) => {
          return <li key={val.id}>{val.name}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
