'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Types
export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  serviceId: string;
  serviceName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  notes: string;
}

export interface Patient {
  id: string;
  name: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  emergencyContact: string;
  emergencyPhone: string;
  status: 'active' | 'inactive';
  lastVisit: string;
  totalAppointments: number;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualifications: string;
  languages: string[];
  bio: string;
  photo: string;
  status: 'active' | 'inactive' | 'on-leave';
  publiclyVisible: boolean;
  workingDays: string[];
  workingHours: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  price: string;
  status: 'active' | 'inactive';
  publiclyVisible: boolean;
  bookingCount: number;
}

interface DemoContextType {
  appointments: Appointment[];
  patients: Patient[];
  doctors: Doctor[];
  services: Service[];
  addAppointment: (appointment: Omit<Appointment, 'id'>) => void;
  updateAppointment: (id: string, appointment: Partial<Appointment>) => void;
  deleteAppointment: (id: string) => void;
  addPatient: (patient: Omit<Patient, 'id' | 'lastVisit' | 'totalAppointments'>) => void;
  updatePatient: (id: string, patient: Partial<Patient>) => void;
  deletePatient: (id: string) => void;
  addDoctor: (doctor: Omit<Doctor, 'id'>) => void;
  updateDoctor: (id: string, doctor: Partial<Doctor>) => void;
  deleteDoctor: (id: string) => void;
  addService: (service: Omit<Service, 'id' | 'bookingCount'>) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

// Initial sample data
const initialAppointments: Appointment[] = [
  {
    id: 'apt-001',
    patientId: 'pat-001',
    patientName: 'Ahmad bin Ali',
    patientPhone: '+60123456789',
    patientEmail: 'ahmad@example.com',
    serviceId: 'svc-001',
    serviceName: 'General Checkup',
    doctorId: 'doc-001',
    doctorName: 'Dr. Sarah Lee',
    date: '2026-05-05',
    time: '09:00',
    status: 'confirmed',
    notes: 'Regular checkup'
  },
  {
    id: 'apt-002',
    patientId: 'pat-002',
    patientName: 'Siti Nurhaliza',
    patientPhone: '+60129876543',
    patientEmail: 'siti@example.com',
    serviceId: 'svc-002',
    serviceName: 'Vaccination',
    doctorId: 'doc-002',
    doctorName: 'Dr. Kumar',
    date: '2026-05-05',
    time: '10:00',
    status: 'pending',
    notes: 'COVID-19 booster'
  },
  {
    id: 'apt-003',
    patientId: 'pat-003',
    patientName: 'Lee Wei Ming',
    patientPhone: '+60187654321',
    patientEmail: 'lee@example.com',
    serviceId: 'svc-003',
    serviceName: 'Blood Test',
    doctorId: 'doc-001',
    doctorName: 'Dr. Sarah Lee',
    date: '2026-05-05',
    time: '11:00',
    status: 'confirmed',
    notes: 'Fasting blood test'
  }
];

const initialPatients: Patient[] = [
  {
    id: 'pat-001',
    name: 'Ahmad bin Ali',
    phone: '+60123456789',
    email: 'ahmad@example.com',
    dateOfBirth: '1985-03-15',
    gender: 'Male',
    address: 'Kuala Lumpur, Malaysia',
    emergencyContact: 'Fatimah binti Ali',
    emergencyPhone: '+60123456780',
    status: 'active',
    lastVisit: '2026-04-20',
    totalAppointments: 12
  },
  {
    id: 'pat-002',
    name: 'Siti Nurhaliza',
    phone: '+60129876543',
    email: 'siti@example.com',
    dateOfBirth: '1990-07-22',
    gender: 'Female',
    address: 'Petaling Jaya, Malaysia',
    emergencyContact: 'Ahmad bin Hassan',
    emergencyPhone: '+60129876540',
    status: 'active',
    lastVisit: '2026-04-15',
    totalAppointments: 8
  },
  {
    id: 'pat-003',
    name: 'Lee Wei Ming',
    phone: '+60187654321',
    email: 'lee@example.com',
    dateOfBirth: '1978-11-08',
    gender: 'Male',
    address: 'Shah Alam, Malaysia',
    emergencyContact: 'Lee Mei Ling',
    emergencyPhone: '+60187654320',
    status: 'active',
    lastVisit: '2026-03-30',
    totalAppointments: 15
  }
];

const initialDoctors: Doctor[] = [
  {
    id: 'doc-001',
    name: 'Dr. Sarah Lee',
    specialty: 'General Practitioner',
    qualifications: 'MBBS, MRCGP',
    languages: ['English', 'Malay', 'Mandarin'],
    bio: 'Experienced GP with 10+ years in family medicine',
    photo: '/images/doctor-placeholder.jpg',
    status: 'active',
    publiclyVisible: true,
    workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    workingHours: '09:00 - 17:00'
  },
  {
    id: 'doc-002',
    name: 'Dr. Kumar Raj',
    specialty: 'Pediatrician',
    qualifications: 'MBBS, MD (Pediatrics)',
    languages: ['English', 'Malay', 'Tamil'],
    bio: 'Specialist in child healthcare and development',
    photo: '/images/doctor-placeholder.jpg',
    status: 'active',
    publiclyVisible: true,
    workingDays: ['Monday', 'Wednesday', 'Friday'],
    workingHours: '10:00 - 18:00'
  },
  {
    id: 'doc-003',
    name: 'Dr. Fatimah Ahmad',
    specialty: 'Internal Medicine',
    qualifications: 'MBBS, MRCP',
    languages: ['English', 'Malay'],
    bio: 'Expert in chronic disease management',
    photo: '/images/doctor-placeholder.jpg',
    status: 'active',
    publiclyVisible: true,
    workingDays: ['Tuesday', 'Thursday', 'Saturday'],
    workingHours: '09:00 - 16:00'
  }
];

const initialServices: Service[] = [
  {
    id: 'svc-001',
    name: 'General Checkup',
    category: 'General Care',
    description: 'Comprehensive health screening and consultation',
    duration: '30 minutes',
    price: 'RM 80',
    status: 'active',
    publiclyVisible: true,
    bookingCount: 45
  },
  {
    id: 'svc-002',
    name: 'Vaccination',
    category: 'Preventive Care',
    description: 'Various vaccination services for all ages',
    duration: '15 minutes',
    price: 'RM 50',
    status: 'active',
    publiclyVisible: true,
    bookingCount: 38
  },
  {
    id: 'svc-003',
    name: 'Blood Test',
    category: 'Screening',
    description: 'Comprehensive blood panel testing',
    duration: '20 minutes',
    price: 'RM 120',
    status: 'active',
    publiclyVisible: true,
    bookingCount: 32
  },
  {
    id: 'svc-004',
    name: 'Health Screening',
    category: 'Preventive Care',
    description: 'Full body health screening package',
    duration: '60 minutes',
    price: 'RM 250',
    status: 'active',
    publiclyVisible: true,
    bookingCount: 28
  }
];

export function DemoProvider({ children }: { children: ReactNode }) {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [doctors, setDoctors] = useState<Doctor[]>(initialDoctors);
  const [services, setServices] = useState<Service[]>(initialServices);

  // Appointment CRUD
  const addAppointment = (appointment: Omit<Appointment, 'id'>) => {
    const newAppointment = {
      ...appointment,
      id: `apt-${Date.now()}`
    };
    setAppointments([...appointments, newAppointment]);
  };

  const updateAppointment = (id: string, updatedData: Partial<Appointment>) => {
    setAppointments(appointments.map(apt => 
      apt.id === id ? { ...apt, ...updatedData } : apt
    ));
  };

  const deleteAppointment = (id: string) => {
    setAppointments(appointments.filter(apt => apt.id !== id));
  };

  // Patient CRUD
  const addPatient = (patient: Omit<Patient, 'id' | 'lastVisit' | 'totalAppointments'>) => {
    const newPatient = {
      ...patient,
      id: `pat-${Date.now()}`,
      lastVisit: new Date().toISOString().split('T')[0],
      totalAppointments: 0
    };
    setPatients([...patients, newPatient]);
  };

  const updatePatient = (id: string, updatedData: Partial<Patient>) => {
    setPatients(patients.map(pat => 
      pat.id === id ? { ...pat, ...updatedData } : pat
    ));
  };

  const deletePatient = (id: string) => {
    setPatients(patients.filter(pat => pat.id !== id));
  };

  // Doctor CRUD
  const addDoctor = (doctor: Omit<Doctor, 'id'>) => {
    const newDoctor = {
      ...doctor,
      id: `doc-${Date.now()}`
    };
    setDoctors([...doctors, newDoctor]);
  };

  const updateDoctor = (id: string, updatedData: Partial<Doctor>) => {
    setDoctors(doctors.map(doc => 
      doc.id === id ? { ...doc, ...updatedData } : doc
    ));
  };

  const deleteDoctor = (id: string) => {
    setDoctors(doctors.filter(doc => doc.id !== id));
  };

  // Service CRUD
  const addService = (service: Omit<Service, 'id' | 'bookingCount'>) => {
    const newService = {
      ...service,
      id: `svc-${Date.now()}`,
      bookingCount: 0
    };
    setServices([...services, newService]);
  };

  const updateService = (id: string, updatedData: Partial<Service>) => {
    setServices(services.map(svc => 
      svc.id === id ? { ...svc, ...updatedData } : svc
    ));
  };

  const deleteService = (id: string) => {
    setServices(services.filter(svc => svc.id !== id));
  };

  return (
    <DemoContext.Provider
      value={{
        appointments,
        patients,
        doctors,
        services,
        addAppointment,
        updateAppointment,
        deleteAppointment,
        addPatient,
        updatePatient,
        deletePatient,
        addDoctor,
        updateDoctor,
        deleteDoctor,
        addService,
        updateService,
        deleteService
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export function useDemoContext() {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error('useDemoContext must be used within a DemoProvider');
  }
  return context;
}
