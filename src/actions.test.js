import React from 'react';
import * as actions from './actions';

const {newGame, NEW_GAME, makeGuess, MAKE_GUESS, toggleInfoModal, TOGGLE_INFO_MODAL} = actions;

describe('Actions', () => {

  it('New Game action', () => {
    expect(newGame().type).toEqual(NEW_GAME);
    expect(newGame().correctAnswer).toBeLessThanOrEqual(100);
    expect(Number.isInteger(newGame().correctAnswer)).toBe(true);
  });

  it ('Make Guess action', () => {
    expect(makeGuess(25).type).toEqual(MAKE_GUESS);
    expect(makeGuess(25).guess).toBe(25);
  });

  it ('Toggle Info Modal action', () => {
    expect(toggleInfoModal().type).toEqual(TOGGLE_INFO_MODAL);
  });
});