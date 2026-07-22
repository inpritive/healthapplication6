import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartPulse, Calendar, Phone, Landmark, CheckCircle2, Shield, Apple } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';

export default function PatientDashboard() {
  const { t } = useLanguage();
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="section-title mb-2">My Health Dashboard</h1>
        <p className="text-gray-600 mb-8">Hello, {user?.phone || 'Guest'}. Track your wellness journey here.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Link to="/wellness" className="card border-l-4 border-maatri-500 hover:shadow-lg transition-all flex items-center gap-4">
          <div className="bg-maatri-100 p-3 rounded-full">
            <HeartPulse className="w-6 h-6 text-maatri-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Wellness Tracker</h3>
            <p className="text-xs text-gray-500">Log symptoms & weight</p>
          </div>
        </Link>
        <Link to="/profile" className="card border-l-4 border-blue-500 hover:shadow-lg transition-all flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">My Profile</h3>
            <p className="text-xs text-gray-500">View your health records</p>
          </div>
        </Link>
        <Link to="/education" className="card border-l-4 border-sage-500 hover:shadow-lg transition-all flex items-center gap-4">
          <div className="bg-sage-100 p-3 rounded-full">
            <Apple className="w-6 h-6 text-sage-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Health Education</h3>
            <p className="text-xs text-gray-500">Nutrition & care tips</p>
          </div>
        </Link>
        <a href="tel:108" className="card border-l-4 border-coral-500 hover:shadow-lg transition-all flex items-center gap-4">
          <div className="bg-coral-100 p-3 rounded-full">
            <Phone className="w-6 h-6 text-coral-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Emergency 108</h3>
            <p className="text-xs text-gray-500">Call an ambulance</p>
          </div>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="font-display font-bold text-xl text-maatri-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-500" /> Upcoming Checkups
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
              <div>
                <h3 className="font-semibold text-gray-900">ANC Visit #3</h3>
                <p className="text-sm text-gray-600">With Dr. Sharma at CHC</p>
              </div>
              <span className="font-bold text-purple-600">Tomorrow, 10:00 AM</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <h3 className="font-semibold text-gray-900">Tetanus Toxoid (TT2)</h3>
                <p className="text-sm text-gray-600">Village Sub-center</p>
              </div>
              <span className="font-bold text-gray-600">In 2 weeks</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="font-display font-bold text-xl text-maatri-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-sage-500" /> Your Milestones
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-sage-500 shrink-0" />
              <div>
                <p className="font-medium text-gray-900">First Trimester Completed</p>
                <p className="text-xs text-gray-500">You are doing great!</p>
              </div>
            </li>
            <li className="flex gap-3 items-start opacity-60">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 shrink-0 mt-0.5"></div>
              <div>
                <p className="font-medium text-gray-900">Create a Birth Plan</p>
                <Link to="/birth-plan" className="text-xs text-maatri-600 hover:underline">Click here to start</Link>
              </div>
            </li>
            <li className="flex gap-3 items-start opacity-60">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 shrink-0 mt-0.5"></div>
              <div>
                <p className="font-medium text-gray-900">Apply for JSY Scheme</p>
                <Link to="/schemes" className="text-xs text-maatri-600 hover:underline">View Government Schemes</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
