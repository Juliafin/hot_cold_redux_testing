import React from 'react';
import {shallow} from 'enzyme';
import Game from './game';

describe ('<Game/>', () => {

  it ('Renders without crashing', () => {

    const shallowGame = shallow(<Game/>);
  });

});