export interface AuthCredential {
  email: string;
  password: string;
}

export interface AuthUser {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  email: string;
  token: string;
}
