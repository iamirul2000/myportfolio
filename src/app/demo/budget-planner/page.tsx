'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { DemoProvider } from './context/DemoContext';
import DemoLayout from './components/DemoLayout';
import DemoDashboard from './components/DemoDashboard';
import DemoIncome from './components/DemoIncome';
import DemoExpenses from './components/DemoExpenses';
import DemoSavings from './components/DemoSavings';
import DemoDebts from './components/DemoDebts';
import DemoSubscriptions from './components/DemoSubscriptions';
import DemoSettings from './components/DemoSettings';

export default function BudgetPlannerDemo() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DemoDashboard />;
      case 'income':
        return <DemoIncome />;
      case 'expenses':
        return <DemoExpenses />;
      case 'savings':
        return <DemoSavings />;
      case 'debts':
        return <DemoDebts />;
      case 'subscriptions':
        return <DemoSubscriptions />;
      case 'settings':
        return <DemoSettings />;
      default:
        return <DemoDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo Banner */}
      <div className="bg-blue-600 text-white py-3 px-6">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="font-semibold">MoneyPlan Budget Planner - Interactive Demo</span>
          </div>
          <Link 
            href="/demo" 
            className="flex items-center gap-2 text-sm hover:text-blue-100 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Demos
          </Link>
        </div>
      </div>
      
      <DemoProvider>
        <DemoLayout activeTab={activeTab} onTabChange={setActiveTab}>
          {renderContent()}
        </DemoLayout>
      </DemoProvider>
    </div>
  );
}
