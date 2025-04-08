import React from 'react';
import Header from './Header';
import './EmployeeDashboard.css';

function EmployeeDashboard() {
  const employees = [
    { name: 'Harsha', position: 'Frontend Developer', department: 'Engineering' },
    { name: 'Moksha', position: 'Product Manager', department: 'Product' },
    { name: 'Chandana', position: 'UX Designer', department: 'Design' },
  ];

  return (
    <div className="dashboard">
      <Header />
      <h2>Employee List</h2>
      <ul className="employee-list">
        {employees.map((employee, index) => (
          <li key={index} className="employee-item">
            <p><strong>Name :</strong> {employee.name}</p>
            <p><strong>Position : </strong> {employee.position}</p>
            <p><strong>Department : </strong> {employee.department}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeDashboard;
