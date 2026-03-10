import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const links = [
  { to: '/admin/dashboard', label: 'Dashboard' },
  { to: '/admin/users', label: 'Users' },
  { to: '/admin/modules', label: 'Modules' },
  { to: '/admin/module/reports', label: 'Reports Module' },
];

function AdminSidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button
        type="button"
        className="mb-4 rounded-md bg-slate-900 px-4 py-2 text-sm text-white lg:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        Toggle Admin Menu
      </button>

      <aside className={`${open ? 'block' : 'hidden'} rounded-xl bg-white p-4 shadow lg:block`}>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                className={`block rounded-md px-3 py-2 text-sm ${location.pathname === link.to ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100'}`}
                to={link.to}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default AdminSidebar;
