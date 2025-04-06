export interface UseBeneficiariesParams {
  page?: number;
  limit?: number;
  name?: string;
  lastName?: string;
  gender?: 'Male' | 'Female';
  curp?: string;
}

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
