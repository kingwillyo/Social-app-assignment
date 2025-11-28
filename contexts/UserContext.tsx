import React, { createContext, useState, useContext, ReactNode } from 'react';
import { UserData, UserContextType } from '../types/types';

const initialState: UserData = {
  phoneNumber: '',
  code: '',
  firstName: '',
  lastName: '',
  username: '',
  age: '',
  photo: null,
  topics: [],
  clubs: [],
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData>(initialState);

  // Key is typed as 'keyof UserData' for type safety
  const updateData = (key: keyof UserData, value: any) => {
    setUserData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <UserContext.Provider value={{ userData, updateData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};