import { Link } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

function AdminModulesPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <section className="rounded-xl bg-white p-6 shadow">
          <h1 className="text-2xl font-semibold">Modules</h1>
          <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            <article className="rounded-lg border p-4">
              <h2 className="font-medium">Reports</h2>
              <p className="mt-1 text-sm text-slate-600">CRUD module with responsive list/form.</p>
              <Link className="mt-3 inline-block text-sm text-blue-600" to="/admin/module/reports">Open module</Link>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AdminModulesPage;
