import React, { useState } from "react"
import { useStateValue } from './state'
import { getFrameOptions } from './quiz.js'
import './QuizCard.css';

export default function QuizCard() {
    const [{ quiz, config }, dispatch] = useStateValue();
    const [answered, setAnswered] = useState({});
    const [possibleAnswers, setPossibleAnswers] = useState([]);
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
        setPossibleAnswers([]);
        setAnswered({});
        setWrong(false);
        setFinished(false);
    }

    function handleEndQuiz() {
        dispatch({type: 'endQuiz'});
        setPossibleAnswers([]);
        setAnswered({});
        setWrong(false);
        setFinished(false);
    }

    if (possibleAnswers.length === 0 && quiz.currentMove !== null) {
        getFrameOptions(quiz.currentMove.frameAdvantage).forEach(adv => {
            possibleAnswers.push(adv);
        });
        setPossibleAnswers(possibleAnswers);
    }
    

    const answerButtons = [];
    possibleAnswers.forEach(adv => {
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
    
    return (quiz.running && !quiz.finished &&
        
        <div>
            <h2>{title}</h2>
            <h4>{secondary}</h4>
            <iframe title='Gif' src={quiz.currentMove.gif} frameBorder='0' scrolling='no' width='640' height='404'></iframe>
            <div>
                {answerButtons}
            </div>
            <div>
                {finished && 
                    <button className="QuizCard-button" onClick={() => handleNext()}>Next</button>
                }
            </div>
            <div>
                <button className="QuizCard-button" onClick={() => handleEndQuiz()}>End Quiz</button>
            </div>
        </div>
        
    );
}