'use client';

import { useDemoContext } from '../context/DemoContext';
import { Wrench, Users, Package, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';

export default function DemoDashboard() {
  const { jobs, customers, technicians, inventory, invoices } = useDemoContext();

  const activeJobs = jobs.filter(j => j.status === 'in-progress').length;
  const pendingJobs = jobs.filter(j => j.status === 'pending').length;
  const completedJobs = jobs.filter(j => j.status === 'completed' || j.status === 'delivered').length;
  
  const totalRevenue = invoices.filter(i => i.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0);
  const pendingRevenue = invoices.filter(i => i.status === 'pending').reduce((sum, inv) => sum + inv.amount, 0);
  const overdueInvoices = invoices.filter(i => i.status === 'overdue').length;
  
  const lowStockItems = inventory.filter(item => item.quantity <= item.reorder_level);
  const availableTechs = technicians.filter(t => t.status === 'available').length;

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const recentJobs = jobs.slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Workshop overview and key metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Active Jobs"
          value={activeJobs.toString()}
          subtitle={`${pendingJobs} pending`}
          icon={Wrench}
          color="blue"
        />
        <StatCard
          title="Total Revenue"
          value={formatMoney(totalRevenue)}
          subtitle={`${formatMoney(pendingRevenue)} pending`}
          icon={DollarSign}
          color="green"
        />
        <StatCard
          title="Customers"
          value={customers.length.toString()}
          subtitle="Active customers"
          icon={Users}
          color="purple"
        />
        <StatCard
          title="Available Techs"
          value={availableTechs.toString()}
          subtitle={`of ${technicians.length} total`}
          icon={TrendingUp}
          color="orange"
        />
      </div>

      {/* Alerts */}
      {(overdueInvoices > 0 || lowStockItems.length > 0) && (
        <div className="grid gap-4 md:grid-cols-2">
          {overdueInvoices > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-bold text-red-900">Overdue Invoices</h3>
                  <p className="text-sm text-red-800 mt-1">
                    {overdueInvoices} invoice{overdueInvoices > 1 ? 's' : ''} overdue. Follow up with customers.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {lowStockItems.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Package className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-bold text-amber-900">Low Stock Alert</h3>
                  <p className="text-sm text-amber-800 mt-1">
                    {lowStockItems.length} item{lowStockItems.length > 1 ? 's' : ''} below reorder level. Check inventory.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Recent Jobs */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Recent Jobs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Job #</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Vehicle</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Technician</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Est. Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentJobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-semibold text-blue-600">{job.job_number}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {job.customer_name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {job.vehicle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={job.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {job.technician}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right font-semibold text-gray-900">
                    {formatMoney(job.estimated_cost)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-sm font-semibold text-gray-500">Completion Rate</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {((completedJobs / jobs.length) * 100).toFixed(1)}%
          </p>
          <p className="text-sm text-gray-600 mt-1">{completedJobs} of {jobs.length} jobs</p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-sm font-semibold text-gray-500">Avg. Job Value</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {formatMoney(jobs.reduce((sum, j) => sum + j.estimated_cost, 0) / jobs.length)}
          </p>
          <p className="text-sm text-gray-600 mt-1">Across all jobs</p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-sm font-semibold text-gray-500">Inventory Value</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {formatMoney(inventory.reduce((sum, item) => sum + (item.quantity * item.unit_price), 0))}
          </p>
          <p className="text-sm text-gray-600 mt-1">{inventory.length} items in stock</p>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ElementType;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

function StatCard({ title, value, subtitle, icon: Icon, color }: StatCardProps) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    green: 'bg-green-50 text-green-600 border-green-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
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
      <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const statusConfig = {
    'pending': 'bg-yellow-100 text-yellow-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    'completed': 'bg-green-100 text-green-800',
    'delivered': 'bg-gray-100 text-gray-800',
  };

  return (
    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusConfig[status as keyof typeof statusConfig]}`}>
      {status.replace('-', ' ')}
    </span>
  );
}
