import React from "react";
import { decode } from "html-entities";

export default function Question(props){
    const buttonAnswers = props.answers.map((answer,index) => {
        return(
            <button key={index}>{decode(answer)}</button>
        )
    })
    return(
        <div>
            <div>{decode(props.question)}</div>
            <div>{buttonAnswers}</div>
        </div>
    )
}