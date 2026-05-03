'use client';

import { useDemoContext } from '../context/DemoContext';
import { Plus, Trash2, Target } from 'lucide-react';
import { useState } from 'react';

export default function DemoSavings() {
  const { savings, currency, period, addSaving, deleteSaving } = useDemoContext();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    amount: '',
    date: '',
    notes: '',
  });

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSaving({
      type: formData.type,
      amount: parseFloat(formData.amount),
      date: formData.date,
      notes: formData.notes,
    });
    setFormData({ type: '', amount: '', date: '', notes: '' });
    setShowForm(false);
  };

  const totalSavings = savings.reduce((sum, item) => sum + item.amount, 0);

  // Group savings by type and calculate totals
  const savingsByType = savings.reduce((acc, saving) => {
    if (!acc[saving.type]) {
      acc[saving.type] = {
        type: saving.type,
        total: 0,
        target_amount: saving.target_amount,
        target_date: saving.target_date,
        entries: [],
      };
    }
    acc[saving.type].total += saving.amount;
    acc[saving.type].entries.push(saving);
    return acc;
  }, {} as Record<string, any>);

  const savingsGoals = Object.values(savingsByType);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Savings</h1>
          <p className="text-gray-600">Track your savings goals for {period}</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Plus size={18} />
          Add Savings
        </button>
      </div>

      {/* Summary Card */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-6">
        <p className="text-sm font-semibold text-yellow-700">Total Savings</p>
        <p className="text-3xl font-bold text-yellow-900 mt-2">{formatMoney(totalSavings)}</p>
        <p className="text-sm text-yellow-600 mt-1">{savings.length} savings entries</p>
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Add New Savings</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Type
                </label>
                <select
                  required
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Select type</option>
                  <option value="Emergency Fund">Emergency Fund</option>
                  <option value="Vacation">Vacation</option>
                  <option value="New Car">New Car</option>
                  <option value="Home Down Payment">Home Down Payment</option>
                  <option value="Retirement">Retirement</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  required
                  step="0.01"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Notes
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Optional notes"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Save Entry
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Savings Goals */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Savings Goals</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {savingsGoals.map((goal) => {
            const progress = goal.target_amount ? (goal.total / goal.target_amount) * 100 : 0;
            const isComplete = progress >= 100;
            
            return (
              <div key={goal.type} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Target className="text-teal-600" size={20} />
                    <h3 className="font-bold text-gray-900">{goal.type}</h3>
                  </div>
                  {isComplete && (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                      Complete
                    </span>
                  )}
                </div>
                
                {goal.target_amount && (
                  <>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-semibold text-teal-600">{progress.toFixed(1)}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${isComplete ? 'bg-green-500' : 'bg-teal-500'}`}
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                      </div>
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saved:</span>
                        <span className="font-semibold">{formatMoney(goal.total)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Target:</span>
                        <span className="font-semibold">{formatMoney(goal.target_amount)}</span>
                      </div>
                      {goal.target_date && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Target Date:</span>
                          <span className="font-semibold">{goal.target_date}</span>
                        </div>
                      )}
                    </div>
                  </>
                )}
                
                {!goal.target_amount && (
                  <p className="text-2xl font-bold text-teal-600">{formatMoney(goal.total)}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Savings Entries */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Recent Entries</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Notes
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {savings.map((saving) => (
                <tr key={saving.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-semibold text-gray-900">{saving.type}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {saving.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="font-bold text-yellow-600">{formatMoney(saving.amount)}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {saving.notes}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => deleteSaving(saving.id)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {savings.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No savings entries found</p>
          </div>
        )}
      </div>
    </div>
  );
}
