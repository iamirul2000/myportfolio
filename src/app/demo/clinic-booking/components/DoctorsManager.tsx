'use client';

import { useState } from 'react';
import { Plus, Edit2, Trash2, X, Check } from 'lucide-react';
import { useDemoContext, Doctor } from '../context/DemoContext';

export default function DoctorsManager() {
  const { doctors, addDoctor, updateDoctor, deleteDoctor } = useDemoContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<Doctor | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    qualifications: '',
    languages: [] as string[],
    bio: '',
    photo: '/images/doctor-placeholder.jpg',
    status: 'active' as 'active' | 'inactive' | 'on-leave',
    publiclyVisible: true,
    workingDays: [] as string[],
    workingHours: '09:00 - 17:00'
  });

  const openAddModal = () => {
    setEditingDoctor(null);
    setFormData({
      name: '',
      specialty: '',
      qualifications: '',
      languages: [],
      bio: '',
      photo: '/images/doctor-placeholder.jpg',
      status: 'active',
      publiclyVisible: true,
      workingDays: [],
      workingHours: '09:00 - 17:00'
    });
    setIsModalOpen(true);
  };

  const openEditModal = (doctor: Doctor) => {
    setEditingDoctor(doctor);
    setFormData({
      name: doctor.name,
      specialty: doctor.specialty,
      qualifications: doctor.qualifications,
      languages: doctor.languages,
      bio: doctor.bio,
      photo: doctor.photo,
      status: doctor.status,
      publiclyVisible: doctor.publiclyVisible,
      workingDays: doctor.workingDays,
      workingHours: doctor.workingHours
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingDoctor) {
      updateDoctor(editingDoctor.id, formData);
    } else {
      addDoctor(formData);
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this doctor?')) {
      deleteDoctor(id);
    }
  };

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const languageOptions = ['English', 'Malay', 'Mandarin', 'Tamil', 'Cantonese'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Doctors</h2>
          <p className="text-sm text-slate-600 mt-1">Manage doctor profiles</p>
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Doctor
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-slate-900">{doctor.name}</h3>
                <p className="text-sm text-slate-600">{doctor.specialty}</p>
                <p className="text-xs text-slate-500 mt-1">{doctor.qualifications}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                doctor.status === 'active' ? 'bg-green-100 text-green-700' :
                doctor.status === 'on-leave' ? 'bg-amber-100 text-amber-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {doctor.status}
              </span>
            </div>
            
            <div className="space-y-2 text-sm text-slate-600 mb-4">
              <div><strong>Languages:</strong> {doctor.languages.join(', ')}</div>
              <div><strong>Working Days:</strong> {doctor.workingDays.join(', ')}</div>
              <div><strong>Hours:</strong> {doctor.workingHours}</div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => openEditModal(doctor)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Edit2 className="h-4 w-4" />
                Edit
              </button>
              <button
                onClick={() => handleDelete(doctor.id)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">
                {editingDoctor ? 'Edit Doctor' : 'New Doctor'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Specialty</label>
                  <input
                    type="text"
                    required
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Qualifications</label>
                  <input
                    type="text"
                    required
                    value={formData.qualifications}
                    onChange={(e) => setFormData({ ...formData, qualifications: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
                  <select
                    required
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="on-leave">On Leave</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Bio</label>
                <textarea
                  required
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Languages</label>
                <div className="flex flex-wrap gap-2">
                  {languageOptions.map(lang => (
                    <label key={lang} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.languages.includes(lang)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({ ...formData, languages: [...formData.languages, lang] });
                          } else {
                            setFormData({ ...formData, languages: formData.languages.filter(l => l !== lang) });
                          }
                        }}
                        className="rounded border-slate-300"
                      />
                      <span className="text-sm">{lang}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Working Days</label>
                <div className="flex flex-wrap gap-2">
                  {weekDays.map(day => (
                    <label key={day} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.workingDays.includes(day)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({ ...formData, workingDays: [...formData.workingDays, day] });
                          } else {
                            setFormData({ ...formData, workingDays: formData.workingDays.filter(d => d !== day) });
                          }
                        }}
                        className="rounded border-slate-300"
                      />
                      <span className="text-sm">{day}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Working Hours</label>
                <input
                  type="text"
                  required
                  value={formData.workingHours}
                  onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
                  placeholder="e.g., 09:00 - 17:00"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.publiclyVisible}
                  onChange={(e) => setFormData({ ...formData, publiclyVisible: e.target.checked })}
                  className="rounded border-slate-300"
                />
                <label className="text-sm text-slate-700">Show on public website</label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
                >
                  <Check className="h-4 w-4" />
                  {editingDoctor ? 'Update' : 'Create'} Doctor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
