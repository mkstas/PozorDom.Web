import { API_ROUTES } from '@/shared/config';

export const userService = {
  login: async (phoneNumber: string) => {
    return await fetch(API_ROUTES.LOGIN, {
      body: JSON.stringify({ phoneNumber }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
  },

  logout: async () => {
    return await fetch(API_ROUTES.LOGOUT, {
      method: 'DELETE',
      credentials: 'include',
    });
  },

  check: async (jwtCookie: string) => {
    return await fetch(API_ROUTES.AUTH_CHECK, {
      method: 'GET',
      headers: {
        Cookie: `very-non-secret-cookie=${jwtCookie}`,
      },
    });
  },
};
