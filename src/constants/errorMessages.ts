interface ErrorMessages {
  [key: string]: string;
}

export const translateRequestErrorMessages: ErrorMessages = {
  'password must be longer than or equal to 8 characters':
    'La contraseña debe tener al menos 8 caracteres',
  'Invalid credentials':
    'Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.',
};
