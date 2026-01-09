import { API_ROUTES } from '@/shared/config';

export interface IUserEntity {
  id: string;
  phoneNumber: string;
  fullName: string;
  email: string;
  imageUrl: string;
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
  validate: async (jwtCookie: string | undefined) => {
    return await fetch(API_ROUTES.VALIDATE, {
      method: 'GET',
      headers: {
        Cookie: `access_token=${jwtCookie}`,
      },
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
  updatePhone: async (phoneNumber: string) => {
    return await fetch(API_ROUTES.USER_ME_PHONE, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ phoneNumber }),
    });
  },
  updateInfo: async (fullName: string) => {
    return await fetch(API_ROUTES.USER_ME_INFO, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ fullName }),
    });
  },
  updateEmail: async (email: string) => {
    return await fetch(API_ROUTES.USER_ME_EMAIL, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email }),
    });
  },
  updateImage: async (formData: FormData) => {
    return await fetch(API_ROUTES.USER_ME_IMAGE, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: formData,
    });
  },
};
