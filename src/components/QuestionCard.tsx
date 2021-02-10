import React from 'react';
import { AnswerObject } from '../App';

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
    <div>
        <p className='number'>
            Question: {questionNr} / {totalQuestios}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map((answer,index) => (
                <div key={index}>
                    <button disabled={!!userAnswer} value={answer} onClick={callback}> {/* !! ile boolean degere donusturduk*/}
                        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                    </button>
                </div>
            ))}
        </div>
    </div>
)

export default QuestionCard


