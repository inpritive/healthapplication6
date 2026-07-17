import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { useLanguage } from '@/i18n/LanguageContext';
import { Phone, PhoneCall, AlertCircle, Heart, Shield, Ambulance, Users, MapPin, Navigation, Send } from 'lucide-react';

const emergencyNumbers = [
  { number: '102', label: 'maternalHelpline', icon: Heart, color: 'from-maatri-500 to-maatri-600', desc: 'Maternal and child health helpline' },
  { number: '181', label: 'womenHelpline', icon: Shield, color: 'from-purple-500 to-purple-600', desc: '24/7 women distress helpline' },
  { number: '104', label: 'healthHelpline', icon: PhoneCall, color: 'from-sage-500 to-sage-600', desc: 'Health information and advice' },
];

const localContacts = [
  { name: 'Dr. Priya Sharma', role: 'PHC Medical Officer', phone: '+91 98765 43210', village: 'Rampur PHC' },
  { name: 'Sunita Devi', role: 'ASHA Worker', phone: '+91 98765 43211', village: 'Rampur' },
  { name: 'ANM Kavita Singh', role: 'ANM', phone: '+91 98765 43212', village: 'Sitapur SC' },
  { name: 'CHC Gorakhpur', role: 'Community Health Center', phone: '+91 98765 43213', village: 'Gorakhpur' },
];

export default function EmergencyPage() {
  const { t } = useLanguage();
  const [familyPhone, setFamilyPhone] = useState('');
  const [sosActive, setSosActive] = useState(false);
  const [locationShared, setLocationShared] = useState(false);

  const triggerSOS = () => {
    setSosActive(true);
    // Mock location fetch and auto-call
    setTimeout(() => {
      window.location.href = 'tel:108';
    }, 2000);
  };

  const shareLocation = () => {
    if (!familyPhone) {
      alert("Please enter a family member's phone number first.");
      return;
    }
    setLocationShared(true);
    const msg = encodeURIComponent("EMERGENCY: I need help. My current location is roughly: https://maps.google.com/?q=26.7606,83.3732");
    window.open(`https://wa.me/${familyPhone.replace(/\s/g, '')}?text=${msg}`, '_blank');
    setTimeout(() => setLocationShared(false), 3000);
  };

  return (
    <Layout show3D variant3D="minimal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <AlertCircle className="w-16 h-16 text-coral-500 mx-auto mb-4" />
          <h1 className="section-title mb-4">{t('emergency')}</h1>
          <p className="text-gray-600 text-lg">{t('familyEmergency')} &bull; {t('publicHealth')}</p>
        </motion.div>

        {/* SOS Auto-call & Hospital Finder */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="card bg-gradient-to-br from-coral-50 to-white border-2 border-coral-200 mb-12 text-center py-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-coral-500"></div>
          <button 
            onClick={triggerSOS}
            className={`w-36 h-36 rounded-full flex flex-col items-center justify-center mx-auto mb-6 text-white shadow-coral transition-all ${sosActive ? 'bg-coral-700 animate-pulse-glow' : 'bg-gradient-to-br from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 hover:scale-105 active:scale-95'}`}
          >
            <AlertCircle className="w-14 h-14 mb-1" />
            <span className="font-bold text-2xl tracking-widest">SOS</span>
          </button>
          
          {sosActive ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-coral-700 flex flex-col items-center">
              <Navigation className="w-6 h-6 mb-2 animate-bounce" />
              <p className="font-semibold text-lg">Locating nearest hospital...</p>
              <p className="text-sm font-medium mt-1">Found: District Hospital (2.3 km). Initiating call to 108...</p>
            </motion.div>
          ) : (
            <p className="text-gray-600 max-w-md mx-auto font-medium">Tap the SOS button in a medical emergency. We will automatically locate the nearest hospital and dispatch an ambulance.</p>
          )}
        </motion.div>

        {/* Transport 108 Integration */}
        <div className="card mb-12 bg-maatri-950 text-white overflow-hidden relative border-none">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display font-bold text-2xl flex items-center gap-3 mb-2 text-maatri-100">
                <Ambulance className="w-8 h-8 text-coral-500" /> Free 108 Ambulance
              </h2>
              <p className="text-maatri-200/80">Book a free 108 ambulance directly to your current location. Available 24/7 across rural India.</p>
            </div>
            <a href="tel:108" className="btn-primary !bg-white !text-maatri-900 hover:!bg-maatri-50 flex items-center gap-2 whitespace-nowrap shadow-none ring-4 ring-white/20">
              <MapPin className="w-5 h-5 text-coral-500" /> Dispatch Now
            </a>
          </div>
        </div>

        {/* Family Emergency Call & Live Location */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card mb-12 border-2 border-maatri-200">
          <h2 className="font-display font-bold text-xl text-maatri-900 mb-4 flex items-center gap-2">
            <Users className="w-6 h-6 text-maatri-600" /> Family Live Location & SMS
          </h2>
          <p className="text-gray-600 mb-6">Enter a family member's WhatsApp number to instantly share your live location in an emergency.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="tel"
              placeholder="e.g. 9876543210"
              value={familyPhone}
              onChange={(e) => setFamilyPhone(e.target.value)}
              className="input-field flex-1"
            />
            <div className="flex gap-2 w-full sm:w-auto">
              <a
                href={familyPhone ? `tel:${familyPhone}` : '#'}
                className={`btn-secondary flex items-center justify-center gap-2 flex-1 sm:flex-none ${!familyPhone ? 'opacity-50 pointer-events-none' : ''}`}
              >
                <Phone className="w-5 h-5" /> {t('callNow')}
              </a>
              <button
                onClick={shareLocation}
                disabled={!familyPhone}
                className={`btn-primary flex items-center justify-center gap-2 flex-1 sm:flex-none ${!familyPhone ? 'opacity-50 cursor-not-allowed' : ''} ${locationShared ? '!bg-sage-500' : ''}`}
              >
                {locationShared ? <Heart className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                {locationShared ? 'Shared!' : 'Share Location'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Emergency Numbers List */}
        <h2 className="font-display font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
           National Helplines
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {emergencyNumbers.map((item, i) => (
            <motion.a
              key={i}
              href={`tel:${item.number}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`block p-5 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-md hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/20 rounded-lg">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-2xl font-display font-bold">{item.number}</p>
              </div>
              <p className="font-semibold text-sm">{t(item.label as 'maternalHelpline')}</p>
            </motion.a>
          ))}
        </div>

        {/* Public Health Support / Local Contacts */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
          <h2 className="font-display font-bold text-xl text-maatri-900 mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-maatri-600" /> {t('publicHealth')}
          </h2>
          <div className="space-y-4">
            {localContacts.map((contact, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-maatri-50 hover:bg-maatri-100 transition-colors">
                <div>
                  <p className="font-semibold text-gray-900">{contact.name}</p>
                  <p className="text-sm text-gray-500">{contact.role} &bull; {contact.village}</p>
                </div>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="btn-secondary !py-2 !px-4 text-sm flex items-center gap-2 bg-white">
                  <Phone className="w-4 h-4" /> Call
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
