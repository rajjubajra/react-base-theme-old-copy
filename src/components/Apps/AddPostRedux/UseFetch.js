import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();

    setData(json);
    setLoading(false);
  }

  // eslint-disable-next-line no-undef
  useEffect(() => {
    fetchUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [data, loading];
}

export { useFetch }
