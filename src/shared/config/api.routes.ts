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
  VALIDATE: `${API_PREFIX}/auth/validate`,
  USER_ME: `${API_PREFIX}/auth/me/`,
  USER_ME_PHONE: `${API_PREFIX}/auth/me/phone`,
  USER_ME_INFO: `${API_PREFIX}/auth/me/info`,
  USER_ME_EMAIL: `${API_PREFIX}/auth/me/email`,
  USER_ME_IMAGE: `${API_PREFIX}/auth/me/image`,
  DEVICES: `${API_PREFIX}/store/devices/`,
  DEVICES_SINGLE: (id: string) => `${API_PREFIX}/store/devices/${id}`,
};
