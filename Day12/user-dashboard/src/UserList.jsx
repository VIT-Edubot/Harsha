import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  // Simulate API fetch with mock AP user data
useEffect(() => {
  const mockUsers = [
    { id: 1, name: 'Ravi Kumar', email: 'ravi.kumar@gmail.com' },
    { id: 2, name: 'Lakshmi Devi', email: 'lakshmi.devi@gmail.com' },
    { id: 3, name: 'Suresh Babu', email: 'suresh.babu@gmail.com' },
    { id: 4, name: 'Anusha Reddy', email: 'anusha.reddy@gmail.com' },
    { id: 5, name: 'Venkatesh Rao', email: 'venkatesh.rao@gmail.com' },
    { id: 6, name: 'Divya Sri', email: 'divya.sri@gmail.com' },
    { id: 7, name: 'Harsha Vardhan', email: 'harsha.vardhan@gmail.com' },
    { id: 8, name: 'Bhavani Priya', email: 'bhavani.priya@gmail.com' },
    { id: 9, name: 'Narasimha Murthy', email: 'narasimha.murthy@gmail.com' },
    { id: 10, name: 'Kesava', email: 'kesava@gmail.com' }
  ];

  const timeout = setTimeout(() => {
    setUsers(mockUsers);
    setLoading(false);
  }, 1500);

  return () => clearTimeout(timeout);
}, []);


  // Timer to update document title
  useEffect(() => {
    const interval = setInterval(() => {
      document.title = `Total Users: ${users.length}`;
    }, 5000);

    return () => clearInterval(interval);
  }, [users.length]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-list">
      <h2 class='head'>User Dashboard</h2>
      <input
        type="text"
        placeholder="Search users by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {loading ? (
        <p className="loading">Loading users...</p>
      ) : (
        <ul>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> – {user.email}
              </li>
            ))
          ) : (
            <p className="no-results">No users found.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default UserList;
