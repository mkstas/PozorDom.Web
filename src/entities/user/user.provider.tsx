'use client';

import { redirect } from 'next/navigation';
import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ROUTES } from '@/shared/config';
import { userService } from './user.service';

interface IUserContext {
  isLoggedIn: boolean;
  isLoading: boolean;
}

const UserContext = createContext<IUserContext>({
  isLoading: false,
  isLoggedIn: false,
});

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await userService.check();

      if (res.ok) {
        setIsLoggedIn(true);
        redirect(ROUTES.HOME);
      }

      if (res.status === 401) {
        redirect(ROUTES.LOGIN);
      }
    };

    checkAuth();
  });

  return (
    <UserContext.Provider
      value={{
        isLoading,
        isLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  return { ...context };
};
