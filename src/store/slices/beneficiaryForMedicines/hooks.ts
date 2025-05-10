import { useDispatch, useSelector } from 'react-redux';
import { IBeneficiary } from '@mas-salud/interfaces/beneficiaries';
import {
  setBeneficiaryForMedicines,
  deleteBeneficiaryForMedicines,
} from '@mas-salud/store/slices/beneficiaryForMedicines';

import { beneficiaryForMedicinesSelector } from './selectors';

export const useBeneficiaryForMedicines = () => {
  const beneficiary = useSelector(beneficiaryForMedicinesSelector);
  const dispatch = useDispatch();

  const setBeneficiary = (beneficiary: IBeneficiary) => {
    dispatch(setBeneficiaryForMedicines(beneficiary));
  };

  const deleteBeneficiary = () => {
    dispatch(deleteBeneficiaryForMedicines());
  };

  return { beneficiary, setBeneficiary, deleteBeneficiary };
};
