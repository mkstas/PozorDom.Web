'use client';

import {
  createContext,
  type Dispatch,
  type FC,
  type PropsWithChildren,
  type SetStateAction,
  useContext,
  useState,
} from 'react';

interface IUserContext {
  phoneNumber: string | null;
  setPhoneNumber: Dispatch<SetStateAction<string | null>>;
}

const UserContext = createContext<IUserContext>({
  phoneNumber: null,
  setPhoneNumber: () => {},
});

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);

  return (
    <UserContext.Provider
      value={{
        phoneNumber,
        setPhoneNumber,
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
