export const ROUTES = {
  LOGIN: '/',
  HOME: '/home',
  ACCOUNT: '/account',
  SHEDULE: '/shedule',
  HUBS: '/hubs',
  HUBS_SINGLE: (id: string) => `/hubs/${id}`,
  USER_DEVICES: '/devices',
  USER_DEVICES_SINGLE: (id: string) => `/devices/${id}`,
  STORE: '/store',
  STORE_DEVICE: (id: string) => `/store/${id}`,
};

export const API_PREFIX = 'http://localhost/api/v1';

export const API_ROUTES = {
  LOGIN: `${API_PREFIX}/auth/login/`,
  LOGOUT: `${API_PREFIX}/auth/logout/`,
  USER_ME: `${API_PREFIX}/auth/me/`,
  HUBS: `${API_PREFIX}/store/hubs/`,
  HUBS_SINGLE: (id: string) => `${API_PREFIX}/store/hubs/${id}`,
  DEVICE_TYPES: `${API_PREFIX}/store/device-types/`,
  DEVICES: `${API_PREFIX}/store/devices/`,
  DEVICES_SINGLE: (id: string) => `${API_PREFIX}/store/devices/${id}`,
};
