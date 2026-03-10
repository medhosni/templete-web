import AdminSidebar from '../../components/AdminSidebar';
import ModuleList from './ModuleList';

function ReportsModulePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <ModuleList />
      </div>
    </main>
  );
}

export default ReportsModulePage;
