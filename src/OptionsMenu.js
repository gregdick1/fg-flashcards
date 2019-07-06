import React from "react"
import { useStateValue } from './state'
import { gameList, getCharacterList } from './movesets'

export default function ConfigMenu() {
    const [{ config, quiz }, dispatch] = useStateValue();

    function handleChangeGame(value) {
        dispatch({
            type: 'changeGame',
            newGame: value
        });
        dispatch({
            type: 'changeCharacter',
            newCharacter: "All"
        });
    }

    function handleChangeCharacter(value) {
        dispatch({
            type: 'changeCharacter',
            newCharacter: value
        });
    }

    function handleChangeQuestions(value) {
        dispatch({
            type: 'changeQuestions',
            newQuestions: value
        });
    }

    function handleStartQuiz() {
        dispatch({
            type: 'startQuiz'
        })
    }

    const gameOptions = []
    gameList.forEach((game) => {
        gameOptions.push(<option key={game} value={game}>{game}</option>);
    });

    const characterOptions = [<option key="All" value="All">All</option>]
    getCharacterList(config.game).forEach((character) => {
        characterOptions.push(<option key={character} value={character}>{character}</option>);
    });

    return (!quiz.running &&
        <div>
            <h2>Options</h2>
            <div>
                <span>Game:</span>
                <select onChange={(e) => {handleChangeGame(e.target.value)}} value={config.game}>{gameOptions}</select>
            </div>
            <div>
                <span>Character:</span>
                <select onChange={e => handleChangeCharacter(e.target.value)} value={config.character}>{characterOptions}</select>
            </div>
            <div>
                <span>Questions:</span>
                <input type="number" value={config.numberOfQuestions} onChange={e => handleChangeQuestions(e.target.value)} />
                <span>Leave 0 or blank for endless quiz</span>
            </div>
            <div>
                <button onClick={() => handleStartQuiz()}>Start Quiz</button>
            </div>
        </div>
    );
}