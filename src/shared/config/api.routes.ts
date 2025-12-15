export const ROUTES = {
  LOGIN: '/',
  HOME: '/home',
  STORE: '/store',
  ACCOUNT: '/account',
  DEVICES: '/devices',
  SINGLE_DEVICE: (id: string) => `/devices/${id}`,
  SHEDULE: '/shedule',
};

export const API_PREFIX = 'http://localhost/api/v1';

export const API_ROUTES = {
  LOGIN: `${API_PREFIX}/auth/login`,
  LOGOUT: `${API_PREFIX}/auth/logout`,
  AUTH_CHECK: `${API_PREFIX}/auth/check`,
  AUTH_ME: `${API_PREFIX}/auth/me`,
  DEVICES: `${API_PREFIX}/store/devices`,
};
