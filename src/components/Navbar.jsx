import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuthStore } from '../store/authStore';

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuthStore();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/home" className="text-lg font-bold text-slate-900">Template Web</Link>

        <button
          type="button"
          className="rounded-md border border-slate-300 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav className="hidden items-center gap-4 md:flex">
          <Link to="/home" className="text-sm text-slate-700 hover:text-blue-600">Home</Link>
          <Link to="/profile" className="text-sm text-slate-700 hover:text-blue-600">Profile</Link>
          {user?.role === 'ADMIN' && (
            <Link to="/admin/dashboard" className="text-sm text-slate-700 hover:text-blue-600">Admin</Link>
          )}
          <button type="button" onClick={logout} className="rounded-md bg-slate-900 px-3 py-2 text-sm text-white">Logout</button>
        </nav>
      </div>

      {open && (
        <nav className="space-y-2 border-t border-slate-200 px-4 py-3 md:hidden">
          <Link to="/home" className="block text-sm text-slate-700">Home</Link>
          <Link to="/profile" className="block text-sm text-slate-700">Profile</Link>
          {user?.role === 'ADMIN' && <Link to="/admin/dashboard" className="block text-sm text-slate-700">Admin</Link>}
          <button type="button" onClick={logout} className="w-full rounded-md bg-slate-900 px-3 py-2 text-sm text-white">Logout</button>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
