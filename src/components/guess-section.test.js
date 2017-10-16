import React from 'react';
import {shallow} from 'enzyme';
import GuessForm from './guess-form';
import {GuessSection} from './guess-section';

describe('<GuessSection/>', () => {

  it ('Mounts without crashing', () => {
    const shallowGuessSection = shallow(<GuessSection feedback={"hello"}/>);
    // console.log(shallowGuessSection.instance().props);
    

  });


  it ('Displays proper feedback', () => {
    const shallowGuessSection = shallow(<GuessSection feedback={`You're getting hot!`}  />);
    expect(shallowGuessSection.find('h2#feedback').text()).toBe(`You're getting hot!`);
    
  });


  it ('Contains the GuessForm', () => {

    const shallowGuessSection = shallow(<GuessSection feedback={`You're getting hot!`}  />);
    // console.log(GuessForm);
    const GuessForms = shallowGuessSection.find(GuessForm);
    expect(GuessForms.length).toBe(1);
    // console.log(GuessForms);

    // console.log(shallowGuessSection.find(GuessForm));
  });
});