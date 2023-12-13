import { useCallback, useEffect, useState } from "react";


const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback( async () => { 
    try {
      setIsLoading(true)
      setError()
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error('error fetch')
      }

      const data = await res.json()
      setData(data) 
      
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
     
  },[url])

  useEffect(() => {
    getData()
  }, [getData])

  const refetch = () => getData();
  
  return [ data, error, isLoading,refetch ];
}

export default useFetch;