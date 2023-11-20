import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Quiz from './Components/QuizModal/Quiz';

const App = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleBuyClick = () => {
    setShowQuiz(true);
  };

  return (
    <div>
      <h1>Seu App</h1>
      <Button onClick={handleBuyClick}>Comprar</Button>
      {showQuiz && <Quiz />} {/* Mostra o Quiz baseado no estado de `showQuiz` */}
    </div>
  );
};

export default App;
