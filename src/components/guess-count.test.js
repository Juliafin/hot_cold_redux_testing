import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';


describe('<GuessCount/>', ()  => {

  it ('Renders without crashing', () => {

    const shallowGuessCount = shallow(<GuessCount/>);

  });
  

  it ('Renders the right count', () => {

    const shallowGuessCount = shallow(<GuessCount dispatch={jest.fn()} count={3}/>);
    expect(shallowGuessCount.find('span#count').text()).toBe("3");
    
  });
});