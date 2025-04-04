export interface UseBeneficiariesParams {
  page?: number;
  limit?: number;
  name?: string;
  lastName?: string;
  gender?: 'Male' | 'Female';
  curp?: string;
}

export interface IBeneficiary {
  name: string;
  lastName: string;
  secondLastName: string;
  curp: string;
  phone: string;
  gender: string;
  street: string;
  externalNumber: string;
  internalNumber?: string | undefined;
  colony: string;
  postalCode: string;
}
