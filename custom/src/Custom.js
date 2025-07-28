import { useEffect, useState } from "react";

function useCustomApi(url) {
  console.log("🚀 ~ UseCustomApi ~ url:", url);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchData, setData] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
    return () => {};
  }, [url]);

  return { isLoading, fetchData };
}

export default useCustomApi;
