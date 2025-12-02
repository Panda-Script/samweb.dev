// src/components/netseg/components/BadgeCard.jsx
import React from "react";

const BadgeCard = ({ badge, isEarned }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "book":
        return "📚";
      case "design":
        return "🎨";
      case "shield":
        return "🛡️";
      case "flame":
        return "🔥";
      default:
        return "🏆";
    }
  };

  const getColorClass = (color) => {
    switch (color) {
      case "gold":
        return "gold";
      case "silver":
        return "silver";
      case "bronze":
        return "bronze";
      case "purple":
        return "purple";
      case "blue":
        return "blue";
      case "green":
        return "green";
      default:
        return "default";
    }
  };

  return (
    <div
      className={`badge-card ${isEarned ? "earned" : "locked"} ${getColorClass(
        badge.color
      )}`}
    >
      <div className="badge-icon">
        {getIcon(badge.icon)}
        {isEarned && <span className="earned-check">✓</span>}
      </div>
      <div className="badge-content">
        <h4 className="badge-name">{badge.name}</h4>
        <p className="badge-description">{badge.description}</p>
        <div className="badge-status">
          {isEarned ? "✅ Earned" : "🔒 Locked"}
        </div>
      </div>
    </div>
  );
};

export default BadgeCard;