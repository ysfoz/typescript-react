import axios from 'axios';

export type Question ={
    category : string;
    correct_answer : string;
    difficulty : string;
    incorrect_answer : string[];
    question : string;
    type : string;
}


export type QuestionState = Question & { answers:string[]}

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export const fetchQuizQuestions = async (amaunt: number, difficulty: Difficulty) => {
    try {
        const res = await axios.get(`https://opentdb.com/api.php?amount=${amaunt}&difficulty=${difficulty}&type=multiple`)
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}