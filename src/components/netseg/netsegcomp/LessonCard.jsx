
import React from "react";
import { Link } from "react-router-dom";

const LessonCard = ({ lesson, isCompleted }) => {
  

  return (
    <div className={`lesson-card ${isCompleted ? "completed" : ""}`}>
      <div className="lesson-header">
        <div className="lesson-meta">
          <span className="lesson-number">Lesson {lesson.order}</span>
          <span className="lesson-duration">{lesson.duration} min</span>
        </div>
        {isCompleted && <span className="completed-badge">✓</span>}
      </div>

      <h3 className="lesson-title">{lesson.title}</h3>
      <p className="lesson-description">{lesson.description}</p>
      <div className="lesson-topic">{lesson.topic}</div>

      <div className="lesson-actions">
        <Link
          to={`/netseg/lesson/${lesson.id}`}
          className="btn btn-sm btn-primary"
        >
          {isCompleted ? "Review" : "Start"}
        </Link>
        <Link
          to={`/netseg/quiz/${lesson.id}`}
          className="btn btn-sm btn-outline"
        >
          Quiz
        </Link>
      </div>
    </div>
  );
};


export default LessonCard;

