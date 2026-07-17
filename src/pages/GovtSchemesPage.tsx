import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import { Landmark, CheckCircle, XCircle, Info } from 'lucide-react';

export default function GovtSchemesPage() {
  const [formData, setFormData] = useState({
    firstPregnancy: false,
    bplCard: false,
    institutionalDelivery: false,
  });

  const [checked, setChecked] = useState(false);

  const checkEligibility = () => {
    setChecked(true);
  };

  const isPMMVYEligible = formData.firstPregnancy;
  const isJSYEligible = formData.bplCard && formData.institutionalDelivery;

  return (
    <Layout show3D variant3D="minimal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
            <Landmark className="w-8 h-8" />
          </div>
          <h1 className="section-title mb-4">Govt Scheme Eligibility</h1>
          <p className="text-gray-600 text-lg">Check if you are eligible for financial assistance under PMMVY and JSY schemes.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="card border border-gray-200">
            <h2 className="font-display font-bold text-xl text-gray-900 mb-6">Eligibility Questionnaire</h2>
            
            <div className="space-y-6">
              <label className="flex items-start gap-4 cursor-pointer p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" 
                  checked={formData.firstPregnancy} 
                  onChange={(e) => setFormData({...formData, firstPregnancy: e.target.checked})} 
                />
                <div>
                  <p className="font-semibold text-gray-900">Is this your first pregnancy?</p>
                  <p className="text-sm text-gray-500">Required for PMMVY scheme.</p>
                </div>
              </label>

              <label className="flex items-start gap-4 cursor-pointer p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" 
                  checked={formData.bplCard} 
                  onChange={(e) => setFormData({...formData, bplCard: e.target.checked})} 
                />
                <div>
                  <p className="font-semibold text-gray-900">Do you hold a BPL (Below Poverty Line) Ration Card?</p>
                  <p className="text-sm text-gray-500">Required for JSY financial assistance.</p>
                </div>
              </label>

              <label className="flex items-start gap-4 cursor-pointer p-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500" 
                  checked={formData.institutionalDelivery} 
                  onChange={(e) => setFormData({...formData, institutionalDelivery: e.target.checked})} 
                />
                <div>
                  <p className="font-semibold text-gray-900">Are you planning an institutional delivery (in a hospital/PHC)?</p>
                  <p className="text-sm text-gray-500">Required for JSY benefits.</p>
                </div>
              </label>

              <button onClick={checkEligibility} className="btn-primary w-full !bg-blue-600 hover:!bg-blue-700">Check Eligibility</button>
            </div>
          </motion.div>

          {checked && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
              <div className={`card border-2 ${isPMMVYEligible ? 'border-sage-200 bg-sage-50' : 'border-gray-200'}`}>
                <div className="flex items-start gap-4">
                  {isPMMVYEligible ? <CheckCircle className="w-8 h-8 text-sage-500 shrink-0" /> : <XCircle className="w-8 h-8 text-gray-400 shrink-0" />}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">PMMVY Scheme</h3>
                    <p className="text-sm text-gray-600 mb-2">Pradhan Mantri Matru Vandana Yojana</p>
                    {isPMMVYEligible ? (
                      <p className="text-sage-700 font-medium text-sm">You are likely eligible for ₹5,000 assistance. Contact your ASHA worker to apply.</p>
                    ) : (
                      <p className="text-gray-500 text-sm">This scheme is generally for the first living child.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className={`card border-2 ${isJSYEligible ? 'border-sage-200 bg-sage-50' : 'border-gray-200'}`}>
                <div className="flex items-start gap-4">
                  {isJSYEligible ? <CheckCircle className="w-8 h-8 text-sage-500 shrink-0" /> : <XCircle className="w-8 h-8 text-gray-400 shrink-0" />}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">JSY Scheme</h3>
                    <p className="text-sm text-gray-600 mb-2">Janani Suraksha Yojana</p>
                    {isJSYEligible ? (
                      <p className="text-sage-700 font-medium text-sm">You are likely eligible for cash assistance for institutional delivery.</p>
                    ) : (
                      <p className="text-gray-500 text-sm">Requires BPL status and institutional delivery.</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-xl flex gap-3 items-start border border-blue-100">
                <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">Please note this is a preliminary check. Final approval requires verification of Aadhar, bank account, and MCP card by your local ANM or MO.</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
}
