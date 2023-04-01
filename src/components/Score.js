import React from 'react';
import './Score.css';

function Score({ score, total }) {
  const percentage = ((score / total) * 100).toFixed(0);

  return (
    <div className="Score">
      <h2>Score</h2>
      <p>{score} / {total} ({percentage}%)</p>
    </div>
  );
}

export default Score;
