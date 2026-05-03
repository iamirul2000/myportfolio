'use client';

import { Settings as SettingsIcon, DollarSign, Tag, PiggyBank } from 'lucide-react';

export default function DemoSettings() {
  const incomeCategories = ['Salary', 'Freelance', 'Investment', 'Business', 'Other'];
  const expenseCategories = ['Housing', 'Food', 'Transportation', 'Entertainment', 'Utilities', 'Healthcare'];
  const savingsTypes = ['Emergency Fund', 'Vacation', 'New Car', 'Home Down Payment', 'Retirement'];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your budget planner preferences</p>
      </div>

      {/* Currency Settings */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-teal-100 rounded-lg">
            <DollarSign className="text-teal-600" size={20} />
          </div>
          <h2 className="text-lg font-bold text-gray-900">Currency</h2>
        </div>
        <div className="max-w-md">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Default Currency
          </label>
          <select
            disabled
            value="USD"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
          >
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
            <option value="MYR">MYR - Malaysian Ringgit</option>
          </select>
          <p className="text-xs text-gray-500 mt-2">Currency setting is view-only in demo mode</p>
        </div>
      </div>

      {/* Income Sources */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <Tag className="text-green-600" size={20} />
          </div>
          <h2 className="text-lg font-bold text-gray-900">Income Sources</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {incomeCategories.map((category) => (
            <span
              key={category}
              className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 px-3 py-2 rounded-lg text-sm font-semibold"
            >
              {category}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3">Income sources are predefined in demo mode</p>
      </div>

      {/* Expense Categories */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-red-100 rounded-lg">
            <Tag className="text-red-600" size={20} />
          </div>
          <h2 className="text-lg font-bold text-gray-900">Expense Categories</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {expenseCategories.map((category) => (
            <span
              key={category}
              className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-800 px-3 py-2 rounded-lg text-sm font-semibold"
            >
              {category}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3">Expense categories are predefined in demo mode</p>
      </div>

      {/* Savings Types */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-yellow-100 rounded-lg">
            <PiggyBank className="text-yellow-600" size={20} />
          </div>
          <h2 className="text-lg font-bold text-gray-900">Savings Types</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {savingsTypes.map((type) => (
            <span
              key={type}
              className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-800 px-3 py-2 rounded-lg text-sm font-semibold"
            >
              {type}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3">Savings types are predefined in demo mode</p>
      </div>

      {/* Demo Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <SettingsIcon className="text-blue-600 flex-shrink-0 mt-1" size={20} />
          <div>
            <h3 className="font-bold text-blue-900 mb-2">Demo Mode</h3>
            <p className="text-sm text-blue-800">
              This is a demonstration version of MoneyPlan Budget Planner. In the full version, you can:
            </p>
            <ul className="text-sm text-blue-800 mt-2 space-y-1 list-disc list-inside">
              <li>Customize currency and formatting preferences</li>
              <li>Add, edit, and delete income sources</li>
              <li>Manage expense categories with budget limits</li>
              <li>Create custom savings goals with target amounts</li>
              <li>Set up recurring transactions</li>
              <li>Export data to CSV and PDF</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
