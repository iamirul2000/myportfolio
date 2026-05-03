'use client';

import { useState } from 'react';
import { DemoProvider } from './context/DemoContext';
import DemoLayout from './components/DemoLayout';
import DemoDashboard from './components/DemoDashboard';
import DemoJobs from './components/DemoJobs';
import DemoCustomers from './components/DemoCustomers';
import DemoTechnicians from './components/DemoTechnicians';
import DemoInventory from './components/DemoInventory';
import DemoBilling from './components/DemoBilling';

export default function WorkshopFlowDemo() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DemoDashboard />;
      case 'jobs':
        return <DemoJobs />;
      case 'customers':
        return <DemoCustomers />;
      case 'technicians':
        return <DemoTechnicians />;
      case 'inventory':
        return <DemoInventory />;
      case 'billing':
        return <DemoBilling />;
      default:
        return <DemoDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 rounded-lg bg-blue-50 border border-blue-200 p-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            WorkshopFlow - Interactive Demo
          </h1>
          <p className="text-gray-700">
            Explore this workshop management system demo. Navigate through jobs, customers, technicians, inventory, and billing.
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
