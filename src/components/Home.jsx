import React from "react";

export default function Home(props){
    return(
        <div className="homePage">
            <h1>Quizzical</h1>
            <p>Test Your Knowledge!</p>
            <button onClick={props.beginGame}>Start quiz</button>
        </div>
    )
}