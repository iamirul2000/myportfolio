'use client';

import { useDemoContext } from '../context/DemoContext';
import { AlertCircle, TrendingDown } from 'lucide-react';

export default function DemoDebts() {
  const { debts, currency } = useDemoContext();

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const totalDebt = debts.reduce((sum, debt) => sum + debt.current_balance, 0);
  const totalMonthlyPayment = debts.reduce((sum, debt) => sum + debt.monthly_payment, 0);

  const calculatePayoffMonths = (balance: number, payment: number, rate: number = 0) => {
    if (payment <= 0) return 0;
    if (rate === 0) return Math.ceil(balance / payment);
    
    const monthlyRate = rate / 100 / 12;
    const months = Math.log(payment / (payment - balance * monthlyRate)) / Math.log(1 + monthlyRate);
    return Math.ceil(months);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Debt Tracker</h1>
          <p className="text-gray-600">Monitor and manage your debts</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="text-red-600" size={24} />
            <p className="text-sm font-semibold text-red-700">Total Debt Remaining</p>
          </div>
          <p className="text-3xl font-bold text-red-900">{formatMoney(totalDebt)}</p>
          <p className="text-sm text-red-600 mt-1">{debts.length} active debts</p>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <TrendingDown className="text-orange-600" size={24} />
            <p className="text-sm font-semibold text-orange-700">Monthly Payments</p>
          </div>
          <p className="text-3xl font-bold text-orange-900">{formatMoney(totalMonthlyPayment)}</p>
          <p className="text-sm text-orange-600 mt-1">Total monthly obligation</p>
        </div>
      </div>

      {/* Debt Cards */}
      <div className="space-y-4">
        {debts.map((debt) => {
          const progress = ((debt.original_amount - debt.current_balance) / debt.original_amount) * 100;
          const payoffMonths = calculatePayoffMonths(debt.current_balance, debt.monthly_payment, debt.interest_rate);
          const payoffDate = new Date();
          payoffDate.setMonth(payoffDate.getMonth() + payoffMonths);

          return (
            <div key={debt.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{debt.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{debt.notes}</p>
                </div>
                {debt.interest_rate && (
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {debt.interest_rate}% APR
                  </span>
                )}
              </div>

              <div className="grid gap-4 md:grid-cols-3 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Original Amount</p>
                  <p className="text-lg font-bold text-gray-900">{formatMoney(debt.original_amount)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Current Balance</p>
                  <p className="text-lg font-bold text-red-600">{formatMoney(debt.current_balance)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Monthly Payment</p>
                  <p className="text-lg font-bold text-orange-600">{formatMoney(debt.monthly_payment)}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Payoff Progress</span>
                  <span className="font-semibold text-teal-600">{progress.toFixed(1)}% paid off</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-green-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-600">Next Payment Due</p>
                  <p className="font-semibold text-gray-900">{debt.due_date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Estimated Payoff</p>
                  <p className="font-semibold text-gray-900">
                    {payoffDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </p>
                  <p className="text-xs text-gray-500">{payoffMonths} months</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {debts.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
          <AlertCircle className="mx-auto text-gray-400 mb-4" size={48} />
          <p className="text-gray-500 text-lg">No debts tracked</p>
          <p className="text-gray-400 text-sm mt-2">Great job staying debt-free!</p>
        </div>
      )}
    </div>
  );
}
