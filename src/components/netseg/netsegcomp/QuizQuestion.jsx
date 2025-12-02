// src/components/netseg/components/QuizQuestion.jsx
import React from "react";

const QuizQuestion = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  isSubmitted,
  isCorrect,
}) => {
  const letters = ["A", "B", "C", "D"];

  return (
    <div className="quiz-question">
      <div className="question-header">
        <h3>{question.question}</h3>
      </div>

      <div className="options-list">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const isCorrectOption = index === question.correct_answer;

          let optionClass = "option";
          if (isSubmitted) {
            if (isCorrectOption) {
              optionClass += " correct";
            } else if (isSelected && !isCorrectOption) {
              optionClass += " incorrect";
            } else {
              optionClass += " disabled";
            }
          } else if (isSelected) {
            optionClass += " selected";
          }

          return (
            <div
              key={index}
              className={optionClass}
              onClick={() => !isSubmitted && onSelectAnswer(index)}
            >
              <div className="option-letter">{letters[index]}</div>
              <div className="option-text">{option}</div>
              {isSubmitted && isCorrectOption && (
                <div className="option-check">✓</div>
              )}
              {isSubmitted && isSelected && !isCorrectOption && (
                <div className="option-cross">✗</div>
              )}
            </div>
          );
        })}
      </div>

      {isSubmitted && question.explanation && (
        <div className="explanation">
          <strong>Explanation:</strong> {question.explanation}
        </div>
      )}

      <div className="question-progress">
        Question {questionNumber} of {totalQuestions}
      </div>
    </div>
  );
};

export default QuizQuestion;