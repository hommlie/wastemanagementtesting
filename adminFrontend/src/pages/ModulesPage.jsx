import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../services/api';
import { toast } from 'react-toastify';

export default function ModulesPage() {
  const [modules, setModules] = useState([]);
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchModules(){
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/modules`, { credentials: 'include' });
      const json = await res.json();
      if (res.ok) setModules(json.data || []);
      else toast.error(json.message || 'Failed');
    } catch (err) { toast.error(err.message || 'Network error'); }
    setLoading(false);
  }

  useEffect(() => { fetchModules(); }, []);

  async function handleCreate(e) {
    e.preventDefault();
    if (!code.trim() || !title.trim()) return toast.error('Code and Title required');
    try {
      const res = await fetch(`${BASE_URL}/modules`, {
        method: 'POST', headers: {'Content-Type':'application/json'}, credentials:'include',
        body: JSON.stringify({ code: code.trim(), title: title.trim() })
      });
      const json = await res.json();
      if (!res.ok) return toast.error(json.message || 'Create failed');
      toast.success('Module created');
      setCode(''); setTitle('');
      fetchModules();
    } catch (err) { toast.error(err.message || 'Network error'); }
  }

  async function handleDelete(id){
    if(!window.confirm('Delete module?')) return;
    try {
      const res = await fetch(`${BASE_URL}/modules/${id}`, { method: 'DELETE', credentials: 'include' });
      const json = await res.json();
      if (!res.ok) return toast.error(json.message || 'Delete failed');
      toast.success('Deleted');
      fetchModules();
    } catch (err) { toast.error(err.message || 'Network error'); }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Modules</h1>
        <form onSubmit={handleCreate} className="flex gap-2">
          <input value={code} onChange={e=>setCode(e.target.value)} placeholder="code (slug)" className="border rounded px-2 py-1"/>
          <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="border rounded px-2 py-1"/>
          <button type="submit" className="bg-emerald-600 text-white px-3 py-1 rounded">Create</button>
        </form>
      </div>

      <div className="bg-white rounded shadow">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? <tr><td colSpan="4" className="p-4">Loading…</td></tr> :
              modules.length === 0 ? <tr><td colSpan="4" className="p-4">No modules</td></tr> :
              modules.map((m, i) => (
                <tr key={m.id} className="border-t">
                  <td className="px-4 py-2">{i+1}</td>
                  <td className="px-4 py-2 font-mono">{m.code}</td>
                  <td className="px-4 py-2">{m.title}</td>
                  <td className="px-4 py-2">
                    <button onClick={()=>handleDelete(m.id)} className="text-red-600 px-2 py-1 border rounded">Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
