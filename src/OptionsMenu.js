import React from "react"
import { useStateValue } from './state'
import { gameList, getCharacterList } from './movesets'
import './OptionsMenu.css'

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
            <h2>Frame Advantage Quiz</h2>
            <table>
                <tr className="OptionsMenu-row">
                    <td className="OptionsMenu-label-col"><label>Game</label></td>
                    <td><select className="OptionsMenu-select" onChange={(e) => {handleChangeGame(e.target.value)}} value={config.game}>{gameOptions}</select></td>
                </tr>
                <tr className="OptionsMenu-row">
                    <td className="OptionsMenu-label-col"><label>Character</label></td>
                    <td><select className="OptionsMenu-select" onChange={e => handleChangeCharacter(e.target.value)} value={config.character}>{characterOptions}</select></td>
                </tr>
                <tr className="OptionsMenu-row">
                    <td className="OptionsMenu-label-col"><label># of Questions</label></td>
                    <td><input className="OptionsMenu-select" type="number" value={config.numberOfQuestions} onChange={e => handleChangeQuestions(e.target.value)} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td className="OptionsMenu-hint"><span>Leave 0 or blank for endless quiz</span></td>
                </tr>
            </table>
            <div>
                <button className="OptionsMenu-button" onClick={() => handleStartQuiz()}>Start Quiz</button>
            </div>
        </div>
    );
}