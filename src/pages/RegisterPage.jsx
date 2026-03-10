import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <section className="mx-auto w-full max-w-md rounded-xl bg-white p-6 shadow">
        <h1 className="mb-4 text-2xl font-semibold">Register</h1>
        <p className="text-sm text-slate-600">Registration flow placeholder to keep architecture extensible.</p>
        <Link to="/login" className="mt-4 inline-block text-sm text-blue-600">Back to login</Link>
      </section>
    </main>
  );
}

export default RegisterPage;
