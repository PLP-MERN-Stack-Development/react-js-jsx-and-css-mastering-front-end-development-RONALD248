import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?_page=${page}&_limit=10`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const result = await response.json();
      
      setData(prev => page === 1 ? result : [...prev, ...result]);
      setHasMore(result.length === 10);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage(prev => prev + 1);
    }
  };

  const refetch = () => {
    setPage(1);
    fetchData();
  };

  return { data, loading, error, hasMore, loadMore, refetch };
}

export default useApi;