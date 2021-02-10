import axios from 'axios';
import { shuffleArray } from './utils'

export type Question ={
    category : string;
    correct_answer : string;
    difficulty : string;
    incorrect_answers : string[];
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
       return res.data.results.map((question: Question) => (
           {
               ...question,
               answers : shuffleArray([...question.incorrect_answers,question.correct_answer])
           }
       ))
    } catch (err) {
        console.log(err)
    }
}