export interface Customer {
  id: string;
  fullName: string;
  phone: string;
  address: string;
  email: string;
  role: 'student' | 'public';
}
