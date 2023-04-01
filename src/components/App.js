import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Question';
import Score from './Score';
import EndScreen from './EndScreen';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    // fetch questions data from an API and set state
    async function fetchQuestions() {
      const response = await fetch('https://opentdb.com/api.php?amount=10');
      const data = await response.json();
      setQuestions(data.results);
    }
    fetchQuestions();
  }, []);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setGameOver(true);
    }
  };

  const handlePlayAgainButtonClick = () => {
    setQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setGameOver(false);
    // refetch questions data from an API
    async function fetchQuestions() {
      const response = await fetch('https://opentdb.com/api.php?amount=10');
      const data = await response.json();
      setQuestions(data.results);
    }
    fetchQuestions();
  };

  if (gameOver) {
    return <EndScreen score={score} onPlayAgainButtonClick={handlePlayAgainButtonClick} />;
  } else if (questions.length === 0) {
    return <div>Loading...</div>;
  } else {
    const question = questions[currentQuestion];
    return (
      <div className="App">
        <Question
          question={question}
          onAnswerButtonClick={handleAnswerButtonClick}
        />
        <Score score={score} />
      </div>
    );
  }
}

export default App;
