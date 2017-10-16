import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList/>', () => {

  it ('Mounts without crashing', () => {

    const shallowGuessList = shallow(<GuessList guesses={[]} />);

  });

  it ('Renders the correct number of elements', () => {

    const shallowGuessList = shallow(<GuessList guesses={[]} />);
    expect(shallowGuessList.find('ul#guessList').children().length).toBe(0);

    const shallowGuessListtwo = shallow(<GuessList guesses={[1,2,6,42,37,23]} />);
    expect(shallowGuessListtwo.find('ul#guessList').children().length).toBe(6);

  });

  it ('Has the right class', () => {
    const shallowGuessList = shallow(<GuessList guesses={[1,2,3,4]} />);
    expect(shallowGuessList.hasClass('guessBox')).toBe(true);
    // console.log((shallowGuessList.props().guesses));
  });

});