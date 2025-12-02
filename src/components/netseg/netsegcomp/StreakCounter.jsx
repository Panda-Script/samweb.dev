// src/components/netseg/components/StreakCounter.jsx
import React from "react";

const StreakCounter = ({ streak }) => {
  return (
    <div className="streak-counter">
      <span className="streak-icon">🔥</span>
      <span className="streak-number">{streak}</span>
      <span className="streak-label">day streak</span>
    </div>
  );
};

export default StreakCounter;
