import { API_URL } from '$lib/config';

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export async function fetchApi(endpoint: string, options: FetchOptions = {}): Promise<any> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
