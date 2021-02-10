import React,{ useState ,useEffect } from 'react';
import QuestionCard from './components/QuestionCard'
import { Difficulty, fetchQuizQuestions } from './API'



const TOTAL_QUESTIONS = 10;


const App = () => {
  const [loading,setLoading] =useState(false)
  const [questions,setQuestions] =useState([])
  const [number,setNumber] =useState(0)
  const [userAnswers,setUserAnswers] =useState([])
  const [score,setScore] = useState(0)
  const [gameOver,setGameOver] =useState(true)
  console.log(fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY))

  useEffect(()=>{fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY)},[])

  const startTravia = async () => { }


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>)=>{}

  const nextQuestion = () =>{console.log('e')}

  return (
  <div className = 'App'>
     <h1>REACT QUIZZ</h1>
     <button className='button' onClick={startTravia}>Start</button>
     <p className='score'>Score:</p>
     <p>Loading Questions . . . </p>
     <QuestionCard
    //  answers={questions[number].answers} 
    //  question={questions[number].question} 
    answers = {['1','2']}
    question = 'ddd'
     callback={checkAnswer} 
     userAnswer={userAnswers && userAnswers[number] } 
    //  userAnswer={userAnswers ? userAnswers[number]: undefined } o boyle yazdi deneyelim
     questionNr={number + 1} 
     totalQuestios={TOTAL_QUESTIONS}
     />
     <button className= 'button' onClick={nextQuestion}>Next</button>
     </div>)
}

export default App;
