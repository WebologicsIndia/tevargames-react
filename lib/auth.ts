import { store } from './redux/store';

/**
 * Check if user is authenticated
 * Checks Redux store for authentication status
 */
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;

  const state = store.getState();
  return state.auth.isAuthenticated && !!state.auth.token;
};

/**
 * Get auth token from Redux store
 */
export const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;

  const state = store.getState();
  return state.auth.token;
};

/**
 * Get current user from Redux store
 */
export const getCurrentUser = () => {
  if (typeof window === 'undefined') return null;

  const state = store.getState();
  return state.auth.user;
};
