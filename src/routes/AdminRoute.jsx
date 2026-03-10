import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

function AdminRoute() {
  const user = useAuthStore((state) => state.user);

  return user?.role === 'ADMIN' ? <Outlet /> : <Navigate to="/home" replace />;
}

export default AdminRoute;
