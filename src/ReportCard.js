import React from "react"
import { useStateValue } from './state'

export default function ReportCard() {
    const [{ quiz }, dispatch] = useStateValue();
    

    return (quiz.finished &&
        <div>
            <h2>Results</h2>
            <div>
                Results go here
            </div>
            <button onClick={() => dispatch({type: 'resetQuiz'})}>Start Again</button>
        </div>
        
    );
}