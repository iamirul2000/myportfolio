'use client';

import { useDemoContext } from '../context/DemoContext';
import { Package, AlertTriangle } from 'lucide-react';

export default function DemoInventory() {
  const { inventory } = useDemoContext();

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const lowStockItems = inventory.filter(item => item.quantity <= item.reorder_level);
  const totalValue = inventory.reduce((sum, item) => sum + (item.quantity * item.unit_price), 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Inventory</h1>
        <p className="text-gray-600">Manage parts and supplies</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-2">
            <Package className="text-blue-600" size={20} />
            <p className="text-sm font-semibold text-blue-700">Total Items</p>
          </div>
          <p className="text-2xl font-bold text-blue-900">{inventory.length}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
          <p className="text-sm font-semibold text-green-700 mb-2">Total Value</p>
          <p className="text-2xl font-bold text-green-900">{formatMoney(totalValue)}</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="text-amber-600" size={20} />
            <p className="text-sm font-semibold text-amber-700">Low Stock</p>
          </div>
          <p className="text-2xl font-bold text-amber-900">{lowStockItems.length}</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Item</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Category</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase">Quantity</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Unit Price</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-700 uppercase">Total Value</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Supplier</th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {inventory.map((item) => {
                const isLowStock = item.quantity <= item.reorder_level;
                return (
                  <tr key={item.id} className={`hover:bg-gray-50 ${isLowStock ? 'bg-amber-50' : ''}`}>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-gray-900">{item.name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`font-bold ${isLowStock ? 'text-amber-600' : 'text-gray-900'}`}>
                        {item.quantity}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-900">
                      {formatMoney(item.unit_price)}
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-gray-900">
                      {formatMoney(item.quantity * item.unit_price)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {item.supplier}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {isLowStock ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700">
                          <AlertTriangle size={14} />
                          Low Stock
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-green-700">In Stock</span>
                      )}
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
