import { useState } from 'react';
import ModuleForm from './ModuleForm';

const initialData = [
  { id: 1, name: 'Monthly Revenue', description: 'Finance report', status: 'Published' },
  { id: 2, name: 'User Growth', description: 'Acquisition report', status: 'Draft' },
];

function ModuleList() {
  const [reports, setReports] = useState(initialData);

  return (
    <section className="space-y-4 rounded-xl bg-white p-6 shadow">
      <h1 className="text-2xl font-semibold text-slate-900">Reports Module</h1>
      <ModuleForm onSubmit={(report) => setReports((prev) => [report, ...prev])} />
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2">Name</th>
              <th className="py-2">Description</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b">
                <td className="py-2">{report.name}</td>
                <td className="py-2">{report.description}</td>
                <td className="py-2">{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ModuleList;
