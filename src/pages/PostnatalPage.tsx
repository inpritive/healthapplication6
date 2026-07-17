import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Baby, Activity, HeartPulse, Scale, Syringe, Clock, AlertTriangle, Droplets } from 'lucide-react';

export default function PostnatalPage() {
  const { t } = useLanguage();

  const newbornStats = [
    { label: 'Weight', value: '3.2 kg', icon: Scale, color: 'text-maatri-500' },
    { label: 'Heart Rate', value: '130 bpm', icon: HeartPulse, color: 'text-coral-500' },
    { label: 'Feeding', value: 'Every 2 hrs', icon: Clock, color: 'text-sage-500' },
  ];

  const immunizations = [
    { name: 'BCG', status: 'Given', date: '12 Oct 2026' },
    { name: 'OPV 0', status: 'Given', date: '12 Oct 2026' },
    { name: 'Hepatitis B', status: 'Given', date: '12 Oct 2026' },
    { name: 'OPV 1, Pentavalent 1', status: 'Due', date: '23 Nov 2026' },
  ];

  return (
    <Layout show3D variant3D="minimal">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
            <Baby className="w-8 h-8" />
          </div>
          <h1 className="section-title mb-4">Postnatal & Newborn Care</h1>
          <p className="text-gray-600 text-lg">Track your baby's health, immunizations, and your own recovery post-delivery.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Newborn Vitals */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="card lg:col-span-2">
            <h2 className="font-display font-bold text-xl text-maatri-900 mb-6 flex items-center gap-2 border-b pb-2">
              <Activity className="w-6 h-6 text-maatri-500" /> Newborn Vitals & Feeding
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {newbornStats.map((stat, i) => (
                <div key={i} className="p-4 bg-maatri-50 rounded-xl text-center border border-maatri-100">
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                  <p className="text-xl font-bold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="bg-coral-50 p-4 rounded-xl border border-coral-200 flex items-start gap-4">
              <Droplets className="w-8 h-8 text-coral-500 shrink-0" />
              <div>
                <h3 className="font-semibold text-coral-800">Exclusive Breastfeeding</h3>
                <p className="text-sm text-coral-700">Remember to exclusively breastfeed your baby for the first 6 months. No water, honey, or top milk needed.</p>
              </div>
            </div>
          </motion.div>

          {/* Maternal Recovery Danger Signs */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="card border-2 border-coral-200">
            <h2 className="font-display font-bold text-xl text-coral-600 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" /> Maternal Warning Signs
            </h2>
            <p className="text-sm text-gray-600 mb-4">Contact ASHA or 108 immediately if you have:</p>
            <ul className="space-y-3 text-sm text-gray-700 font-medium">
              <li className="flex gap-2 items-start"><div className="w-2 h-2 mt-1.5 rounded-full bg-coral-500 shrink-0"></div> Heavy vaginal bleeding</li>
              <li className="flex gap-2 items-start"><div className="w-2 h-2 mt-1.5 rounded-full bg-coral-500 shrink-0"></div> Foul-smelling discharge</li>
              <li className="flex gap-2 items-start"><div className="w-2 h-2 mt-1.5 rounded-full bg-coral-500 shrink-0"></div> High fever</li>
              <li className="flex gap-2 items-start"><div className="w-2 h-2 mt-1.5 rounded-full bg-coral-500 shrink-0"></div> Severe abdominal pain</li>
              <li className="flex gap-2 items-start"><div className="w-2 h-2 mt-1.5 rounded-full bg-coral-500 shrink-0"></div> Swollen, red, or painful breasts</li>
            </ul>
          </motion.div>

          {/* Immunization Tracker */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card lg:col-span-3">
            <h2 className="font-display font-bold text-xl text-maatri-900 mb-6 flex items-center gap-2 border-b pb-2">
              <Syringe className="w-6 h-6 text-maatri-500" /> Newborn Immunization Schedule
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-600 text-sm border-b">
                    <th className="p-4 font-semibold">Vaccine</th>
                    <th className="p-4 font-semibold">Status</th>
                    <th className="p-4 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {immunizations.map((imm, i) => (
                    <tr key={i} className="border-b last:border-0 hover:bg-gray-50/50">
                      <td className="p-4 font-medium text-gray-900">{imm.name}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${imm.status === 'Given' ? 'bg-sage-100 text-sage-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {imm.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-600">{imm.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>
      </div>
    </Layout>
  );
}
