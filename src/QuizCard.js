import React, { useState } from "react"
import { useStateValue } from './state'
import { getFrameOptions } from './quiz.js'
import './QuizCard.css';

export default function QuizCard() {
    const [{ quiz, config }, dispatch] = useStateValue();
    const [answered, setAnswered] = useState({});
    const [wrong, setWrong] = useState(false);
    const [finished, setFinished] = useState(false);
    const [renderCounter, updateRenderCounter] = useState(0);

    function handleAnswer(value) {
        const newAnswered = answered;
        newAnswered[value.toString()] = true;
        setAnswered(newAnswered);

        //Wait to dispatch until they've answered correctly
        if (value === quiz.currentMove.frameAdvantage) {
            setFinished(true);
        } else {
            setWrong(true);
        }
        updateRenderCounter(renderCounter + 1);
    }

    function handleNext() {
        dispatch({type: 'answered', correct: !wrong});
        setAnswered({});
        setWrong(false);
        setFinished(false);
    }

    function handleEndQuiz() {
        dispatch({type: 'endQuiz'});
        setAnswered({});
        setWrong(false);
        setFinished(false);
    }

    const answerButtons = [];
    quiz.possibleAnswers.forEach(adv => {
        let className = 'QuizCard-button';
        if (answered[adv.toString()] && adv === quiz.currentMove.frameAdvantage) {
            className += ' QuizCard-button-correct';
        } else if (answered[adv.toString()]) {
            className += ' QuizCard-button-wrong';
        } 
        let title = adv;
        if (adv > 0) { title = '+' + adv; }
        answerButtons.push(<button className={className} key={adv+className} onClick={() => handleAnswer(adv)}>{title}</button>);
    });

    let title = `Question ${quiz.answered + 1}`;
    if (config.numberOfQuestions > 0) {
        title += ` of ${config.numberOfQuestions}`
    }
    let secondary = `${quiz.correct} of ${quiz.answered} correct`
    const nextClass = finished ? 'QuizCard-button QuizCard-button-next' : 'QuizCard-button QuizCard-button-hidden';
    
    return (quiz.running && !quiz.finished &&
        
        <div>
            <div className="QuizCard-header">
                <span>{title}</span>
                <span>{secondary}</span>
            </div>
            
            <iframe title='Gif' src={quiz.currentMove.gif} frameBorder='0' scrolling='no' width='852' height='524'></iframe>
            <iframe className="QuizCard-hidden" title='Hidden Gif' src={quiz.nextMove.gif} frameBorder='0' scrolling='no' width='852' height='524'></iframe>
            <div className="QuizCard-footer">
                <span>{quiz.currentMove.character}</span>
                <span>{quiz.currentMove.name}</span>
            </div>
            <div className="QuizCard-buttons">
                <button className="QuizCard-button QuizCard-button-exit" onClick={() => handleEndQuiz()}>End Quiz</button>
                <span className="QuizCard-answers">
                    {answerButtons}
                </span>
                <button className={nextClass} onClick={() => handleNext()}>Next</button>
            </div>
        </div>
        
    );
}