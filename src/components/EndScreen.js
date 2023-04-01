import React from 'react';
import './EndScreen.css';

function EndScreen({ score, total, restart }) {
  const percentage = ((score / total) * 100).toFixed(0);

  return (
    <div className="EndScreen">
      <h2>Congratulations!</h2>
      <p>You got {score} out of {total} ({percentage}%) questions correct.</p>
      <button onClick={restart}>Play Again</button>
    </div>
  );
}

export default EndScreen;
