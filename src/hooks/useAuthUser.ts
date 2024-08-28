import { AuthUser } from '@/entities/auth';

const useAuthUser = (): AuthUser =>
  JSON.parse(localStorage.getItem('authUser')!);

export default useAuthUser;
