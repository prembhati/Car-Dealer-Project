import { writable } from 'svelte/store';

// Svelte store to keep track of authentication status
export const isAuthenticated = writable(false);

// Function to check if the user is authenticated
export function checkAuth() {
  const token = localStorage.getItem('token');
  if (token) {
    isAuthenticated.set(true);
  } else {
    isAuthenticated.set(false);
  }
}

// Function to log out the user
export function logout() {
  localStorage.removeItem('token');
  isAuthenticated.set(false);
}
