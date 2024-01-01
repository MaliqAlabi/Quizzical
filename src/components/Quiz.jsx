import React, { useState } from "react";
import { nanoid } from 'nanoid';
import Question from "./Question";

export default function Quiz(){
    const [quizResult,setQuizResult] = useState([])
    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=medium')
            .then(res => res.json())
            .then(data => {
                let answerArray = []
                data.results.map((answer) => {
                    return answerArray.push({
                        id:nanoid(),
                        question: answer.question,
                        correctAnswer: answer.correct_answer,
                        answers: answer.incorrect_answers
                            .concat(answer.correct_answer)
                            .sort(
                                () => Math.random() - 0.5
                            ),
                        pickedAnswer:''
                    })
                })
                console.log(answerArray)
                setQuizResult(answerArray)
            })
    },[])

    const quizStructure = quizResult.map((result,index) => {
        return (
            <Question
                key = {index}
                question = {result.questio}
                answers = {result.answers}
                correctAnswer = {result.correctAnswer}
                pickedAnswer = {result.pickedAnswer}
            />
        )
    })
    return(
        <div>
            {quizStructure}
        </div>
    )

    
}