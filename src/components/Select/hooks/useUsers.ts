import { useState, useEffect } from 'react';
import { fetchUsers } from '../api/api';
import { User } from '../types';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMoreUsers = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const response = await fetchUsers(page);
      setUsers((prev) => [...prev, ...response.data]);
      setPage((prev) => prev + 1);
      setHasMore(response.meta.to < response.meta.total);
    } catch (error) {
      console.error('Error loading users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoreUsers();
  }, []);

  return { users, loadMoreUsers, hasMore, loading };
};
