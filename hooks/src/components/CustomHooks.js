import { useEffect, useState } from "react";

function CustomHooksForApi({ url }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("🚀 ~ fetchApi ~ json:", json);
        setData(json);
        setError(null);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        console.log("finally");
        setLoading(false);
      }
    }
    fetchApi();

    return () => {
      console.log("clean up");
    };
  }, [url]);

  console.log("🚀 ~ CustomHooksForApi ~ loading:", loading);
  return { data, loading, error };
}

export default CustomHooksForApi;
