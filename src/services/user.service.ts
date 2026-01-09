import { API_ROUTES } from '@/shared/config';

export interface IUserEntity {
  id: string;
  phoneNumber: string;
}

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

  getMe: async (jwtCookie: string | undefined) => {
    return await fetch(API_ROUTES.USER_ME, {
      method: 'GET',
      headers: {
        Cookie: `access_token=${jwtCookie}`,
      },
      credentials: 'include',
    });
  },
};
