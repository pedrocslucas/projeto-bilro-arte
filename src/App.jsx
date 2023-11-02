import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './Components/Welcome';
import Question from './Components/Question';
import GameOver from './Components/GameOver';

import './App.css';

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(()=>{
    dispatch({type:"REORDER_QUESTIONS"})
  },[])

  return (
    <div className="App">
      <h1>Quiz Bilro Arte</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}
      
    </div>
  );
}

export default App;
