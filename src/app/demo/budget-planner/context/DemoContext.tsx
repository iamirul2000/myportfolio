'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Income {
  id: number;
  source: string;
  amount: number;
  date: string;
  notes: string;
}

interface Expense {
  id: number;
  category: string;
  amount: number;
  date: string;
  payment_method: string;
  notes: string;
}

interface Saving {
  id: number;
  type: string;
  amount: number;
  date: string;
  notes: string;
  target_amount?: number;
  target_date?: string;
}

interface Debt {
  id: number;
  name: string;
  original_amount: number;
  current_balance: number;
  monthly_payment: number;
  interest_rate?: number;
  due_date: string;
  notes: string;
}

interface Subscription {
  id: number;
  name: string;
  amount: number;
  billing_date: string;
  category: string;
  payment_method: string;
  status: 'active' | 'cancelled';
  notes: string;
}

interface DemoContextType {
  period: string;
  setPeriod: (period: string) => void;
  incomes: Income[];
  expenses: Expense[];
  savings: Saving[];
  debts: Debt[];
  subscriptions: Subscription[];
  addIncome: (income: Omit<Income, 'id'>) => void;
  addExpense: (expense: Omit<Expense, 'id'>) => void;
  addSaving: (saving: Omit<Saving, 'id'>) => void;
  deleteIncome: (id: number) => void;
  deleteExpense: (id: number) => void;
  deleteSaving: (id: number) => void;
  currency: string;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

const mockIncomes: Income[] = [
  { id: 1, source: 'Salary', amount: 5000, date: '2026-05-01', notes: 'Monthly salary' },
  { id: 2, source: 'Freelance', amount: 800, date: '2026-05-15', notes: 'Web project' },
  { id: 3, source: 'Investment', amount: 250, date: '2026-05-20', notes: 'Dividend payment' },
];

const mockExpenses: Expense[] = [
  { id: 1, category: 'Housing', amount: 1200, date: '2026-05-01', payment_method: 'Bank Transfer', notes: 'Rent' },
  { id: 2, category: 'Food', amount: 450, date: '2026-05-05', payment_method: 'Credit Card', notes: 'Groceries' },
  { id: 3, category: 'Transportation', amount: 200, date: '2026-05-10', payment_method: 'Cash', notes: 'Gas' },
  { id: 4, category: 'Entertainment', amount: 150, date: '2026-05-12', payment_method: 'Credit Card', notes: 'Movies & dining' },
  { id: 5, category: 'Utilities', amount: 180, date: '2026-05-03', payment_method: 'Bank Transfer', notes: 'Electricity & water' },
  { id: 6, category: 'Healthcare', amount: 120, date: '2026-05-08', payment_method: 'Credit Card', notes: 'Doctor visit' },
];

const mockSavings: Saving[] = [
  { id: 1, type: 'Emergency Fund', amount: 500, date: '2026-05-01', notes: 'Monthly contribution', target_amount: 10000, target_date: '2026-12-31' },
  { id: 2, type: 'Vacation', amount: 300, date: '2026-05-01', notes: 'Summer trip fund', target_amount: 3000, target_date: '2026-08-01' },
  { id: 3, type: 'New Car', amount: 400, date: '2026-05-15', notes: 'Down payment savings', target_amount: 8000, target_date: '2027-06-30' },
];

const mockDebts: Debt[] = [
  { id: 1, name: 'Student Loan', original_amount: 25000, current_balance: 18500, monthly_payment: 350, interest_rate: 4.5, due_date: '2026-05-15', notes: 'Federal student loan' },
  { id: 2, name: 'Car Loan', original_amount: 15000, current_balance: 8200, monthly_payment: 280, interest_rate: 5.2, due_date: '2026-05-20', notes: 'Auto financing' },
  { id: 3, name: 'Credit Card', original_amount: 3000, current_balance: 1200, monthly_payment: 150, interest_rate: 18.9, due_date: '2026-05-25', notes: 'Chase Visa' },
];

const mockSubscriptions: Subscription[] = [
  { id: 1, name: 'Netflix', amount: 15.99, billing_date: '2026-05-05', category: 'Entertainment', payment_method: 'Credit Card', status: 'active', notes: 'Premium plan' },
  { id: 2, name: 'Spotify', amount: 9.99, billing_date: '2026-05-12', category: 'Entertainment', payment_method: 'Credit Card', status: 'active', notes: 'Individual plan' },
  { id: 3, name: 'Gym Membership', amount: 45, billing_date: '2026-05-01', category: 'Health', payment_method: 'Bank Transfer', status: 'active', notes: 'Annual contract' },
  { id: 4, name: 'Cloud Storage', amount: 9.99, billing_date: '2026-05-18', category: 'Technology', payment_method: 'Credit Card', status: 'active', notes: 'Google One 2TB' },
];

export function DemoProvider({ children }: { children: ReactNode }) {
  const [period, setPeriod] = useState('2026-05');
  const [incomes, setIncomes] = useState<Income[]>(mockIncomes);
  const [expenses, setExpenses] = useState<Expense[]>(mockExpenses);
  const [savings, setSavings] = useState<Saving[]>(mockSavings);
  const [debts] = useState<Debt[]>(mockDebts);
  const [subscriptions] = useState<Subscription[]>(mockSubscriptions);

  const addIncome = (income: Omit<Income, 'id'>) => {
    setIncomes([...incomes, { ...income, id: Date.now() }]);
  };

  const addExpense = (expense: Omit<Expense, 'id'>) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const addSaving = (saving: Omit<Saving, 'id'>) => {
    setSavings([...savings, { ...saving, id: Date.now() }]);
  };

  const deleteIncome = (id: number) => {
    setIncomes(incomes.filter(item => item.id !== id));
  };

  const deleteExpense = (id: number) => {
    setExpenses(expenses.filter(item => item.id !== id));
  };

  const deleteSaving = (id: number) => {
    setSavings(savings.filter(item => item.id !== id));
  };

  return (
    <DemoContext.Provider
      value={{
        period,
        setPeriod,
        incomes,
        expenses,
        savings,
        debts,
        subscriptions,
        addIncome,
        addExpense,
        addSaving,
        deleteIncome,
        deleteExpense,
        deleteSaving,
        currency: 'USD',
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
