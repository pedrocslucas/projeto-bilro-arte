import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Quiz from '../QuizModal/Quiz';
import PromptQuiz from '../PromptQuiz/PromptQuiz';

const Produto = ({ produto, truncatedInfo }) => {

  const [showFullInfo, setShowFullInfo] = useState(false);

  const [showQuiz, setShowQuiz] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const toggleFullInfo = () => {
    setShowFullInfo(!showFullInfo); // Alterando o estado ao clicar o botão 'ver mais' ou 'ver menos'
  };

  const handleBuyClick = () => {
    setShowPrompt(true);
  };

  const handleClose = () => {
    setShowPrompt(false);
  }

  const handleStartQuiz = () => {
    setShowPrompt(false);
    setShowQuiz(true);
  }

  return (
    <div className='card mb-3' style={{ height: '400px' }}>
      <div className='card-body d-flex flex-column'>
        <h5 className='card-title'>{produto.nome}</h5>
        <p className='card-text'>{produto.descricao}</p>
        <p className='card-text'>
          <strong>Tamanho: </strong>
          {produto.tamanho}
        </p>
        <p className='card-text'>
          <strong>Informações Adicionais: </strong>
          {showFullInfo ? produto.infoadicionais : truncatedInfo}
          {produto.infoadicionais.length > 100 && (
            <Button variant='link' onClick={toggleFullInfo}>
              {showFullInfo ? 'Ver menos' : 'Ver mais'}
            </Button>
          )}
        </p>
        <p className='card-text'>
          <strong>Categoria: </strong>
          {produto.categoria}
        </p>
      </div>
      <Button onClick={handleBuyClick}>Comprar</Button>
      <PromptQuiz 
        showPrompt={showPrompt}
        handleClose={handleClose}
        handleStartQuiz={handleStartQuiz}
      />
      {showQuiz && <Quiz />} {/* Mostra o Quiz baseado no estado de 'showQuiz' */}
    </div>
  );
};

export default Produto;
