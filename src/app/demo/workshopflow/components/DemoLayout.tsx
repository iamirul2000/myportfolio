'use client';

import { ReactNode } from 'react';
import { Home, Wrench, Users, UserCog, Package, Receipt } from 'lucide-react';

interface DemoLayoutProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  children: ReactNode;
}

export default function DemoLayout({ activeTab, onTabChange, children }: DemoLayoutProps) {
  const nav = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'jobs', label: 'Jobs', icon: Wrench },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'technicians', label: 'Technicians', icon: UserCog },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'billing', label: 'Billing', icon: Receipt },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="lg:w-64 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Wrench className="text-blue-600" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold">WorkshopFlow</h1>
                <p className="text-xs text-blue-200">Management System</p>
              </div>
            </div>
            <nav className="space-y-1">
              {nav.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => onTabChange(id)}
                  className={`w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    activeTab === id
                      ? 'bg-white text-blue-700'
                      : 'text-blue-100 hover:bg-blue-600'
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
