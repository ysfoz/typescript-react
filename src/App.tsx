import React, { useState, useEffect } from 'react';
import QuestionCard from './components/QuestionCard'
import { Difficulty, fetchQuizQuestions, QuestionState } from './API'
import { GlobalStyle, Wrapper } from './App.style'

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string
}

const TOTAL_QUESTIONS = 10;


const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log(questions)


  const startTravia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestions)
    setScore(0);
    setUserAnswers([]);
    setNumber(0)
    setLoading(false)

  }


  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => { 
    if(!gameOver){
      //user answer
      const answer = e.currentTarget.value;
      //check answer
      const correct = questions[number].correct_answer === answer
      //add score
      if(correct) setScore(prev => prev + 1)
      //save answer
      const answerObject = {
        question:questions[number].question,
        answer,
        correct,
        correctAnswer : questions[number].correct_answer,

      };
      setUserAnswers(prev => [...prev,answerObject])
    }
  }

  const nextQuestion = () => { 
    // next question if not last
    const nextQuestion = number + 1;
    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
      
    }else{
      setNumber(nextQuestion)
    }
   }

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>REACT QUIZZ</h1>
     

      {gameOver || userAnswers.length === TOTAL_QUESTIONS
        ?
        <button className='start' onClick={startTravia}>Start</button>
        :
        null
      }

      {!gameOver
        ?
        <p className='score'>Score:{score}</p>
        :
        null
      }

      { loading && <p>Loading Questions . . . </p>}

      {!gameOver && !loading &&
        (
          <QuestionCard
            answers={questions[number].answers}
            question={questions[number].question}
            callback={checkAnswer}
            userAnswer={userAnswers ? userAnswers[number]: undefined }
            questionNr={number + 1}
            totalQuestios={TOTAL_QUESTIONS}
          />
        )
      }

      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1
        ?
        (
          <button className='next' onClick={nextQuestion}>Next</button>
        )
        :
        null

      }
    </Wrapper>
    
    </>
    )
}

export default App;
