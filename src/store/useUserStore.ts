// /src/store/useUserStore.ts
import { LoginResponse } from '@src/apis/user';
import { create } from 'zustand';

export interface User {
  address: {
    zipcode: number;
    detail: string;
    county: string;
    city: string;
  };
  _id: string;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

interface UserState {
  user: User | null;
  token: string | null;
  setUser: (login: LoginResponse) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null, // 初始狀態為 null
  token: null,
  setUser: (login) => set({ user: login.result, token: login.token }),
}));
