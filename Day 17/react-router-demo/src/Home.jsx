import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const featureIds = [101, 102, 103];
  return (
    <div>
      <h2>Home Page</h2>
      <p>Select a dashboard feature to view:</p>
      <ul>
        {featureIds.map((id) => (
          <li key={id}>
            <Link to={`/dashboard/${id}`}>View Feature ID {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
