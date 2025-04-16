import { IMedicalSpecialist } from '@mas-salud/interfaces/medicalSpecialists';
import {
  createMedicalSpecialist,
  deleteMedicalSpecialist,
  updateMedicalSpecialist,
} from '@mas-salud/lib/apiClient/medicalSpecialistsQueries';
import { useMutation } from '@tanstack/react-query';

export const useNewMedicalSpecialist = () => {
  return useMutation({
    mutationFn: (data: IMedicalSpecialist) => createMedicalSpecialist(data),
  });
};

export const useUpdateMedicalSpecialist = () => {
  return useMutation({
    mutationFn: (data: IMedicalSpecialist) => updateMedicalSpecialist(data),
  });
};

export const useDeleteMedicalSpecialist = () => {
  return useMutation({
    mutationFn: (id: string) => deleteMedicalSpecialist(id),
  });
};

export const useMedicalSpecialistMutation = () => {
  const mutation = useMutation({
    mutationFn: async (
      medicalSpecialistData: Partial<IMedicalSpecialist> & { id?: string },
    ) => {
      if (!!medicalSpecialistData?.id) {
        return await updateMedicalSpecialist(
          medicalSpecialistData as IMedicalSpecialist,
        );
      } else {
        return await createMedicalSpecialist(
          medicalSpecialistData as IMedicalSpecialist,
        );
      }
    },
  });

  return mutation;
};
