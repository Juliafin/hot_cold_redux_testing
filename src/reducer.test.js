import hotColdReducer from './reducer';
import * as actions from './actions';
import {initialState} from './reducer';

const {newGame, NEW_GAME, makeGuess, MAKE_GUESS, toggleInfoModal, TOGGLE_INFO_MODAL} = actions;

describe('Hot Cold Reducer', () => {

  it ('New Game action properly resets to initial state', () => {

    console.log('initialState', initialState);
    const newState = hotColdReducer(undefined, newGame())
    expect(newState.guesses).toEqual([]);
    expect(newState.guesses.length).toBe(0);
    expect(newState.feedback).toEqual('Make your guess!');
    expect(Number.isInteger(newState.correctAnswer)).toBe(true);
    expect(newState.correctAnswer).toBeLessThan(101);
    expect(newState.showInfoModal).toBe(false);

  });

  it ('Toggle Info Modal properly toggles the state', () => {
    expect(initialState.showInfoModal).toBe(false);
    const newState = hotColdReducer(initialState, toggleInfoModal());
    expect (newState.showInfoModal).toBe(true);
    const newState2 = hotColdReducer(newState, toggleInfoModal());
    expect(newState2.showInfoModal).toBe(false);
  });

  it ('Adds correct guesses', () => {
    let state = initialState;
    state = hotColdReducer(state, makeGuess(5));
    state = hotColdReducer(state, makeGuess(54));
    state = hotColdReducer(state, makeGuess(72));
    state = hotColdReducer(state, makeGuess(22));
    state = hotColdReducer(state, makeGuess(13));

    expect(state.guesses).toEqual([5,54,72,22,13]);
    
  });

  it ('Gives the correct feedback', () => {

    expect(hotColdReducer(initialState, makeGuess("test")).feedback).toBe("Please enter a valid number"); 
    expect(hotColdReducer(undefined, makeGuess("test")).feedback).toBe("Please enter a valid number");

    let state = Object.assign({}, initialState, {correctAnswer:70});

    state = hotColdReducer(state, makeGuess(3));
    expect(state.feedback).toBe(`You're Ice Cold...`);
    state = hotColdReducer(state, makeGuess(24));
    expect(state.feedback).toBe(`You're Cold...`);
    state = hotColdReducer(state, makeGuess(45));
    expect (state.feedback).toBe(`You're Warm`);
    state = hotColdReducer(state, makeGuess(69));
    expect(state.feedback).toBe(`You're Hot!`);
    state = hotColdReducer(state, makeGuess(71));
    expect(state.feedback).toBe(`You're Hot!`);
    state= hotColdReducer(state, makeGuess(70));
    expect(state.feedback).toBe('You got it!');
    

  });

});