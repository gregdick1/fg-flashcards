import React from 'react';
import QuizCard from './QuizCard.js';
import ReportCard from './ReportCard.js';
import OptionsMenu from './OptionsMenu.js';
import './App.css';
import { StateProvider } from './state'
import { getNextMove, getFrameOptions } from './quiz.js'

function App() {
  const initialState = {
    config: {
      game: 'Street Fighter V',
      character: 'All',
      numberOfQuestions: 0
    },
    quiz: {
      running: false,
      finished: false,
      answered: 0,
      correct: 0,
      missed: [],
      currentMove: null,
      nextMove: null,
      possibleAnswers: []
    }
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeGame':
        return {
          ...state,
          config: {
            ...state.config,
            game: action.newGame
          }
        }
      case 'changeCharacter':
        return {
          ...state,
          config: {
            ...state.config,
            character: action.newCharacter
          }
        };
      case 'changeQuestions':
        return {
          ...state,
          config: {
            ...state.config,
            numberOfQuestions: action.newQuestions
          }
        }
      case 'startQuiz':
        const nextMove = getNextMove(state.config.game, state.config.character);
        return {
          ...state,
          quiz: {
            running: true,
            finished: false,
            answered: 0,
            correct: 0,
            missed: [],
            currentMove: nextMove,
            nextMove: getNextMove(state.config.game, state.config.character),
            possibleAnswers: getFrameOptions(nextMove.frameAdvantage)
          }
        }
      case 'endQuiz':
        return {
          ...state,
          quiz: {
            ...state.quiz,
            finished: true
          }
        }
      case 'resetQuiz':
        return {
          ...state,
          quiz: {
            ...state.quiz,
            running:false,
            finished:false,
            currentMove: null,
            nextMove: null,
            possibleAnswers: []
          }
        }

      case 'answered':
        let numCorrect = state.quiz.correct;
        const missed = state.quiz.missed;
        if (action.correct) {
          numCorrect += 1;
        } else {
          missed.push(state.quiz.currentMove);
        }
        return {
          ...state,
          quiz: {
            ...state.quiz,
            answered: state.quiz.answered + 1,
            correct: numCorrect,
            missed: missed, 
            currentMove: state.quiz.nextMove,
            nextMove: getNextMove(state.config.game, state.config.character),
            possibleAnswers: getFrameOptions(state.quiz.nextMove.frameAdvantage)
          }
        };
      default:
        return state;
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <header className="App-header">
          <OptionsMenu />
          <QuizCard />
          <ReportCard />
        </header>
      </div>
    </StateProvider>
  );
}

export default App;
