import { API_ROUTES } from '@/shared/config';

export interface IDeviceEntity {
  id: string;
  deviceTypeId: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

export const storeService = {
  getAllDevices: async (jwtCookie: string | undefined) => {
    return await fetch(API_ROUTES.DEVICES, {
      method: 'GET',
      headers: {
        Cookie: `access_token=${jwtCookie}`,
      },
      credentials: 'include',
    });
  },
  getSingleDevice: async (jwtCookie: string | undefined, deviceId: string) => {
    return await fetch(API_ROUTES.DEVICES_SINGLE(deviceId), {
      method: 'GET',
      headers: {
        Cookie: `access_token=${jwtCookie}`,
      },
      credentials: 'include',
    });
  },
};
