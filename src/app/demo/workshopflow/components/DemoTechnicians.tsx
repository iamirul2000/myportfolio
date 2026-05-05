'use client';

import { useDemoContext } from '../context/DemoContext';
import { UserCog, Star, Wrench } from 'lucide-react';

export default function DemoTechnicians() {
  const { technicians } = useDemoContext();

  const getStatusBadge = (status: string) => {
    const config = {
      'available': 'bg-green-100 text-green-800',
      'busy': 'bg-blue-100 text-blue-800',
      'off-duty': 'bg-gray-100 text-gray-800',
    };
    return config[status as keyof typeof config];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Technicians</h1>
          <p className="text-gray-600">Manage workshop technicians and assignments</p>
        </div>
        <button 
          onClick={() => alert('Add Technician functionality - This is a demo. In production, this would open a form to create a new technician.')}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <UserCog size={18} />
          Add Technician
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
          <p className="text-sm font-semibold text-green-700">Available</p>
          <p className="text-2xl font-bold text-green-900 mt-1">
            {technicians.filter(t => t.status === 'available').length}
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
          <p className="text-sm font-semibold text-blue-700">Busy</p>
          <p className="text-2xl font-bold text-blue-900 mt-1">
            {technicians.filter(t => t.status === 'busy').length}
          </p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
          <p className="text-sm font-semibold text-gray-700">Off Duty</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {technicians.filter(t => t.status === 'off-duty').length}
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {technicians.map((tech) => (
          <div key={tech.id} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <UserCog className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.specialty}</p>
                </div>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusBadge(tech.status)}`}>
                {tech.status.replace('-', ' ')}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Active Jobs</p>
                <p className="text-xl font-bold text-blue-600">{tech.active_jobs}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Completed</p>
                <p className="text-xl font-bold text-green-600">{tech.completed_jobs}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Rating</p>
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-500 fill-yellow-500" size={16} />
                  <p className="text-xl font-bold text-gray-900">{tech.rating}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Wrench size={16} />
                <span>Specializes in {tech.specialty}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
