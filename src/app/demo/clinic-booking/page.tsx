'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Users, 
  UserCog, 
  Stethoscope, 
  BarChart3, 
  Settings,
  LayoutDashboard,
  ArrowLeft,
  Bell,
  Search,
  User
} from 'lucide-react';
import { DemoProvider } from './context/DemoContext';
import AppointmentsManager from './components/AppointmentsManager';
import PatientsManager from './components/PatientsManager';
import DoctorsManager from './components/DoctorsManager';
import ServicesManager from './components/ServicesManager';

export default function ClinicBookingDemo() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'doctors', label: 'Doctors', icon: UserCog },
    { id: 'services', label: 'Services', icon: Stethoscope },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'appointments':
        return <AppointmentsManager />;
      case 'patients':
        return <PatientsManager />;
      case 'doctors':
        return <DoctorsManager />;
      case 'services':
        return <ServicesManager />;
      case 'reports':
        return <ReportsContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <DemoProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Demo Banner */}
        <div className="bg-teal-600 text-white py-3 px-6">
          <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold">Clinic Booking - Interactive Demo</span>
            </div>
            <Link 
              href="/demo" 
              className="flex items-center gap-2 text-sm hover:text-teal-100 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Demos
            </Link>
          </div>
        </div>

        <div className="flex h-[calc(100vh-52px)]">
              {/* Sidebar */}
              <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
                <div className="p-6 border-b border-slate-200">
                  <h2 className="text-xl font-bold text-slate-900">Clinic Booking</h2>
                  <p className="text-sm text-slate-500 mt-1">Admin Dashboard</p>
                </div>
                
                <nav className="flex-1 p-4 space-y-1">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-teal-50 text-teal-700'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        {item.label}
                      </button>
                    );
                  })}
                </nav>

                <div className="p-4 border-t border-slate-200">
                  <div className="flex items-center gap-3 px-4 py-3">
                    <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                      <User className="h-4 w-4 text-teal-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900">Admin User</p>
                      <p className="text-xs text-slate-500">admin@clinic.com</p>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <main className="flex-1 overflow-auto">
                {/* Top Bar */}
                <header className="bg-white border-b border-slate-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-2xl font-bold text-slate-900">
                        {navItems.find(item => item.id === activeTab)?.label}
                      </h1>
                      <p className="text-sm text-slate-500 mt-1">
                        {activeTab === 'dashboard' && "Today's clinic overview"}
                        {activeTab === 'appointments' && "Manage patient appointments"}
                        {activeTab === 'patients' && "Patient records and history"}
                        {activeTab === 'doctors' && "Doctor profiles and schedules"}
                        {activeTab === 'services' && "Clinic services catalog"}
                        {activeTab === 'reports' && "Analytics and insights"}
                        {activeTab === 'settings' && "System configuration"}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <Search className="h-5 w-5 text-slate-600" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative">
                        <Bell className="h-5 w-5 text-slate-600" />
                        <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                      </button>
                    </div>
                  </div>
                </header>

                {/* Content Area */}
                <div className="p-6">
                  {renderContent()}
                </div>
              </main>
            </div>
          </div>
    </DemoProvider>
  );
}

// Dashboard Content
function DashboardContent() {
  const kpiCards = [
    { label: "Today's Appointments", value: "12", subtext: "4 pending confirmation", color: "teal" },
    { label: "Pending Requests", value: "4", subtext: "Awaiting confirmation", color: "amber" },
    { label: "Confirmed Today", value: "8", subtext: "Ready for service", color: "green" },
    { label: "Available Doctors", value: "5", subtext: "On duty today", color: "blue" },
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg border border-slate-200 p-6">
            <p className="text-sm font-medium text-slate-600">{card.label}</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{card.value}</p>
            <p className="text-xs text-slate-500 mt-1">{card.subtext}</p>
          </div>
        ))}
      </div>

      {/* Today's Schedule & Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Today's Schedule</h3>
          <div className="space-y-3">
            {[
              { time: "09:00 AM", patient: "Ahmad bin Ali", service: "General Checkup", doctor: "Dr. Sarah", status: "confirmed" },
              { time: "10:00 AM", patient: "Siti Nurhaliza", service: "Vaccination", doctor: "Dr. Kumar", status: "pending" },
              { time: "11:00 AM", patient: "Lee Wei Ming", service: "Blood Test", doctor: "Dr. Sarah", status: "confirmed" },
            ].map((apt, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                <div className="text-sm font-medium text-slate-600 w-20">{apt.time}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900">{apt.patient}</p>
                  <p className="text-xs text-slate-500">{apt.service} • {apt.doctor}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  apt.status === 'confirmed' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {apt.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Appointment Status</h3>
          <div className="space-y-4">
            {[
              { status: "Confirmed", count: 8, color: "bg-green-500" },
              { status: "Pending", count: 4, color: "bg-amber-500" },
              { status: "Completed", count: 15, color: "bg-blue-500" },
              { status: "Cancelled", count: 2, color: "bg-red-500" },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">{item.status}</span>
                  <span className="text-sm font-bold text-slate-900">{item.count}</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color}`} style={{ width: `${(item.count / 29) * 100}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Appointments Table */}
      <div className="bg-white rounded-lg border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Recent Appointments</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left text-xs font-semibold text-slate-600 pb-3">Patient</th>
                <th className="text-left text-xs font-semibold text-slate-600 pb-3">Service</th>
                <th className="text-left text-xs font-semibold text-slate-600 pb-3">Doctor</th>
                <th className="text-left text-xs font-semibold text-slate-600 pb-3">Date & Time</th>
                <th className="text-left text-xs font-semibold text-slate-600 pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { patient: "Ahmad bin Ali", service: "General Checkup", doctor: "Dr. Sarah", datetime: "Today, 09:00 AM", status: "confirmed" },
                { patient: "Siti Nurhaliza", service: "Vaccination", doctor: "Dr. Kumar", datetime: "Today, 10:00 AM", status: "pending" },
                { patient: "Lee Wei Ming", service: "Blood Test", doctor: "Dr. Sarah", datetime: "Today, 11:00 AM", status: "confirmed" },
              ].map((row, index) => (
                <tr key={index} className="border-b border-slate-100">
                  <td className="py-3 text-sm text-slate-900">{row.patient}</td>
                  <td className="py-3 text-sm text-slate-600">{row.service}</td>
                  <td className="py-3 text-sm text-slate-600">{row.doctor}</td>
                  <td className="py-3 text-sm text-slate-600">{row.datetime}</td>
                  <td className="py-3">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      row.status === 'confirmed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-amber-100 text-amber-700'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Placeholder content components
function ReportsContent() {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-8 text-center">
      <BarChart3 className="h-12 w-12 text-slate-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-slate-900 mb-2">Reports & Analytics</h3>
      <p className="text-slate-600">Analytics and reporting features coming soon in this demo.</p>
    </div>
  );
}

function SettingsContent() {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-8 text-center">
      <Settings className="h-12 w-12 text-slate-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-slate-900 mb-2">System Settings</h3>
      <p className="text-slate-600">Configuration and settings features coming soon in this demo.</p>
    </div>
  );
}
