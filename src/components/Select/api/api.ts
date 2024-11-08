import { ApiResponse } from './types';

export const fetchUsers = async (
  page: number,
  limit: number = 50,
  baseUrl: string = 'https://alanbase.vercel.app/api/users'
): Promise<ApiResponse> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${baseUrl}?page=${page}&limit=${limit}`, {
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorDetail = await response.text();
      throw new Error(`Failed to fetch users: ${errorDetail}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
};
