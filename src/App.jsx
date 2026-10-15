import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [editId, setEditId] = useState(null);

  const saveItem = (e) => {
    e.preventDefault();
    if (!name.trim() || !role.trim()) return;
    const item = { id: editId ?? Date.now(), name: name.trim(), role };
    setItems(editId === null ? [...items, item]
      : items.map((old) => old.id === editId ? item : old));
    setName(''); setRole(''); setEditId(null);
  };

  const editItem = (item) => {
    setName(item.name); setRole(item.role); setEditId(item.id);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
    if (editId === id) { setName(''); setRole(''); setEditId(null); }
  };

  return (
    <div>
      <h1>Job Application</h1>
      <form onSubmit={saveItem}>
        <input aria-label="name" placeholder="name" value={name}
          onChange={(e) => setName(e.target.value)} required />
        <input aria-label="Role" placeholder="Role" value={role}
          onChange={(e) => setRole(e.target.value)} required />
        <button>{editId === null ? 'Add' : 'Update'}</button>
      </form>
      <h2>This Is My Skills</h2>
      {items.length === 0 && <p>This is my Application</p>}
      {items.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Role: {item.department}</p>
          <button onClick={() => editItem(item)}>Edit</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
