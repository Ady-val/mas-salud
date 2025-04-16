export interface IMedicalSpecialistsParams {
  page?: number;
  limit?: number;
  fullName?: string;
  specialty?: string;
  institutionId?: string;
}

export interface IMedicalSpecialistFilterState
  extends Omit<IMedicalSpecialistsParams, 'page' | 'limit'> {}

export interface IMedicalSpecialist {
  id?: string;
  fullName: string;
  speciality: string;
  institutionId: string;
  email?: string | null;
  phone?: string | null;
  licenseNumber?: string | null;
}
