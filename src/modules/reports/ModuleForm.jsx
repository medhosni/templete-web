import { useState } from 'react';

function ModuleForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ id: Date.now(), name, description, status: 'Draft' });
    setName('');
    setDescription('');
  };

  return (
    <form className="grid gap-3 sm:grid-cols-1 md:grid-cols-2" onSubmit={handleSubmit}>
      <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Report name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button type="submit" className="md:col-span-2 rounded-md bg-blue-600 px-4 py-2 text-white">Add report</button>
    </form>
  );
}

export default ModuleForm;
