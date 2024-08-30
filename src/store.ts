import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AuthUser } from './entities/auth';

interface AuthStore {
  user: any;
  login: (user: any) => void;
  logout: () => void;
}

const authUser = JSON.parse(localStorage.getItem('authUser')!);

const userAuthStore = create<AuthStore>((set) => ({
  user: authUser,
  login: () => set((user: any) => ({ user: user })),
  logout: () => set(() => ({ user: null })),
}));

export default userAuthStore;
