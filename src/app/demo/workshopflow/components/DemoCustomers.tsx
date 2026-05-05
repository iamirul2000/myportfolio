'use client';

import { useDemoContext } from '../context/DemoContext';
import { Users, Mail, Phone, MapPin } from 'lucide-react';

export default function DemoCustomers() {
  const { customers } = useDemoContext();

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const totalSpent = customers.reduce((sum, c) => sum + c.total_spent, 0);
  const totalJobs = customers.reduce((sum, c) => sum + c.total_jobs, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
          <p className="text-gray-600">Manage customer information and history</p>
        </div>
        <button 
          onClick={() => alert('Add Customer functionality - This is a demo. In production, this would open a form to create a new customer.')}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Users size={18} />
          Add Customer
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-2">
            <Users className="text-purple-600" size={20} />
            <p className="text-sm font-semibold text-purple-700">Total Customers</p>
          </div>
          <p className="text-2xl font-bold text-purple-900">{customers.length}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
          <p className="text-sm font-semibold text-green-700 mb-2">Total Revenue</p>
          <p className="text-2xl font-bold text-green-900">{formatMoney(totalSpent)}</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
          <p className="text-sm font-semibold text-blue-700 mb-2">Total Jobs</p>
          <p className="text-2xl font-bold text-blue-900">{totalJobs}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{customer.name}</h3>
            
            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <span>{customer.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={16} />
                <span>{customer.phone}</span>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>{customer.address}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500">Total Jobs</p>
                <p className="text-lg font-bold text-gray-900">{customer.total_jobs}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Spent</p>
                <p className="text-lg font-bold text-green-600">{formatMoney(customer.total_spent)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
