'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Job {
  id: number;
  job_number: string;
  customer_name: string;
  vehicle: string;
  status: 'pending' | 'in-progress' | 'completed' | 'delivered';
  technician: string;
  description: string;
  created_at: string;
  estimated_cost: number;
  actual_cost?: number;
}

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  total_jobs: number;
  total_spent: number;
}

interface Technician {
  id: number;
  name: string;
  specialty: string;
  active_jobs: number;
  completed_jobs: number;
  rating: number;
  status: 'available' | 'busy' | 'off-duty';
}

interface InventoryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  unit_price: number;
  reorder_level: number;
  supplier: string;
}

interface Invoice {
  id: number;
  invoice_number: string;
  customer_name: string;
  job_number: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  date: string;
  due_date: string;
}

interface DemoContextType {
  jobs: Job[];
  customers: Customer[];
  technicians: Technician[];
  inventory: InventoryItem[];
  invoices: Invoice[];
  addJob: (job: Omit<Job, 'id'>) => void;
  updateJobStatus: (id: number, status: Job['status']) => void;
  deleteJob: (id: number) => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

const mockJobs: Job[] = [
  { id: 1, job_number: 'JOB-001', customer_name: 'John Smith', vehicle: '2020 Toyota Camry', status: 'in-progress', technician: 'Mike Johnson', description: 'Oil change and brake inspection', created_at: '2026-05-01', estimated_cost: 150 },
  { id: 2, job_number: 'JOB-002', customer_name: 'Sarah Williams', vehicle: '2019 Honda Civic', status: 'pending', technician: 'Unassigned', description: 'Engine diagnostic and repair', created_at: '2026-05-02', estimated_cost: 450 },
  { id: 3, job_number: 'JOB-003', customer_name: 'Robert Brown', vehicle: '2021 Ford F-150', status: 'completed', technician: 'Mike Johnson', description: 'Tire replacement', created_at: '2026-04-28', estimated_cost: 600, actual_cost: 580 },
  { id: 4, job_number: 'JOB-004', customer_name: 'Emily Davis', vehicle: '2018 BMW 3 Series', status: 'in-progress', technician: 'David Lee', description: 'Transmission service', created_at: '2026-05-01', estimated_cost: 800 },
  { id: 5, job_number: 'JOB-005', customer_name: 'Michael Wilson', vehicle: '2022 Tesla Model 3', status: 'delivered', technician: 'David Lee', description: 'Battery check and software update', created_at: '2026-04-25', estimated_cost: 200, actual_cost: 200 },
];

const mockCustomers: Customer[] = [
  { id: 1, name: 'John Smith', email: 'john.smith@email.com', phone: '(555) 123-4567', address: '123 Main St, City, ST 12345', total_jobs: 5, total_spent: 2450 },
  { id: 2, name: 'Sarah Williams', email: 'sarah.w@email.com', phone: '(555) 234-5678', address: '456 Oak Ave, City, ST 12345', total_jobs: 3, total_spent: 1200 },
  { id: 3, name: 'Robert Brown', email: 'rbrown@email.com', phone: '(555) 345-6789', address: '789 Pine Rd, City, ST 12345', total_jobs: 8, total_spent: 4800 },
  { id: 4, name: 'Emily Davis', email: 'emily.davis@email.com', phone: '(555) 456-7890', address: '321 Elm St, City, ST 12345', total_jobs: 2, total_spent: 950 },
  { id: 5, name: 'Michael Wilson', email: 'mwilson@email.com', phone: '(555) 567-8901', address: '654 Maple Dr, City, ST 12345', total_jobs: 4, total_spent: 1800 },
];

const mockTechnicians: Technician[] = [
  { id: 1, name: 'Mike Johnson', specialty: 'General Repair', active_jobs: 2, completed_jobs: 145, rating: 4.8, status: 'busy' },
  { id: 2, name: 'David Lee', specialty: 'Electrical Systems', active_jobs: 1, completed_jobs: 98, rating: 4.9, status: 'busy' },
  { id: 3, name: 'James Martinez', specialty: 'Engine Specialist', active_jobs: 0, completed_jobs: 167, rating: 4.7, status: 'available' },
  { id: 4, name: 'Chris Anderson', specialty: 'Transmission', active_jobs: 0, completed_jobs: 89, rating: 4.6, status: 'off-duty' },
];

const mockInventory: InventoryItem[] = [
  { id: 1, name: 'Engine Oil 5W-30', category: 'Fluids', quantity: 45, unit_price: 8.99, reorder_level: 20, supplier: 'AutoParts Inc' },
  { id: 2, name: 'Brake Pads Set', category: 'Brakes', quantity: 12, unit_price: 45.00, reorder_level: 10, supplier: 'BrakeMaster' },
  { id: 3, name: 'Air Filter', category: 'Filters', quantity: 8, unit_price: 15.50, reorder_level: 15, supplier: 'FilterPro' },
  { id: 4, name: 'Spark Plugs (Set of 4)', category: 'Ignition', quantity: 25, unit_price: 32.00, reorder_level: 10, supplier: 'AutoParts Inc' },
  { id: 5, name: 'Transmission Fluid', category: 'Fluids', quantity: 18, unit_price: 12.99, reorder_level: 12, supplier: 'FluidMasters' },
  { id: 6, name: 'Wiper Blades', category: 'Accessories', quantity: 30, unit_price: 18.50, reorder_level: 15, supplier: 'AutoParts Inc' },
];

const mockInvoices: Invoice[] = [
  { id: 1, invoice_number: 'INV-001', customer_name: 'John Smith', job_number: 'JOB-001', amount: 150, status: 'pending', date: '2026-05-01', due_date: '2026-05-15' },
  { id: 2, invoice_number: 'INV-002', customer_name: 'Robert Brown', job_number: 'JOB-003', amount: 580, status: 'paid', date: '2026-04-28', due_date: '2026-05-12' },
  { id: 3, invoice_number: 'INV-003', customer_name: 'Michael Wilson', job_number: 'JOB-005', amount: 200, status: 'paid', date: '2026-04-25', due_date: '2026-05-09' },
  { id: 4, invoice_number: 'INV-004', customer_name: 'Emily Davis', job_number: 'JOB-004', amount: 800, status: 'pending', date: '2026-05-01', due_date: '2026-05-15' },
  { id: 5, invoice_number: 'INV-005', customer_name: 'Sarah Williams', job_number: 'JOB-002', amount: 450, status: 'overdue', date: '2026-04-20', due_date: '2026-05-04' },
];

export function DemoProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [customers] = useState<Customer[]>(mockCustomers);
  const [technicians] = useState<Technician[]>(mockTechnicians);
  const [inventory] = useState<InventoryItem[]>(mockInventory);
  const [invoices] = useState<Invoice[]>(mockInvoices);

  const addJob = (job: Omit<Job, 'id'>) => {
    setJobs([...jobs, { ...job, id: Date.now() }]);
  };

  const updateJobStatus = (id: number, status: Job['status']) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status } : job));
  };

  const deleteJob = (id: number) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <DemoContext.Provider
      value={{
        jobs,
        customers,
        technicians,
        inventory,
        invoices,
        addJob,
        updateJobStatus,
        deleteJob,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export function useDemoContext() {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemoContext must be used within DemoProvider');
  }
  return context;
}
