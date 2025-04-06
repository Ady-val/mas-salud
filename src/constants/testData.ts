type TTestData = {
  key: string;
  name: string;
  role: string;
  status: string;
};

type TTestDataHeaders = {
  key: string;
  label: string;
};

interface TMedicine {
  id: number;
  name: string;
  brand: string;
  dosage: string;
  form: string;
  unit: string;
  presentation: string;
  quantity: number;
  expiration_date: string; // ISO string (YYYY-MM-DD)
  lot_number: string;
}

export interface MedicineInventoryEntry {
  id: number;
  medicine: string;
  institution: 'DIF' | 'Institución de la mujer' | 'Presidencia';
  quantity: string;
}

export interface Specialist {
  id: number;
  name: string;
  profession: 'Dr' | 'Enfermero' | 'Psicologo' | 'Fisioterapeuta';
  institution: 'DIF' | 'Institución de la mujer' | 'Presidencia';
}

export const testDataSpecialist: Specialist[] = [
  { id: 1, name: 'Dr. Juan Pérez', profession: 'Dr', institution: 'DIF' },
  {
    id: 2,
    name: 'Dra. María Gómez',
    profession: 'Dr',
    institution: 'Institución de la mujer',
  },
  {
    id: 3,
    name: 'Enf. Carlos Ramírez',
    profession: 'Enfermero',
    institution: 'DIF',
  },
  {
    id: 4,
    name: 'Enf. Ana Torres',
    profession: 'Enfermero',
    institution: 'Presidencia',
  },
  {
    id: 5,
    name: 'Psic. Laura Méndez',
    profession: 'Psicologo',
    institution: 'Institución de la mujer',
  },
  {
    id: 6,
    name: 'Psic. Ricardo Salinas',
    profession: 'Psicologo',
    institution: 'DIF',
  },
  {
    id: 7,
    name: 'Fisio. Andrés López',
    profession: 'Fisioterapeuta',
    institution: 'DIF',
  },
  {
    id: 8,
    name: 'Fisio. Patricia Núñez',
    profession: 'Fisioterapeuta',
    institution: 'Institución de la mujer',
  },
  {
    id: 9,
    name: 'Dr. José Herrera',
    profession: 'Dr',
    institution: 'Presidencia',
  },
  { id: 10, name: 'Dra. Karla Jiménez', profession: 'Dr', institution: 'DIF' },
  {
    id: 11,
    name: 'Enf. Luis Fernández',
    profession: 'Enfermero',
    institution: 'Institución de la mujer',
  },
  {
    id: 12,
    name: 'Enf. Gabriela Castro',
    profession: 'Enfermero',
    institution: 'DIF',
  },
  {
    id: 13,
    name: 'Psic. Eduardo Ortega',
    profession: 'Psicologo',
    institution: 'Presidencia',
  },
  {
    id: 14,
    name: 'Fisio. Diana Ríos',
    profession: 'Fisioterapeuta',
    institution: 'DIF',
  },
  {
    id: 15,
    name: 'Fisio. Manuel Estrada',
    profession: 'Fisioterapeuta',
    institution: 'Presidencia',
  },
];

export const testDataMedicineInventory: MedicineInventoryEntry[] = [
  {
    id: 1,
    medicine: 'Paracetamol - Genfar - 500 - mg',
    institution: 'DIF',
    quantity: '120',
  },
  {
    id: 2,
    medicine: 'Paracetamol - Tempra - 120 - mg/5ml',
    institution: 'Presidencia',
    quantity: '40',
  },
  {
    id: 3,
    medicine: 'Omeprazol - Medley - 20 - mg',
    institution: 'DIF',
    quantity: '85',
  },
  {
    id: 4,
    medicine: 'Omeprazol - Prilosec - 40 - mg',
    institution: 'Institución de la mujer',
    quantity: '60',
  },
  {
    id: 5,
    medicine: 'Aspirina - Bayer - 100 - mg',
    institution: 'DIF',
    quantity: '150',
  },
  {
    id: 6,
    medicine: 'Aspirina - Bayer - 500 - mg',
    institution: 'Presidencia',
    quantity: '90',
  },
  {
    id: 7,
    medicine: 'Ibuprofeno - MK - 400 - mg',
    institution: 'Institución de la mujer',
    quantity: '110',
  },
  {
    id: 8,
    medicine: 'Amoxicilina - Sandoz - 500 - mg',
    institution: 'DIF',
    quantity: '70',
  },
  {
    id: 9,
    medicine: 'Salbutamol - Ventolin - 100 - mcg',
    institution: 'Presidencia',
    quantity: '35',
  },
  {
    id: 10,
    medicine: 'Metformina - Merck - 850 - mg',
    institution: 'DIF',
    quantity: '100',
  },
  {
    id: 11,
    medicine: 'Loratadina - Genfar - 10 - mg',
    institution: 'Institución de la mujer',
    quantity: '95',
  },
  {
    id: 12,
    medicine: 'Diclofenaco - Voltaren - 75 - mg/ml',
    institution: 'DIF',
    quantity: '50',
  },
  {
    id: 13,
    medicine: 'Ranitidina - Zantac - 150 - mg',
    institution: 'Presidencia',
    quantity: '75',
  },
  {
    id: 14,
    medicine: 'Dexametasona - Decadron - 4 - mg/ml',
    institution: 'Institución de la mujer',
    quantity: '28',
  },
  {
    id: 15,
    medicine: 'Clonazepam - Rivotril - 2 - mg',
    institution: 'DIF',
    quantity: '60',
  },
];

export const testDataHeaders: TTestDataHeaders[] = [
  {
    key: 'name',
    label: 'Nombre',
  },
  {
    key: 'lastName',
    label: 'Apellido Paterno',
  },
  {
    key: 'secondLastName',
    label: 'Apellido Materno',
  },
  {
    key: 'curp',
    label: 'CURP',
  },
];

export const testData: TTestData[] = [
  {
    key: '1',
    name: 'Tony Reichert',
    role: 'CEO',
    status: 'Active',
  },
  {
    key: '2',
    name: 'Zoey Lang',
    role: 'Technical Lead',
    status: 'Paused',
  },
  {
    key: '3',
    name: 'Jane Fisher',
    role: 'Senior Developer',
    status: 'Active',
  },
  {
    key: '4',
    name: 'William Howard',
    role: 'Community Manager',
    status: 'Vacation',
  },
  {
    key: '5',
    name: 'Jenna Mcbride',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '6',
    name: 'Diana Mcclain',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '7',
    name: 'Holly Woodard',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '8',
    name: 'Mason Mcbride',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '9',
    name: 'Jenna Mcbride',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '10',
    name: 'Diana Mcclain',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '11',
    name: 'Holly Woodard',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '12',
    name: 'Mason Mcbride',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '13',
    name: 'Jenna Mcbride',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '14',
    name: 'Diana Mcclain',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '15',
    name: 'Holly Woodard',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '16',
    name: 'Mason Mcbride',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '17',
    name: 'Jenna Mcbride',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '18',
    name: 'Diana Mcclain',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '19',
    name: 'Holly Woodard',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '20',
    name: 'Mason Mcbride',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '21',
    name: 'Jenna Mcbride',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '22',
    name: 'Diana Mcclain',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '23',
    name: 'Holly Woodard',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '24',
    name: 'Mason Mcbride',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '25',
    name: 'Jenna Mcbride',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '26',
    name: 'Diana Mcclain',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '27',
    name: 'Holly Woodard',
    role: 'Community Manager',
    status: 'Active',
  },
  {
    key: '28',
    name: 'Mason Mcbride',
    role: 'Community Manager',
    status: 'Active',
  },
];

export const testDataMedicineProducts: TMedicine[] = [
  {
    id: 1,
    name: 'Paracetamol',
    brand: 'Genfar',
    dosage: '500',
    form: 'tableta',
    unit: 'mg',
    presentation: 'caja con 20 tabletas',
    quantity: 150,
    expiration_date: '2026-01-15',
    lot_number: 'PARA12345',
  },
  {
    id: 2,
    name: 'Paracetamol',
    brand: 'Tempra',
    dosage: '120',
    form: 'jarabe',
    unit: 'mg/5ml',
    presentation: 'frasco 120ml',
    quantity: 50,
    expiration_date: '2025-10-10',
    lot_number: 'TEMPRA001',
  },
  {
    id: 3,
    name: 'Omeprazol',
    brand: 'Medley',
    dosage: '20',
    form: 'cápsula',
    unit: 'mg',
    presentation: 'blíster con 14 cápsulas',
    quantity: 80,
    expiration_date: '2025-08-01',
    lot_number: 'OME001',
  },
  {
    id: 4,
    name: 'Omeprazol',
    brand: 'Prilosec',
    dosage: '40',
    form: 'cápsula',
    unit: 'mg',
    presentation: 'caja con 28 cápsulas',
    quantity: 60,
    expiration_date: '2026-03-15',
    lot_number: 'OME002',
  },
  {
    id: 5,
    name: 'Aspirina',
    brand: 'Bayer',
    dosage: '100',
    form: 'tableta',
    unit: 'mg',
    presentation: 'caja con 30 tabletas',
    quantity: 200,
    expiration_date: '2025-12-01',
    lot_number: 'ASP001',
  },
  {
    id: 6,
    name: 'Aspirina',
    brand: 'Bayer',
    dosage: '500',
    form: 'tableta',
    unit: 'mg',
    presentation: 'caja con 20 tabletas',
    quantity: 120,
    expiration_date: '2025-11-15',
    lot_number: 'ASP002',
  },
  {
    id: 7,
    name: 'Ibuprofeno',
    brand: 'MK',
    dosage: '400',
    form: 'tableta',
    unit: 'mg',
    presentation: 'caja con 10 tabletas',
    quantity: 90,
    expiration_date: '2026-02-28',
    lot_number: 'IBU001',
  },
  {
    id: 8,
    name: 'Amoxicilina',
    brand: 'Sandoz',
    dosage: '500',
    form: 'cápsula',
    unit: 'mg',
    presentation: 'caja con 16 cápsulas',
    quantity: 70,
    expiration_date: '2026-05-20',
    lot_number: 'AMO001',
  },
  {
    id: 9,
    name: 'Salbutamol',
    brand: 'Ventolin',
    dosage: '100',
    form: 'inhalador',
    unit: 'mcg',
    presentation: 'inhalador 200 dosis',
    quantity: 40,
    expiration_date: '2025-07-10',
    lot_number: 'SALB001',
  },
  {
    id: 10,
    name: 'Metformina',
    brand: 'Merck',
    dosage: '850',
    form: 'tableta',
    unit: 'mg',
    presentation: 'caja con 30 tabletas',
    quantity: 85,
    expiration_date: '2026-06-18',
    lot_number: 'MET001',
  },
  {
    id: 11,
    name: 'Loratadina',
    brand: 'Genfar',
    dosage: '10',
    form: 'tableta',
    unit: 'mg',
    presentation: 'blíster con 10 tabletas',
    quantity: 130,
    expiration_date: '2025-09-09',
    lot_number: 'LOR001',
  },
  {
    id: 12,
    name: 'Diclofenaco',
    brand: 'Voltaren',
    dosage: '75',
    form: 'inyección',
    unit: 'mg/ml',
    presentation: 'ampolla de 3ml',
    quantity: 35,
    expiration_date: '2026-01-30',
    lot_number: 'DICLO001',
  },
  {
    id: 13,
    name: 'Ranitidina',
    brand: 'Zantac',
    dosage: '150',
    form: 'tableta',
    unit: 'mg',
    presentation: 'blíster con 20 tabletas',
    quantity: 65,
    expiration_date: '2025-04-25',
    lot_number: 'RAN001',
  },
  {
    id: 14,
    name: 'Dexametasona',
    brand: 'Decadron',
    dosage: '4',
    form: 'inyección',
    unit: 'mg/ml',
    presentation: 'ampolla de 2ml',
    quantity: 22,
    expiration_date: '2026-09-12',
    lot_number: 'DEX001',
  },
  {
    id: 15,
    name: 'Clonazepam',
    brand: 'Rivotril',
    dosage: '2',
    form: 'tableta',
    unit: 'mg',
    presentation: 'caja con 30 tabletas',
    quantity: 25,
    expiration_date: '2026-04-07',
    lot_number: 'CLO001',
  },
];
