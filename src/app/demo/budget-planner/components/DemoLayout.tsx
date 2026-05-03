'use client';

import { ReactNode } from 'react';
import { Home, Wallet, CreditCard, PiggyBank, ReceiptText, Settings } from 'lucide-react';

interface DemoLayoutProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  children: ReactNode;
}

export default function DemoLayout({ activeTab, onTabChange, children }: DemoLayoutProps) {
  const nav = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'income', label: 'Income', icon: Wallet },
    { id: 'expenses', label: 'Expenses', icon: CreditCard },
    { id: 'savings', label: 'Savings', icon: PiggyBank },
    { id: 'debts', label: 'Debts', icon: ReceiptText },
    { id: 'subscriptions', label: 'Subscriptions', icon: ReceiptText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="lg:w-64 bg-gradient-to-b from-teal-600 to-teal-700 text-white">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Wallet className="text-teal-600" size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-200">
                  Monthly
                </p>
                <h1 className="text-xl font-bold">Budget Planner</h1>
              </div>
            </div>
            <nav className="space-y-1">
              {nav.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => onTabChange(id)}
                  className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    activeTab === id
                      ? 'bg-white text-teal-700'
                      : 'text-teal-100 hover:bg-teal-600'
                  }`}
                >
                  <Icon size={18} />
                  {label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8 min-h-[800px] max-h-[1200px] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
