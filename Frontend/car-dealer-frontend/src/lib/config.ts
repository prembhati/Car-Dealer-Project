// src/lib/config.ts
export const API_URL = 'http://localhost:3000/api';

// src/lib/utils/api.ts
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
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return response.json();
}
