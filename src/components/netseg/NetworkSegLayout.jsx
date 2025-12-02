// src/components/netseg/NetworkSegLayout.jsx
import React, { useState, createContext, useContext } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import NetworkSegNavbar from "./NetworkSegNavbar";
import NetworkSegOverview from "./NetworkSegOverview";
import NetworkSegLesson from "./NetworkSegLesson";
import NetworkSegQuiz from "./NetworkSegQuiz";
import NetworkSegBadges from "./NetworkSegBadges";
import NetworkSegResults from "./NetworkSegResults";
import { lessons, quizzes, badges } from "./NetworkSegData";
import "./NetworkSeg.css";

// Create context for shared data
const NetworkSegContext = createContext();

export function useNetworkSeg() {
  return useContext(NetworkSegContext);
}

function NetworkSegLayout() {
  const [userProgress, setUserProgress] = useState({
    completed_lessons: [], // Example: lessons 1 & 2 completed
    quiz_scores: [],
    earned_badges: [],
    current_streak: 0,
    last_activity_date: null,
  });

  const value = {
    lessons,
    quizzes,
    badges,
    userProgress,
    setUserProgress,
  };

  return (
    <NetworkSegContext.Provider value={value}>
      <div className="network-seg-container">
        <div className="netseg-header">
          <h1 className="netseg-title">Network Segmentation</h1>
          <p className="netseg-subtitle">10 Lessons | 10 Quizzes | 4 Badges</p>
        </div>

        <NetworkSegNavbar />

        <div className="netseg-content">
          <Routes>
            <Route path="/" element={<NetworkSegOverview />} />
            <Route path="/lesson/:id" element={<NetworkSegLesson />} />
            <Route path="/quiz/:lessonId" element={<NetworkSegQuiz />} />
            <Route path="/results/:lessonId" element={<NetworkSegResults />} />
            <Route path="/badges" element={<NetworkSegBadges />} />
          </Routes>
        </div>
      </div>
    </NetworkSegContext.Provider>
  );
}

export default NetworkSegLayout;