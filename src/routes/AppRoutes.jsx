import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import AdminDashboardPage from '../pages/AdminDashboardPage';
import AdminUsersPage from '../pages/AdminUsersPage';
import AdminModulesPage from '../pages/AdminModulesPage';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import ReportsModulePage from '../modules/reports/moduleRoutes';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route element={<AdminRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/modules" element={<AdminModulesPage />} />
          <Route path="/admin/module/reports" element={<ReportsModulePage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRoutes;
