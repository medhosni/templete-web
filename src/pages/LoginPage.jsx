import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

function LoginPage() {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('password');
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const isAdmin = email.startsWith('admin');
    setAuth({
      token: 'mock-jwt-token',
      user: { id: 1, email, role: isAdmin ? 'ADMIN' : 'USER' },
    });

    navigate('/home');
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <section className="mx-auto w-full max-w-md rounded-xl bg-white p-6 shadow">
        <h1 className="mb-6 text-2xl font-semibold text-slate-900">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input className="w-full rounded-md border border-slate-300 px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className="w-full rounded-md border border-slate-300 px-3 py-2" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2 text-white">Sign in</button>
        </form>
        <Link to="/register" className="mt-4 block text-sm text-blue-600">Create an account</Link>
      </section>
    </main>
  );
}

export default LoginPage;
