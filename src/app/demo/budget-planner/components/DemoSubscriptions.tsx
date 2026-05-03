'use client';

import { useDemoContext } from '../context/DemoContext';
import { Calendar, CreditCard, CheckCircle, XCircle } from 'lucide-react';

export default function DemoSubscriptions() {
  const { subscriptions, currency, period } = useDemoContext();

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active');
  const totalMonthly = activeSubscriptions.reduce((sum, sub) => sum + sub.amount, 0);
  const totalYearly = totalMonthly * 12;

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Entertainment': 'bg-purple-100 text-purple-800',
      'Health': 'bg-green-100 text-green-800',
      'Technology': 'bg-blue-100 text-blue-800',
      'Education': 'bg-yellow-100 text-yellow-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const isDueSoon = (billingDate: string) => {
    const today = new Date();
    const billing = new Date(billingDate);
    const daysUntil = Math.ceil((billing.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntil >= 0 && daysUntil <= 7;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Subscriptions</h1>
          <p className="text-gray-600">Manage your recurring subscriptions</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
          <p className="text-sm font-semibold text-purple-700">Monthly Total</p>
          <p className="text-3xl font-bold text-purple-900 mt-2">{formatMoney(totalMonthly)}</p>
          <p className="text-sm text-purple-600 mt-1">{activeSubscriptions.length} active</p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
          <p className="text-sm font-semibold text-blue-700">Yearly Total</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">{formatMoney(totalYearly)}</p>
          <p className="text-sm text-blue-600 mt-1">Annual cost</p>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6">
          <p className="text-sm font-semibold text-amber-700">Due Soon</p>
          <p className="text-3xl font-bold text-amber-900 mt-2">
            {activeSubscriptions.filter(sub => isDueSoon(sub.billing_date)).length}
          </p>
          <p className="text-sm text-amber-600 mt-1">Next 7 days</p>
        </div>
      </div>

      {/* Subscriptions List */}
      <div className="space-y-3">
        {subscriptions.map((subscription) => {
          const dueSoon = isDueSoon(subscription.billing_date);
          
          return (
            <div
              key={subscription.id}
              className={`bg-white border rounded-lg p-5 transition-all ${
                dueSoon ? 'border-amber-300 bg-amber-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{subscription.name}</h3>
                    {subscription.status === 'active' ? (
                      <span className="flex items-center gap-1 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                        <CheckCircle size={12} />
                        Active
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
                        <XCircle size={12} />
                        Cancelled
                      </span>
                    )}
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getCategoryColor(subscription.category)}`}>
                      {subscription.category}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{subscription.notes}</p>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-gray-400" size={16} />
                      <span className="text-gray-600">
                        Billing: <span className="font-semibold text-gray-900">{subscription.billing_date}</span>
                      </span>
                      {dueSoon && (
                        <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                          Due Soon
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="text-gray-400" size={16} />
                      <span className="text-gray-600">
                        {subscription.payment_method}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right ml-4">
                  <p className="text-2xl font-bold text-purple-600">{formatMoney(subscription.amount)}</p>
                  <p className="text-xs text-gray-500 mt-1">per month</p>
                  <p className="text-sm text-gray-600 mt-2">{formatMoney(subscription.amount * 12)}/year</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {subscriptions.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
          <Calendar className="mx-auto text-gray-400 mb-4" size={48} />
          <p className="text-gray-500 text-lg">No subscriptions tracked</p>
          <p className="text-gray-400 text-sm mt-2">Add your recurring subscriptions to track spending</p>
        </div>
      )}

      {/* Insights */}
      {activeSubscriptions.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-3">💡 Subscription Insights</h3>
          <div className="space-y-2 text-sm text-blue-800">
            <p>• Your subscriptions cost {formatMoney(totalMonthly)} per month ({formatMoney(totalYearly)} annually)</p>
            <p>• That's {((totalMonthly / 5800) * 100).toFixed(1)}% of your monthly income</p>
            {activeSubscriptions.filter(sub => isDueSoon(sub.billing_date)).length > 0 && (
              <p>• You have {activeSubscriptions.filter(sub => isDueSoon(sub.billing_date)).length} subscription(s) billing in the next 7 days</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
