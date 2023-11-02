import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/quiz.svg";

import "../Styles/Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);
  return (
    <div id="welcome">
        <h2>Seja Bem-Vindo</h2>
        <p>Clique no Botao abaixo para começar:</p>
        <button onClick={()=> dispatch({type: "CHANGE_STATE"})}>
          Iniciar
        </button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default Welcome