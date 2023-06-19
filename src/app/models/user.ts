export interface User{
  uid: string;
  email: string;
  name: string;
  role: string;
}

export type UserRole = 'admin' | 'guest';
