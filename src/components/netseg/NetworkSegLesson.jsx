// src/components/netseg/NetworkSegLesson.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useNetworkSeg } from "./NetworkSegLayout";

const NetworkSegLesson = () => {
  const { id } = useParams();
  const { lessons } = useNetworkSeg();

  const lesson = lessons.find((l) => l.id === parseInt(id));

  if (!lesson) return <div>Lesson not found</div>;

  return (
    <div className="lesson-container">
      <div className="lesson-header">
        <h1>{lesson.title}</h1>
        <p className="topic">
          {lesson.topic} • {lesson.duration} minutes
        </p>
      </div>

      <div className="lesson-content">
        <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
      </div>

      <div className="lesson-actions">
        <Link to={`/netseg/quiz/${lesson.id}`} className="btn btn-primary">
          Take Quiz
        </Link>
        <Link to="/netseg" className="btn btn-outline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NetworkSegLesson;