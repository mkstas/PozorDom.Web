import { API_ROUTES } from '@/shared/config';

export interface IDevice {
  id: string;
  name: string;
  price: number;
}

export const deviceService = {
  getAll: async () => {
    return await fetch(API_ROUTES.DEVICES, {
      method: 'GET',
    });
  },
};
