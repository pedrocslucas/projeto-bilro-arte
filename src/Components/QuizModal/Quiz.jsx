import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Quiz = () => {
  const [questions] = useState([
    {
      "question": "Qual é a capital do Brasil?",
      "alternatives": [
        { "text": "Rio de Janeiro", "isCorrect": false },
        { "text": "São Paulo", "isCorrect": false },
        { "text": "Brasília", "isCorrect": true },
        { "text": "Belo Horizonte", "isCorrect": false },
        { "text": "Distrito Federal", "isCorrect": false }
      ]
    },
    {
      "question": "Qual é o maior planeta do sistema solar?",
      "alternatives": [
        { "text": "Terra", "isCorrect": false },
        { "text": "Júpiter", "isCorrect": true },
        { "text": "Saturno", "isCorrect": false },
        { "text": "Marte", "isCorrect": false },
        { "text": "Vênus", "isCorrect": false }
      ]
    },
    {
      "question": "Quem escreveu 'Dom Quixote'?",
      "alternatives": [
        { "text": "Miguel de Cervantes", "isCorrect": true },
        { "text": "William Shakespeare", "isCorrect": false },
        { "text": "Jorge Luis Borges", "isCorrect": false },
        { "text": "Machado de Assis", "isCorrect": false },
        { "text": "Charles Dickens", "isCorrect": false }
      ]
    },
    {
      "question": "Qual é a montanha mais alta do mundo?",
      "alternatives": [
        { "text": "Monte Everest", "isCorrect": true },
        { "text": "Monte Kilimanjaro", "isCorrect": false },
        { "text": "Monte K2", "isCorrect": false },
        { "text": "Monte McKinley", "isCorrect": false },
        { "text": "Mont Blanc", "isCorrect": false }
      ]
    },
    {
      "question": "Quem pintou a 'Mona Lisa'?",
      "alternatives": [
        { "text": "Leonardo da Vinci", "isCorrect": true },
        { "text": "Vincent van Gogh", "isCorrect": false },
        { "text": "Pablo Picasso", "isCorrect": false },
        { "text": "Michelangelo", "isCorrect": false },
        { "text": "Rafael Sanzio", "isCorrect": false }
      ]
    }
  ]);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);

  useEffect(() => {
    setCurrentQuestionIndex(Math.floor(Math.random() * questions.length));
  }, [questions]);

  const handleAnswerSelection = (selected) => {
    setSelectedAnswer(selected);
  };

  const handleClose = () => {
    setSelectedAnswer(null);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Quiz</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {currentQuestion && (
          <>
            <p>{currentQuestion.question}</p>
            <div className="d-grid gap-2">
              {currentQuestion.alternatives.map((alternative, index) => (
                <Button
                  key={index}
                  variant={
                    selectedAnswer === alternative.text
                      ? alternative.isCorrect
                        ? 'success'
                        : 'danger'
                      : 'primary'
                  }
                  onClick={() => handleAnswerSelection(alternative.text)}
                >
                  {alternative.text}
                </Button>
              ))}
            </div>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default Quiz;
