import { IUserForm } from '@mas-salud/interfaces/users';
import * as yup from 'yup';

export const userSchema: yup.ObjectSchema<Omit<IUserForm, 'id'>> = yup.object({
  username: yup
    .string()
    .required('El nombre de usuario es requerido')
    .max(50, 'El nombre de usuario no puede tener más de 50 caracteres')
    .matches(
      /^[A-Z_]+$/,
      'El nombre de usuario debe estar en mayúsculas, solo puede contener letras y guiones bajos (_) y no puede incluir números',
    ),
  name: yup
    .string()
    .required('El nombre es requerido')
    .max(50, 'El nombre no puede tener más de 50 caracteres'),
  roleId: yup.string().required('El rol es requerido'),
  institutionId: yup.string().required('La institución es requerida'),
  password: yup.string().optional(),
});
