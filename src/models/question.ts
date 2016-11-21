import {Category} from "./category";

export interface question {
    answers: string[];
    correctAnswer: number;
    type: Category
}