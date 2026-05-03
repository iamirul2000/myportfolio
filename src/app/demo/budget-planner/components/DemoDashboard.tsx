'use client';

import { useDemoContext } from '../context/DemoContext';
import { TrendingUp, CreditCard, Wallet, PiggyBank } from 'lucide-react';

export default function DemoDashboard() {
  const { incomes, expenses, savings, currency, period } = useDemoContext();

  const totalIncome = incomes.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const totalSavings = savings.reduce((sum, item) => sum + item.amount, 0);
  const remaining = totalIncome - totalExpenses;
  const afterSavings = remaining - totalSavings;

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const expensesByCategory = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);

  const categoryData = Object.entries(expensesByCategory).map(([name, amount]) => ({
    name,
    amount,
    percentage: ((amount / totalExpenses) * 100).toFixed(1),
  }));

  const savingsRate = totalIncome > 0 ? ((totalSavings / totalIncome) * 100).toFixed(1) : '0.0';
  const expenseRatio = totalIncome > 0 ? ((totalExpenses / totalIncome) * 100).toFixed(1) : '0.0';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Your financial overview for {period}</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <SummaryCard
          title="Income"
          value={formatMoney(totalIncome)}
          icon={TrendingUp}
          color="green"
        />
        <SummaryCard
          title="Expenses"
          value={formatMoney(totalExpenses)}
          icon={CreditCard}
          color="red"
        />
        <SummaryCard
          title="Remaining"
          value={formatMoney(remaining)}
          icon={Wallet}
          color="blue"
        />
        <SummaryCard
          title="After Savings"
          value={formatMoney(afterSavings)}
          icon={Wallet}
          color="blue"
        />
        <SummaryCard
          title="Total Savings"
          value={formatMoney(totalSavings)}
          icon={PiggyBank}
          color="yellow"
        />
      </div>

      {/* Insights */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-sm font-semibold text-gray-500">Savings Rate</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">{savingsRate}%</p>
          <p className="mt-1 text-sm text-gray-600">of your income</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-sm font-semibold text-gray-500">Expense-to-Income</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">{expenseRatio}%</p>
          <p className="mt-1 text-sm text-gray-600">spending ratio</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-sm font-semibold text-gray-500">Biggest Category</p>
          <p className="mt-2 text-2xl font-bold text-gray-900">
            {categoryData[0]?.name || 'None'}
          </p>
          <p className="mt-1 text-sm text-gray-600">
            {categoryData[0] ? formatMoney(categoryData[0].amount) : '$0.00'}
          </p>
        </div>
      </div>

      {/* Expenses by Category */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Expenses by Category</h2>
        <div className="space-y-4">
          {categoryData.map((cat) => (
            <div key={cat.name}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">{cat.name}</span>
                <span className="text-sm text-gray-600">
                  {formatMoney(cat.amount)} ({cat.percentage}%)
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-500 rounded-full"
                  style={{ width: `${cat.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Smart Insights */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Smart Insights</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="bg-blue-50 border border-blue-200 rounded-md px-3 py-2 text-sm font-semibold text-blue-900">
            You saved {savingsRate}% of your income this month.
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-md px-3 py-2 text-sm font-semibold text-blue-900">
            {categoryData[0]?.name} is your largest expense category.
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-md px-3 py-2 text-sm font-semibold text-blue-900">
            You have {formatMoney(afterSavings)} left after savings.
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-md px-3 py-2 text-sm font-semibold text-blue-900">
            Your expenses are {expenseRatio}% of your income.
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Income</h2>
          <div className="space-y-3">
            {incomes.slice(0, 3).map((income) => (
              <div key={income.id} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-900">{income.source}</p>
                  <p className="text-xs text-gray-500">{income.date}</p>
                </div>
                <p className="font-bold text-green-600">{formatMoney(income.amount)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Expenses</h2>
          <div className="space-y-3">
            {expenses.slice(0, 3).map((expense) => (
              <div key={expense.id} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-900">{expense.category}</p>
                  <p className="text-xs text-gray-500">{expense.date}</p>
                </div>
                <p className="font-bold text-red-600">{formatMoney(expense.amount)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface SummaryCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  color: 'green' | 'red' | 'blue' | 'yellow';
}

function SummaryCard({ title, value, icon: Icon, color }: SummaryCardProps) {
  const colorClasses = {
    green: 'bg-green-50 text-green-600 border-green-200',
    red: 'bg-red-50 text-red-600 border-red-200',
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    yellow: 'bg-yellow-50 text-yellow-600 border-yellow-200',
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-gray-500">{title}</p>
        <div className={`p-2 rounded-lg border ${colorClasses[color]}`}>
          <Icon size={18} />
        </div>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}
