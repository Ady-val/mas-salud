export interface IBeneficiariesParams {
  page?: number;
  limit?: number;
  name?: string;
  lastName?: string;
  gender?: 'Male' | 'Female';
  curp?: string;
  identificationCode?: string;
}

export interface IBeneficiaryFilterState
  extends Omit<IBeneficiariesParams, 'page' | 'limit'> {}

export interface IBeneficiary {
  id?: string;
  name: string;
  lastName: string;
  secondLastName: string;
  curp: string;
  phone: string;
  gender: string;
  street: string;
  externalNumber: string;
  internalNumber?: string | null;
  colony: string;
  postalCode: string;
}
