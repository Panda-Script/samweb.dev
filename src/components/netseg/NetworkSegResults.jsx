// src/components/netseg/NetworkSegResults.jsx
import React from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { useNetworkSeg } from "./NetworkSegLayout";

const NetworkSegResults = () => {
  const { lessonId } = useParams();
  const [searchParams] = useSearchParams();
  const { lessons, badges, userProgress } = useNetworkSeg();

  const score = parseInt(searchParams.get("score") || "0");
  const lesson = lessons.find((l) => l.id === parseInt(lessonId));
  const quizScore = userProgress.quiz_scores.find(
    (s) => s.lesson_id === parseInt(lessonId)
  );
  const passed = score >= 70;

  const earnedBadges = badges.filter((badge) =>
    userProgress.earned_badges.includes(badge.id)
  );

  return (
    <div className="results-container">
      <div className={`results-card ${passed ? "passed" : "failed"}`}>
        <h1>{passed ? "🎉 Congratulations!" : "📚 Keep Learning!"}</h1>
        <div className="score-display">
          <div className="score-circle">
            <span className="score-value">{score}%</span>
          </div>
          <p className="score-message">
            {passed
              ? `You passed the "${lesson?.title}" quiz!`
              : `You scored ${score}% (need 70% to pass)`}
          </p>
        </div>

        <div className="results-details">
          <div className="detail">
            <span>Lesson:</span>
            <span>{lesson?.title}</span>
          </div>
          <div className="detail">
            <span>Status:</span>
            <span className={passed ? "text-success" : "text-warning"}>
              {passed ? "Passed" : "Not Passed"}
            </span>
          </div>
          <div className="detail">
            <span>Attempted:</span>
            <span>
              {quizScore?.completed_at
                ? new Date(quizScore.completed_at).toLocaleDateString()
                : "Today"}
            </span>
          </div>
        </div>

        <div className="badges-earned">
          <h3>🎖️ Your Badges</h3>
          <div className="badges-list">
            {earnedBadges.map((badge) => (
              <div key={badge.id} className="badge-item">
                <div className="badge-icon">{badge.icon}</div>
                <span>{badge.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="results-actions">
          <Link to="/netseg" className="btn btn-primary">
            Back to Dashboard
          </Link>
          {!passed && (
            <Link to={`/netseg/quiz/${lessonId}`} className="btn btn-outline">
              Try Again
            </Link>
          )}
          <Link
            to={`/netseg/lesson/${parseInt(lessonId) + 1}`}
            className="btn btn-success"
          >
            Next Lesson
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NetworkSegResults;