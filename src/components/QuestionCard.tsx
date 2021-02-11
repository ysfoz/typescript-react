import React from 'react';
import { AnswerObject } from '../App';
import { ButtonWrapper, Wrapper} from './Question.style'
type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestios: number;
}

const QuestionCard: React.FC<Props> = ({
    answers, question, callback, userAnswer, questionNr, totalQuestios
}
) => (
    <Wrapper>
        <p className='number'>
            Question: {questionNr} / {totalQuestios}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers?.map((answer,index) => (
                <ButtonWrapper 
                userClicked={userAnswer?.answer === answer}
                correct={userAnswer?.correctAnswer === answer}
                key={index}>
                    <button disabled={!!userAnswer} value={answer} onClick={callback}> {/* !! ile boolean degere donusturduk*/}
                        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
)

export default QuestionCard


