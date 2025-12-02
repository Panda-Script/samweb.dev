// src/components/netseg/NetworkSegQuiz.jsx
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useNetworkSeg } from "./NetworkSegLayout";
import QuizQuestion from "./netsegcomp/QuizQuestion";

const NetworkSegQuiz = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { quizzes, userProgress, setUserProgress } = useNetworkSeg();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const quiz = quizzes.find((q) => q.lesson_id === parseInt(lessonId));

  if (!quiz) return <div>Quiz not found</div>;

  const questions = quiz.questions;
  const currentQ = questions[currentQuestion];

  const handleSelectAnswer = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex,
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setIsSubmitted(false);
    } else {
      // Calculate score
      const correct = questions.filter(
        (q, index) => selectedAnswers[index] === q.correct_answer
      ).length;
      const score = Math.round((correct / questions.length) * 100);

      // Update progress
      const newQuizScores = [...userProgress.quiz_scores];
      const existingIndex = newQuizScores.findIndex(
        (s) => s.lesson_id === parseInt(lessonId)
      );

      const newScore = {
        lesson_id: parseInt(lessonId),
        score,
        completed_at: new Date().toISOString(),
      };

      if (existingIndex >= 0) {
        newQuizScores[existingIndex] = newScore;
      } else {
        newQuizScores.push(newScore);
      }

      // Check if lesson should be marked complete
      const completedLessons = [...userProgress.completed_lessons];
      if (!completedLessons.includes(parseInt(lessonId))) {
        completedLessons.push(parseInt(lessonId));
      }

      setUserProgress({
        ...userProgress,
        quiz_scores: newQuizScores,
        completed_lessons: completedLessons,
        current_streak: userProgress.current_streak + 1,
        last_activity_date: new Date().toISOString(),
      });

      navigate(`/netseg/results/${lessonId}?score=${score}`);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>Quiz: Lesson {lessonId}</h2>
        <div className="progress">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>

      <QuizQuestion
        question={currentQ}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        selectedAnswer={selectedAnswers[currentQuestion]}
        onSelectAnswer={handleSelectAnswer}
        isSubmitted={isSubmitted}
        isCorrect={selectedAnswers[currentQuestion] === currentQ.correct_answer}
      />

      <div className="quiz-actions">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswers[currentQuestion] === undefined}
            className="btn btn-primary"
          >
            Submit Answer
          </button>
        ) : (
          <button onClick={handleNext} className="btn btn-primary">
            {currentQuestion < questions.length - 1
              ? "Next Question"
              : "Finish Quiz"}
          </button>
        )}
        <Link to={`/netseg/lesson/${lessonId}`} className="btn btn-outline">
          Back to Lesson
        </Link>
      </div>
    </div>
  );
};

export default NetworkSegQuiz;