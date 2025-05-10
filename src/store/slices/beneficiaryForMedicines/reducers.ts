import { IBeneficiary } from '@mas-salud/interfaces/beneficiaries';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const initialState: IBeneficiary = {
  id: '',
  name: '',
  lastName: '',
  secondLastName: '',
  curp: '',
  phone: '',
  gender: '',
  street: '',
  externalNumber: '',
  internalNumber: null,
  colony: '',
  postalCode: '',
};

const setBeneficiaryForMedicines: CaseReducer<
  IBeneficiary,
  PayloadAction<IBeneficiary>
> = (state, action: PayloadAction<Partial<IBeneficiary>>) => {
  return { ...state, ...action.payload };
};

const deleteBeneficiaryForMedicines: CaseReducer<IBeneficiary> = (state) => {
  return { ...state, ...initialState };
};

export {
  initialState,
  setBeneficiaryForMedicines,
  deleteBeneficiaryForMedicines,
};
