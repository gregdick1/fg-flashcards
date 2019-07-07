import {default as sfvMoves} from './sfv.js'
import {default as t7Moves} from './tekken7.js'

const data = {}
data['Street Fighter V'] = sfvMoves;
data['Tekken 7'] = t7Moves;

//Individual moves don't have the game/character, so just add that here
Object.keys(data).forEach(game => {
    Object.keys(data[game]).forEach(character => {
        data[game][character].forEach(move => {
            move['game'] = game;
            move['character'] = character;
            move['gif'] = move['gif']+'?hd=1&controls=0'
        });
    });
});

export const gameList = Object.keys(data);
export const getCharacterList = (game) => { return Object.keys(data[game]) }
export const getMoveList = (game, character) => {
    
    if (character === "All") {
        const moveList = [];
        Object.keys(data[game]).forEach((character) => {
            moveList.push(...data[game][character]);
        });
        return moveList;
    } else {
        return data[game][character];
    }
};
