export interface IUserParams {
  page?: number;
  limit?: number;
  name?: string;
  username?: string;
  institutionId?: string;
}

export interface IUser {
  id?: string;
  username: string;
  name: string;
  role: string;
  roleId: string;
  institution: string;
  institutionId: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IUserForm {
  id?: string;
  username: string;
  name: string;
  roleId: string;
  institutionId: string;
  password?: string;
}
