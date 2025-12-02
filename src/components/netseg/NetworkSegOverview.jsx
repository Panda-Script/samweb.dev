// src/components/netseg/NetworkSegOverview.jsx
import React from "react";
import { useNetworkSeg } from "./NetworkSegLayout";
import { Link } from "react-router-dom";
import { BookOpen, Trophy, Target } from "lucide-react";
import LessonCard from "./netsegcomp/LessonCard";
import ProgressRing from "./netsegcomp/ProgressRing";
import StreakCounter from "./netsegcomp/StreakCounter";

const NetworkSegOverview = () => {
  const { lessons, userProgress } = useNetworkSeg();

  const completedCount = userProgress.completed_lessons.length;
  const totalLessons = lessons.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);
  const earnedBadgesCount = userProgress.earned_badges.length;

  return (
    <div className="netseg-overview">
      <div className="dashboard-section">
        <div className="dashboard-header">
          <h1>Learning Progress</h1>
          <StreakCounter streak={userProgress.current_streak} />
        </div>

        <div className="progress-dashboard">
          <div className="progress-summary">
            <ProgressRing progress={progressPercent} size={150}>
              <div className="progress-text">
                <span className="percent">{progressPercent}%</span>
                <span className="label">Complete</span>
              </div>
            </ProgressRing>

            <div className="progress-stats">
              <div className="stat">
                <BookOpen />
                <span className="count">{completedCount}</span>
                <span className="label">Lessons Completed</span>
              </div>
              <div className="stat">
                <Trophy />
                <span className="count">{earnedBadgesCount}</span>
                <span className="label">Badges Earned</span>
              </div>
              <div className="stat">
                <Target />
                <span className="count">{totalLessons}</span>
                <span className="label">Total Lessons</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lessons-section">
          <h2>Continue Learning</h2>
          <div className="lessons-grid">
            {lessons.slice(0, 3).map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                isCompleted={userProgress.completed_lessons.includes(lesson.id)}
              />
            ))}
          </div>
          <Link to="/netseg/lessons" className="view-all">
            View All Lessons →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NetworkSegOverview;