import React from 'react';
import Header from './Header';
import EmployeeCard from './EmployeeCard';
import './EmployeeDashboard.css';

function EmployeeDashboard() {
    
  const employees = [
    { name: 'Harsha', position: 'Frontend Developer', department: 'Engineering' },
    { name: 'Phanindra', position: 'Product Manager', department: 'Product' },
    { name: 'Mokshagna', position: 'UX Designer', department: 'Design' },
    { name: 'Dhanvish', position: 'Backend Developer', department: 'Engineering' }
  ];

  return (
    <div className="dashboard">
      <Header />
      <div className="employee-list">
        {employees.map((emp, index) => (
          <EmployeeCard
            key={index}
            name={emp.name}
            position={emp.position}
            department={emp.department}  //props
          />
        ))}
      </div>
    </div>
  );
}

export default EmployeeDashboard;
