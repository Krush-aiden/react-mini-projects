import { posts } from "./assets2/content.ts";
import { useMemo, useState } from "react";

function App() {
  console.log("🚀 ~ posts:", posts);
  const [searchTxt, setSearchTxt] = useState("");
  const initialPageLoad = 10;
  const [pagiValue, setPagivalue] = useState(1);

  const paginationVal = useMemo(() => {
    let firstI = (pagiValue - 1) * initialPageLoad;
    let endIndex = firstI + initialPageLoad;
    return posts.slice(firstI, endIndex);
  }, [initialPageLoad, pagiValue]);

  const searchResult = useMemo(() => {
    return [...paginationVal].filter((val) => {
      return Object.values(val).some((value) => {
        return value.toString().toLowerCase().includes(searchTxt.toLowerCase());
      });
    });
  }, [searchTxt, paginationVal]);

  console.log("🚀 ~ paginationVal ~ paginationVal:", paginationVal);
  console.log("🚀 ~ searchResult ~ searchResult:", searchResult);

  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <select>
          <option>1</option>
        </select>
        <select>
          <option>1</option>
        </select>
        <label>white</label>
        <input type="radio" id="white" name="color" />

        <label>black</label>
        <input type="radio" id="black" name="color" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <table>
          <thead>
            <tr>
              {["id", "title", "content", "category", "price"].map((val) => {
                return <th key={val}>{val}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {searchResult.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.title}</td>
                  <td>{val.content}</td>
                  <td>{val.category}</td>
                  <td>{val.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
