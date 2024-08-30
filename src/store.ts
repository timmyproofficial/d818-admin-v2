import { create } from 'zustand';
import { AuthUser } from './entities/auth';

interface AuthStore {
  user: any;
  login: (user: any) => void;
  logout: () => void;
}

const userAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: () => set((user: any) => ({ user: user })),
  logout: () => set(() => ({ user: null })),
}));

export default userAuthStore;
