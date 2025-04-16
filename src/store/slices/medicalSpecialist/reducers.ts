import { IMedicalSpecialistFilterState } from '@mas-salud/interfaces/medicalSpecialists';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const initialState: IMedicalSpecialistFilterState = {
  fullName: '',
  specialty: '',
  institutionId: '',
};

const setMedicalSpecialistFilters: CaseReducer<
  IMedicalSpecialistFilterState,
  PayloadAction<IMedicalSpecialistFilterState>
> = (state, action: PayloadAction<Partial<IMedicalSpecialistFilterState>>) => {
  return { ...state, ...action.payload };
};

const resetMedicalSpecialistFilters: CaseReducer<
  IMedicalSpecialistFilterState
> = (state) => {
  return { ...state, ...initialState };
};

export {
  initialState,
  setMedicalSpecialistFilters,
  resetMedicalSpecialistFilters,
};
