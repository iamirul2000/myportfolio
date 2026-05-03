'use client';

import { useDemoContext } from '../context/DemoContext';
import { Receipt, DollarSign, AlertCircle, CheckCircle } from 'lucide-react';

export default function DemoBilling() {
  const { invoices } = useDemoContext();

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const paidInvoices = invoices.filter(i => i.status === 'paid');
  const pendingInvoices = invoices.filter(i => i.status === 'pending');
  const overdueInvoices = invoices.filter(i => i.status === 'overdue');

  const totalPaid = paidInvoices.reduce((sum, inv) => sum + inv.amount, 0);
  const totalPending = pendingInvoices.reduce((sum, inv) => sum + inv.amount, 0);
  const totalOverdue = overdueInvoices.reduce((sum, inv) => sum + inv.amount, 0);

  const getStatusBadge = (status: string) => {
    const config = {
      'paid': { class: 'bg-green-100 text-green-800', icon: CheckCircle },
      'pending': { class: 'bg-yellow-100 text-yellow-800', icon: Receipt },
      'overdue': { class: 'bg-red-100 text-red-800', icon: AlertCircle },
    };
    return config[status as keyof typeof config];
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Billing & Invoices</h1>
        <p className="text-gray-600">Manage payments and invoices</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="text-green-600" size={20} />
            <p className="text-sm font-semibold text-green-700">Paid</p>
          </div>
          <p className="text-2xl font-bold text-green-900">{formatMoney(totalPaid)}</p>
          <p className="text-sm text-green-600 mt-1">{paidInvoices.length} invoices</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="text-yellow-600" size={20} />
            <p className="text-sm font-semibold text-yellow-700">Pending</p>
          </div>
          <p className="text-2xl font-bold text-yellow-900">{formatMoney(totalPending)}</p>
          <p className="text-sm text-yellow-600 mt-1">{pendingInvoices.length} invoices</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="text-red-600" size={20} />
            <p className="text-sm font-semibold text-red-700">Overdue</p>
          </div>
          <p className="text-2xl font-bold text-red-900">{formatMoney(totalOverdue)}</p>
          <p className="text-sm text-red-600 mt-1">{overdueInvoices.length} invoices</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Invoice #</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Job #</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Due Date</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Amount</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {invoices.map((invoice) => {
                const statusConfig = getStatusBadge(invoice.status);
                const StatusIcon = statusConfig.icon;
                
                return (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="font-semibold text-blue-600">{invoice.invoice_number}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-semibold text-gray-900">
                      {invoice.customer_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {invoice.job_number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {invoice.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {invoice.due_date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right font-bold text-gray-900">
                      {formatMoney(invoice.amount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full ${statusConfig.class}`}>
                        <StatusIcon size={14} />
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
