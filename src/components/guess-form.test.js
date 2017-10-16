import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from './../actions';

describe('<GuessForm/>', () => {

  it ('Mounts without crashing', () => {
    const dispatch = jest.fn();
    const shallowGuessForm = shallow(<GuessForm dispatch={dispatch}/>);

  });

  it ('Dispatch function is called with the right values when a submit event takes place', () => {
    const dispatch = jest.fn();
    const value = "testing";
    const deepGuessForm = mount(<GuessForm dispatch={dispatch}/>);
    const inputfield = 
    deepGuessForm.find('input[name="userGuess"]');
    inputfield.instance().value = value;
    deepGuessForm.simulate('submit');
    expect(dispatch).toBeCalledWith(makeGuess(value));

  });
});