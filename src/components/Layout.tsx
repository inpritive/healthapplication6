import { ReactNode } from 'react';

import { motion } from 'framer-motion';

import Navbar from './Navbar';

import Footer from './Footer';

import Scene3D from './Scene3D';

import AmbientBackground from './AmbientBackground';

import { pageTransition } from '@/lib/motion';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';



interface LayoutProps {

  children: ReactNode;

  show3D?: boolean;

  variant3D?: 'hero' | 'background' | 'minimal';

  ambient?: 'default' | 'warm' | 'cool' | 'hero' | 'none';

}



export default function Layout({

  children,

  show3D = false,

  variant3D = 'background',

  ambient = 'default',

}: LayoutProps) {

  return (

    <div className="min-h-screen flex flex-col relative overflow-x-hidden">

      {ambient !== 'none' && <AmbientBackground variant={ambient} />}

      {show3D && <Scene3D variant={variant3D} className="opacity-35 pointer-events-none fixed inset-0 -z-[5]" />}

      <Navbar />

      <motion.main

        className="flex-1 pt-16 relative z-10"

        initial={pageTransition.initial}

        animate={pageTransition.animate}

        transition={pageTransition.transition}

      >

        {children}

      </motion.main>

      <Footer />

      {/* Global SOS Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <Link to="/emergency" className="flex items-center justify-center w-14 h-14 rounded-full bg-coral-500 text-white shadow-coral hover:bg-coral-600 transition-colors hover:scale-110 active:scale-95 relative group">
          <AlertCircle className="w-7 h-7 animate-pulse" />
          <span className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Emergency SOS
          </span>
        </Link>
      </motion.div>
    </div>

  );

}

