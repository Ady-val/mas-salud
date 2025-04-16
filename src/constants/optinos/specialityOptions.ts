import { ESpecialistType } from '@mas-salud/enum/specialities';
import { IOption } from '@mas-salud/interfaces/common';
import { SPECIALITIES_LABELS } from '../specialities';

interface ISpecialityOption extends IOption {
  value: ESpecialistType;
}

export const specialityOptions: ISpecialityOption[] = [
  {
    label: SPECIALITIES_LABELS[ESpecialistType.PSYCHOLOGIST],
    value: ESpecialistType.PSYCHOLOGIST,
    key: ESpecialistType.PSYCHOLOGIST,
  },
  {
    label: SPECIALITIES_LABELS[ESpecialistType.NUTRICIONIST],
    value: ESpecialistType.NUTRICIONIST,
    key: ESpecialistType.NUTRICIONIST,
  },
  {
    label: SPECIALITIES_LABELS[ESpecialistType.PHYSIOTHERAPIST],
    value: ESpecialistType.PHYSIOTHERAPIST,
    key: ESpecialistType.PHYSIOTHERAPIST,
  },
  {
    label: SPECIALITIES_LABELS[ESpecialistType.DOCTOR],
    value: ESpecialistType.DOCTOR,
    key: ESpecialistType.DOCTOR,
  },
];
