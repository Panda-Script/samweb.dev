// src/components/netseg/NetworkSegBadges.jsx
import React from "react";
import { Link } from "react-router-dom"; // ADD THIS IMPORT
import { useNetworkSeg } from "./NetworkSegLayout";
import BadgeCard from "./netsegcomp/BadgeCard";

const NetworkSegBadges = () => {
  const { badges, userProgress } = useNetworkSeg();

  const earnedBadges = badges.filter((badge) =>
    userProgress.earned_badges.includes(badge.id)
  );
  const lockedBadges = badges.filter(
    (badge) => !userProgress.earned_badges.includes(badge.id)
  );

  return (
    <div className="badges-page">
      <div className="page-header">
        <h1>🏆 Your Badges</h1>
        <p className="subtitle">
          Earn badges by completing lessons and quizzes
        </p>
      </div>

      <div className="stats-summary">
        <div className="stat">
          <span className="count">{earnedBadges.length}</span>
          <span className="label">Earned</span>
        </div>
        <div className="stat">
          <span className="count">{lockedBadges.length}</span>
          <span className="label">Locked</span>
        </div>
        <div className="stat">
          <span className="count">{badges.length}</span>
          <span className="label">Total</span>
        </div>
        <div className="stat">
          <span className="count">
            {badges.length > 0
              ? Math.round((earnedBadges.length / badges.length) * 100)
              : 0}
            %
          </span>
          <span className="label">Complete</span>
        </div>
      </div>

      {earnedBadges.length > 0 && (
        <div className="badges-section">
          <h2>✅ Earned Badges</h2>
          <div className="badges-grid">
            {earnedBadges.map((badge) => (
              <BadgeCard key={badge.id} badge={badge} isEarned={true} />
            ))}
          </div>
        </div>
      )}

      {lockedBadges.length > 0 && (
        <div className="badges-section">
          <h2>🔒 Locked Badges</h2>
          <div className="badges-grid">
            {lockedBadges.map((badge) => (
              <BadgeCard key={badge.id} badge={badge} isEarned={false} />
            ))}
          </div>
        </div>
      )}

      <div className="motivation">
        <p>Complete more lessons and ace quizzes to unlock all badges!</p>
        <Link to="/netseg" className="btn btn-primary">
          Continue Learning
        </Link>
      </div>
    </div>
  );
};

export default NetworkSegBadges;