import AdminSidebar from '../components/AdminSidebar';

function AdminUsersPage() {
  const rows = [
    { id: 1, name: 'Alice', role: 'ADMIN' },
    { id: 2, name: 'Bob', role: 'USER' },
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-4">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <section className="rounded-xl bg-white p-6 shadow">
          <h1 className="text-2xl font-semibold">Users</h1>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead><tr className="border-b"><th className="py-2">Name</th><th className="py-2">Role</th></tr></thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="border-b"><td className="py-2">{row.name}</td><td className="py-2">{row.role}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AdminUsersPage;
