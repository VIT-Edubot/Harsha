import React from 'react';
import './EmployeeCard.css';

function EmployeeCard({ name, position, department }) {
  return (
    <div className="employee-card">
      <h3>{name}</h3>
      <p><strong>Position: </strong> {position}</p>
      <p><strong>Department: </strong> {department}</p>
    </div>
  );
}

export default EmployeeCard;
