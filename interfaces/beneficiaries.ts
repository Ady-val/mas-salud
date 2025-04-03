export interface UseBeneficiariesParams {
  page?: number;
  limit?: number;
  name?: string;
  lastName?: string;
  gender?: 'Male' | 'Female';
  curp?: string;
}

export interface IBeneficiary {
  firstName: string;
  lastName: string;
  secondLastName: string;
  curp: string;
  phone: string;
  street: string;
  exteriorNumber: string;
  interiorNumber?: string | undefined;
  neighborhood: string;
  postalCode: string;
}
