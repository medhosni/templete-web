import AdminSidebar from '../components/AdminSidebar';

function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <section className="rounded-xl bg-white p-6 shadow">
          <h1 className="text-2xl font-semibold text-slate-900">Admin Dashboard</h1>
          <p className="mt-2 text-slate-600">Centralized admin metrics and quick actions.</p>
        </section>
      </div>
    </main>
  );
}

export default AdminDashboardPage;
