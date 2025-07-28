/* eslint-disable array-callback-return */
import "./App.css";
import { useState, useMemo, useEffect } from "react";
import { posts } from "./assets2/content.ts";

function App2() {
  const [searchText, setSearchText] = useState("");
  const [SortId, setSortId] = useState("id");
  const [SortType, setSortType] = useState("Ascending");
  const [selectedFilter, setFilter] = useState("");
  const [selectedPage, setSelectedPage] = useState(1);
  const [calcPagiPages, setCalcPagiPages] = useState([]);
  const initialPageLoad = 10;

  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= posts.length / initialPageLoad; i++) {
      pages.push(i);
    }
    setCalcPagiPages(pages);
  }, []);

  const pagination = useMemo(() => {
    let startIndex = (selectedPage - 1) * initialPageLoad;
    let endIndex = startIndex + initialPageLoad;

    return [...posts].slice(startIndex, endIndex);
  }, [selectedPage]);

  const uniqueByNameAndCat = useMemo(() => {
    let uniqueByName = new Map();
    let uniqueByNameArr = [];
    [...pagination].forEach((valObj) => {
      if (!uniqueByName.has(valObj.title)) {
        uniqueByName.set(valObj.title, valObj.id);
        uniqueByNameArr.push(valObj);
      }
    });
    return uniqueByNameArr;
  }, [pagination]);

  // console.log("🚀 ~ pagination ~ pagination:", pagination);

  const filterValue = useMemo(() => {
    return [...uniqueByNameAndCat].filter((val) => {
      return Object.values(val).some((someVal) => {
        return someVal
          .toString()
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
    });
  }, [searchText, uniqueByNameAndCat]);

  // console.log("🚀 ~ filterValue ~ filterValue:", filterValue);

  const sortAndFilterRes = useMemo(() => {
    const filtered = selectedFilter
      ? filterValue.filter((val) => val.category === selectedFilter)
      : filterValue;

    console.log("🚀 ~ filteredVal ~ filteredVal:", filtered);
    console.log(
      "🚀 ~ returnFilterValue.sort ~ SortType:, id",
      SortType,
      SortId
    );
    return [...filtered].sort((a, b) => {
      if (SortType === "Ascending") {
        // console.log(typeof a[SortId]);
        if (Array.isArray(a[SortId])) {
          console.log("array");
          let aStr = a[SortId].join("");
          let bStr = b[SortId].join("");
          return aStr.localeCompare(bStr);
        } else if (
          typeof a[SortId] === "string" &&
          typeof b[SortId] === "string"
        ) {
          console.log("string");
          return a[SortId].localeCompare(b[SortId]);
        } else {
          console.log("number");
          return parseFloat(a[SortId]) - parseFloat(b[SortId]);
        }
      } else {
        if (Array.isArray(a[SortId])) {
          console.log("array");

          let aStr = a[SortId].join("");
          let bStr = b[SortId].join("");
          return bStr.localeCompare(aStr);
        } else if (
          typeof a[SortId] === "string" &&
          typeof b[SortId] === "string"
        ) {
          console.log("string");
          return b[SortId].localeCompare(a[SortId]);
        } else {
          console.log("number");
          return parseFloat(b[SortId]) - parseFloat(a[SortId]);
        }
      }
    });
  }, [filterValue, SortId, SortType, selectedFilter]);

  // console.log("🚀 ~ sortAndFilterRes ~ sortAndFilterRes:", sortAndFilterRes);

  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            gap: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              marginRight: "20px",
            }}
          >
            {calcPagiPages.map((val, index) => {
              return (
                <button key={index} onClick={() => setSelectedPage(val)}>
                  {val}
                </button>
              );
            })}
          </div>
          <label>Search:</label>
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <select
            name="sort"
            id="sort"
            onChange={(e) => {
              setSortId(e.target.value);
            }}
          >
            <option value="">Select Sort Id</option>
            <option value="id">id</option>
            <option value="title">title</option>
            <option value="content">content</option>
            <option value="category">category</option>
            <option value="price">price</option>
          </select>
          <select
            onChange={(e) => {
              setSortType(e.target.value);
            }}
          >
            <option>Select Sort Type</option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
          <select
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option value="">Filter By Category</option>
            <option value="American">American</option>
            <option value="Mexican">Mexican</option>
            <option value="Italian">Italian</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>content</th>
              <th>category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {sortAndFilterRes.map((val, index) => {
              return (
                <tr key={index}>
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

export default App2;
