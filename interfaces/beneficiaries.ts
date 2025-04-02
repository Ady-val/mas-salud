export interface UseBeneficiariesParams {
  page?: number;
  limit?: number;
  name?: string;
  lastName?: string;
  gender?: 'Male' | 'Female';
  curp?: string;
}
