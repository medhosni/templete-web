import Navbar from '../components/Navbar';
import { useAuthStore } from '../store/authStore';

function ProfilePage() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container mx-auto max-w-3xl px-4 py-6">
        <section className="rounded-xl bg-white p-6 shadow">
          <h1 className="text-xl font-semibold text-slate-900">Profile</h1>
          <dl className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            <div>
              <dt className="text-sm text-slate-500">Email</dt>
              <dd className="text-slate-900">{user?.email || 'unknown'}</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-500">Role</dt>
              <dd className="text-slate-900">{user?.role || 'GUEST'}</dd>
            </div>
          </dl>
        </section>
      </main>
    </div>
  );
}

export default ProfilePage;
