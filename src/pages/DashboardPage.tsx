import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import PatientDashboard from './dashboards/PatientDashboard';
import DoctorDashboard from './dashboards/DoctorDashboard';
import AshaDashboard from './dashboards/AshaDashboard';
import { Navigate } from 'react-router-dom';

export default function DashboardPage() {
  const { user, role } = useAuth();

  // If user is not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Render specific dashboard based on role
  let DashboardContent = AshaDashboard; // Default for asha, anm, admin

  if (role === 'pregnant_woman') {
    DashboardContent = PatientDashboard;
  } else if (role === 'doctor') {
    DashboardContent = DoctorDashboard;
  }

  return (
    <Layout show3D variant3D="minimal">
      <DashboardContent />
    </Layout>
  );
}
