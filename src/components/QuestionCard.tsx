import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
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
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                    </button>
                </div>
            ))}
        </div>
    </div>
)

export default QuestionCard


