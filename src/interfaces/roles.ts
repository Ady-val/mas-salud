export interface IRolesParams {
  page?: number;
  limit?: number;
}

export interface IPermissions {
  module: string;
  isGlobal: boolean;
  actions: string[];
}

export interface IRole {
  id?: string;
  name: string;
  permissions: IPermissions[];
}
