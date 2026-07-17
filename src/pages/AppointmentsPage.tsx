import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Calendar, Video, Clock, Stethoscope, MapPin } from 'lucide-react';

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState<'offline' | 'online'>('offline');

  const upcomingAppointments = [
    { type: 'Physical ANC Visit', doctor: 'Dr. Priya Sharma', date: '25 Oct 2026', time: '10:00 AM', location: 'Rampur PHC' },
    { type: 'eSanjeevani Consult', doctor: 'Dr. Rakesh Kumar', date: '28 Oct 2026', time: '02:30 PM', location: 'Online Video' },
  ];

  return (
    <Layout show3D variant3D="minimal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
            <Calendar className="w-8 h-8" />
          </div>
          <h1 className="section-title mb-4">Doctor Appointments</h1>
          <p className="text-gray-600 text-lg">Book physical visits at your local PHC or consult doctors online via video.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="flex bg-gray-100 p-1 rounded-2xl">
              <button 
                onClick={() => setActiveTab('offline')}
                className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${activeTab === 'offline' ? 'bg-white shadow-sm text-purple-700' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Offline PHC Visit
              </button>
              <button 
                onClick={() => setActiveTab('online')}
                className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === 'online' ? 'bg-white shadow-sm text-purple-700' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Video className="w-4 h-4" /> eSanjeevani Consult
              </button>
            </div>

            {/* Booking Form */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card border border-gray-200"
            >
              <h2 className="font-display font-bold text-xl text-gray-900 mb-6">
                Book {activeTab === 'offline' ? 'Physical' : 'Video'} Consultation
              </h2>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Appointment requested successfully!'); }}>
                
                {activeTab === 'offline' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Health Center</label>
                    <select className="input-field">
                      <option>Rampur Primary Health Center (PHC)</option>
                      <option>Sitapur Sub-Center</option>
                      <option>Gorakhpur Community Health Center (CHC)</option>
                    </select>
                  </div>
                )}

                {activeTab === 'online' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Specialization</label>
                    <select className="input-field">
                      <option>Obstetrics & Gynecology</option>
                      <option>Pediatrics (Newborn Care)</option>
                      <option>General Physician</option>
                    </select>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                    <input type="date" className="input-field" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                    <select className="input-field">
                      <option>Morning (09:00 AM - 12:00 PM)</option>
                      <option>Afternoon (12:00 PM - 03:00 PM)</option>
                      <option>Evening (03:00 PM - 05:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reason for Visit / Symptoms</label>
                  <textarea rows={3} className="input-field" placeholder="Briefly describe your issue..." required></textarea>
                </div>

                <button type="submit" className="btn-primary w-full !bg-purple-600 hover:!bg-purple-700">
                  Request Appointment
                </button>
              </form>
            </motion.div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {/* Upcoming Appointments */}
            <div className="card border-2 border-purple-100 bg-purple-50">
              <h2 className="font-display font-bold text-lg text-purple-900 mb-4">Upcoming Appointments</h2>
              <div className="space-y-4">
                {upcomingAppointments.map((apt, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl border border-purple-100 shadow-sm">
                    <p className="font-semibold text-gray-900 text-sm mb-1">{apt.type}</p>
                    <p className="text-purple-600 text-sm font-medium flex items-center gap-1 mb-2">
                      <Stethoscope className="w-4 h-4" /> {apt.doctor}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-3">
                      <p className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {apt.date}</p>
                      <p className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {apt.time}</p>
                      <p className="flex items-center gap-1 col-span-2"><MapPin className="w-3.5 h-3.5" /> {apt.location}</p>
                    </div>
                    {apt.location === 'Online Video' && (
                      <button className="w-full py-2 bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 hover:bg-blue-200 transition-colors">
                        <Video className="w-4 h-4" /> Join Call
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
