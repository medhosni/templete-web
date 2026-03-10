import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-4 py-6">
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {['Users', 'Modules', 'Activity', 'Reports'].map((card) => (
            <article key={card} className="rounded-xl bg-white p-5 shadow">
              <h2 className="text-lg font-semibold text-slate-900">{card}</h2>
              <p className="mt-1 text-sm text-slate-600">Responsive KPI card for mobile/tablet/desktop.</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
