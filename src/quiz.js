import { getMoveList } from './movesets'

export const getFrameOptions = (frameAdvantage) => {
    const sets = []
    sets.push([frameAdvantage - 4, frameAdvantage - 2, frameAdvantage]);
    sets.push([frameAdvantage - 2, frameAdvantage, frameAdvantage + 2]);
    sets.push([frameAdvantage, frameAdvantage + 2, frameAdvantage + 4]);

    const randSet = Math.floor(Math.random() * Math.floor(3));
    return sets[randSet];
}

export const getNextMove = (game, character) => {
    const potentialMoves = getMoveList(game, character);
    const randIdx = Math.floor(Math.random() * Math.floor(potentialMoves.length));
    return potentialMoves[randIdx];
}