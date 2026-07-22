import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Stethoscope, Droplet, Activity, FileText } from 'lucide-react';

export default function DoctorDashboard() {

  const patientsList = [
    { name: 'Sunita Devi', condition: 'High BP (150/95)', status: 'Critical', age: 24, weeks: 32 },
    { name: 'Priya Sharma', condition: 'Severe Anemia (Hb 8.2)', status: 'High Risk', age: 28, weeks: 24 },
    { name: 'Meena Patel', condition: 'Gestational Diabetes', status: 'High Risk', age: 31, weeks: 29 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="section-title mb-2">Doctor Dashboard</h1>
        <p className="text-gray-600 mb-8">Welcome Doctor. Here are your critical cases requiring clinical review.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card border-l-4 border-coral-500">
            <h2 className="font-display font-bold text-xl text-maatri-900 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-coral-500" /> Pending Clinical Approvals / High Risk
            </h2>
            <div className="space-y-4">
              {patientsList.map((patient, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-maatri-50 transition-colors">
                  <div>
                    <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                    <p className="text-sm text-coral-600 font-medium">{patient.condition}</p>
                    <p className="text-xs text-gray-500">Age: {patient.age} &bull; {patient.weeks} Weeks Pregnant</p>
                  </div>
                  <button className="btn-primary text-sm px-4 py-2">Review Case</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h2 className="font-display font-bold text-lg text-maatri-900 mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/appointments" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
                <Calendar className="w-6 h-6 text-purple-600" />
                <span className="text-xs font-medium text-center">My Schedule</span>
              </Link>
              <Link to="/donors" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-red-50 hover:bg-red-100 transition-colors">
                <Droplet className="w-6 h-6 text-red-600" />
                <span className="text-xs font-medium text-center">Blood Donors</span>
              </Link>
              <Link to="/reports" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <FileText className="w-6 h-6 text-blue-600" />
                <span className="text-xs font-medium text-center">Diagnostics</span>
              </Link>
              <Link to="/high-risk" className="flex flex-col items-center gap-2 p-4 rounded-xl bg-coral-50 hover:bg-coral-100 transition-colors">
                <Stethoscope className="w-6 h-6 text-coral-600" />
                <span className="text-xs font-medium text-center">All Patients</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
