export const ROUTES = {
  LOGIN: '/',
  HOME: '/home',
};

export const API_PREFIX = 'http://localhost/api/v1';

export const API_ROUTES = {
  LOGIN: `${API_PREFIX}/auth/login`,
  LOGOUT: `${API_PREFIX}/auth/logout`,
  AUTH_CHECK: `${API_PREFIX}/auth/check`,
};
