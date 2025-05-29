import { useState, useEffect } from 'react';
import './styles.css';



const UserDashboard = () => {
  const [name, setName] = useState('John Doe');
  const [status, setStatus] = useState(true); // true = Active
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
  localStorage.setItem('theme', theme);
  document.body.className = theme === 'dark' ? 'dark-mode' : '';
}, [theme]);


  return (
    <div className={`dashboard ${theme}`}>
      <h1>User Dashboard</h1>

      <div className="user-info">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <p>Current Name: {name}</p>
      </div>

      <div className="status-toggle">
        <p>Status: {status ? 'Active' : 'Inactive'}</p>
        <button onClick={() => setStatus(!status)}>
          Set {status ? 'Inactive' : 'Active'}
        </button>
        {!status && (
          <p className="inactive-msg">
            Your account is currently inactive. Please update your status.
          </p>
        )}
      </div>

      <div className="theme-toggle">
        <p>Current Theme: {theme}</p>
        <button onClick={handleThemeToggle}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
