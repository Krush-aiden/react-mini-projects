import CustomHooksForApi from "./CustomHooks";

function UseCustomHooks() {
  const { data, loading, error } = CustomHooksForApi({
    url: "https://jsonplaceholder.typicode.com/users",
  });
  console.log("🚀 ~ UseCustomHooks ~ error:", error);
  console.log("🚀 ~ UseCustomHooks ~ loading:", loading);
  console.log("🚀 ~ UseCustomHooks ~ data:", data);

  return (
    <div>
      <div>Custome hooks</div>
      {loading ? <div>Loading...</div> : ""}
      <div>
        {data?.map((val) => {
          return (
            <ul key={val.id}>
              <li>{val.name}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default UseCustomHooks;
