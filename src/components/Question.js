import React, { useState } from 'react';
import './Question.css';

function Question({ question, onAnswerButtonClick }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerButtonClick = () => {
    if (!isAnswered && selectedAnswer !== null) {
      const isCorrect = selectedAnswer === question.correct_answer;
      setIsAnswered(true);
      onAnswerButtonClick(isCorrect);
    }
  };

  return (
    <div className="Question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
      <ul>
        {question.incorrect_answers.map((answer) => (
          <li key={answer}>
            <label>
              <input
                type="radio"
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={(event) => setSelectedAnswer(event.target.value)}
                disabled={isAnswered}
              />
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </label>
          </li>
        ))}
        <li>
          <label>
            <input
              type="radio"
              name="answer"
              value={question.correct_answer}
              checked={selectedAnswer === question.correct_answer}
              onChange={(event) => setSelectedAnswer(event.target.value)}
              disabled={isAnswered}
            />
            <span dangerouslySetInnerHTML={{ __html: question.correct_answer }} />
          </label>
        </li>
      </ul>
      <button onClick={handleAnswerButtonClick} disabled={selectedAnswer === null || isAnswered}>
        {isAnswered ? (selectedAnswer === question.correct_answer ? 'Correct!' : 'Wrong!') : 'Submit'}
      </button>
    </div>
  );
}

export default Question;
