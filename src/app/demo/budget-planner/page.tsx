'use client';

import { useState } from 'react';
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
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 rounded-lg bg-blue-50 border border-blue-200 p-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            MoneyPlan Budget Planner - Interactive Demo
          </h1>
          <p className="text-gray-700">
            This is a fully interactive demo with sample data. Explore all sections using the sidebar navigation.
          </p>
        </div>
        
        <DemoProvider>
          <DemoLayout activeTab={activeTab} onTabChange={setActiveTab}>
            {renderContent()}
          </DemoLayout>
        </DemoProvider>
      </div>
    </div>
  );
}
