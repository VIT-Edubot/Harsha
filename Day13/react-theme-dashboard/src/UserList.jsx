import { useState, useMemo, useCallback } from 'react';
import { useTheme } from './ThemeContext';

const mockUsers = [
  { id: 1, name: "Aarav Mehta" },
  { id: 2, name: "Diya Sharma" },
  { id: 3, name: "Rohan Verma" },
  { id: 4, name: "Ishita Desai" },
  { id: 5, name: "Karan Singh" },
  { id: 6, name: "Neha Joshi" },
  { id: 7, name: "Arjun Rao" },
];

function UserList() {
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState('');

  const filteredUsers = useMemo(() => {
    return mockUsers.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <div className={`container ${theme}`}>
      <h2>User List Dashboard</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={handleChange}
      />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
